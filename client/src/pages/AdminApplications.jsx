import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("https://eliashib.vercel.app/api/applications/admin/all");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch applications");
        }

        setApplications(data.applications || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="w-full px-6 sm:px-10 lg:px-14 pt-6">
        <Navbar />
      </div>

      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-14 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px w-[80px] sm:w-[110px] bg-white/20" />
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold uppercase tracking-[-0.02em]">
              Admin Applications
            </h1>
            <div className="h-px w-[80px] sm:w-[110px] bg-white/20" />
          </div>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            View all submitted applications, documents, and selfie uploads.
          </p>
        </div>

        {loading && (
          <p className="text-center text-white/70">Loading applications...</p>
        )}

        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && !error && applications.length === 0 && (
          <p className="text-center text-white/70">No applications found.</p>
        )}

        {!loading && !error && applications.length > 0 && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div
                key={app._id}
                className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 text-white px-6 py-4">
                  <h2 className="text-lg sm:text-xl font-bold">
                    {app.firstName} {app.surname}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    Submitted: {new Date(app.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="p-6 grid md:grid-cols-[180px_1fr] gap-6">
                  {/* Selfie */}
                  <div>
                    <h3 className="text-sm font-bold mb-3">Selfie</h3>
                    {app.selfieUrl ? (
                      <img
                        src={app.selfieUrl}
                        alt={`${app.firstName} selfie`}
                        className="w-full h-[220px] object-cover rounded-md border border-black/10"
                      />
                    ) : (
                      <div className="w-full h-[220px] bg-gray-200 rounded-md flex items-center justify-center text-sm text-gray-500">
                        No selfie
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-sm font-bold mb-3">Application Details</h3>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <p><span className="font-semibold">Title:</span> {app.title || "-"}</p>
                      <p><span className="font-semibold">Gender:</span> {app.gender || "-"}</p>
                      <p><span className="font-semibold">Email:</span> {app.email || "-"}</p>
                      <p><span className="font-semibold">Mobile:</span> {app.mobile || "-"}</p>
                      <p><span className="font-semibold">Family Mobile:</span> {app.familyMobile || "-"}</p>
                      <p><span className="font-semibold">Postal Code:</span> {app.postalCode || "-"}</p>
                      <p><span className="font-semibold">ID Type:</span> {app.idType || "-"}</p>
                      <p><span className="font-semibold">ID Number:</span> {app.idNumber || "-"}</p>
                      <p><span className="font-semibold">ID Country:</span> {app.idCountry || "-"}</p>
                      <p><span className="font-semibold">DOB:</span> {app.dob || "-"}</p>
                      <p><span className="font-semibold">Company:</span> {app.company || "-"}</p>
                      <p><span className="font-semibold">Work Duration:</span> {app.workDuration || "-"}</p>
                      <p><span className="font-semibold">Communication:</span> {app.communicationMethod || "-"}</p>
                      <p><span className="font-semibold">Payment Method:</span> {app.paymentMethod || "-"}</p>
                      <p><span className="font-semibold">Salary Date:</span> {app.salaryDate || "-"}</p>
                      <p><span className="font-semibold">Commitment:</span> {app.commitment ? "Yes" : "No"}</p>
                      <p><span className="font-semibold">Join +more:</span> {app.joinMore ? "Yes" : "No"}</p>
                      <p><span className="font-semibold">Consent Accepted:</span> {app.acceptConsent ? "Yes" : "No"}</p>
                      <p><span className="font-semibold">Marketing Email:</span> {app.marketingEmail || "-"}</p>
                      <p><span className="font-semibold">Marketing SMS:</span> {app.marketingSMS || "-"}</p>
                      <p><span className="font-semibold">Marketing Phone:</span> {app.marketingPhone || "-"}</p>
                      <p><span className="font-semibold">Marketing WhatsApp:</span> {app.marketingWhatsapp || "-"}</p>
                    </div>

                    {app.helpMessage && (
                      <div className="mt-5">
                        <p className="font-semibold text-sm mb-1">Help Message</p>
                        <p className="text-sm text-black/75 leading-relaxed bg-gray-100 p-3 rounded-md">
                          {app.helpMessage}
                        </p>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-3">
                      {app.idPassportUrl ? (
                        <a
                          href={app.idPassportUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded bg-fuchsia-800 text-white text-sm font-semibold hover:bg-fuchsia-700"
                        >
                          View ID / Passport
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center px-4 py-2 rounded bg-gray-300 text-gray-600 text-sm font-semibold">
                          No ID / Passport
                        </span>
                      )}

                      <span
                        className={`inline-flex items-center justify-center px-4 py-2 rounded text-sm font-semibold ${
                          app.submitted
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {app.submitted ? "Submitted" : "Incomplete"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminApplications;