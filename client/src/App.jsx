import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const WhyChooseAcademy = React.lazy(() => import("./pages/WhyChooseAcademy"));
const ServicesPage = React.lazy(() => import("./pages/Services"));
const ContactSupportPage = React.lazy(() => import("./pages/ContactSupport"));
const PersonalInfoForm = React.lazy(() => import("./pages/PersonalInfoForm"));
const DocumentUploadForm = React.lazy(() => import("./pages/DocumentUploadForm"));
const ApplicationSuccess = React.lazy(() => import("./pages/ApplicationSuccess"));
const AdminApplications = React.lazy(() => import("./pages/AdminApplications"));

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Why-Choose-Academy" element={<WhyChooseAcademy />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact-support" element={<ContactSupportPage />} />
            <Route path="/apply" element={<PersonalInfoForm />} />
            <Route path="/apply/documents" element={<DocumentUploadForm />} />
            <Route path="/application-success" element={<ApplicationSuccess />} />
            <Route path="/admin/applications" element={<AdminApplications />} /> 
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
