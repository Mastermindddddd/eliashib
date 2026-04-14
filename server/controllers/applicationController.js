import Application from "../models/Application.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const buildS3Url = (key) => {
  return `https://${process.env.MY_AWS_S3_BUCKET_NAME}.s3.${process.env.MY_AWS_REGION}.amazonaws.com/${key}`;
};

const getS3Client = () => {
  if (!process.env.MY_AWS_ACCESS_KEY_ID || !process.env.MY_AWS_SECRET_ACCESS_KEY || !process.env.MY_AWS_REGION) {
    throw new Error("S3 credentials are missing. Check AWS environment variables.");
  }

  return new S3Client({
    region: process.env.MY_AWS_REGION,
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    },
  });
};

const uploadToS3 = async (file, folder = "applications") => {
  // Validate env vars before attempting upload
  if (!process.env.MY_AWS_S3_BUCKET_NAME || !process.env.MY_AWS_REGION) {
    throw new Error("S3 configuration is missing. Check AWS environment variables.");
  }

  const fileExtension = file.originalname.split(".").pop();
  // Sanitize filename — remove spaces and special chars
  const safeName = file.originalname
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .substring(0, 40);
  const key = `${folder}/${Date.now()}-${safeName}.${fileExtension}`;

  const s3 = getS3Client();
  const command = new PutObjectCommand({
    Bucket: process.env.MY_AWS_S3_BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  await s3.send(command);
  return buildS3Url(key);
};


// STEP 1: save personal info
export const createPersonalInfo = async (req, res) => {
  try {
    const {
      title,
      firstName,
      surname,
      idType,
      idNumber,
      idCountry,
      gender,
      dob,
      mobile,
      familyMobile,
      email,
      postalCode,
      company,
      workDuration,
      helpMessage,
      communicationMethod,
      paymentMethod,
      salaryDate,
      commitment,
    } = req.body;

    if (!firstName || !surname || !email) {
      return res.status(400).json({
        message: "First name, surname, and email are required",
      });
    }

    const application = await Application.create({
      title,
      firstName,
      surname,
      idType,
      idNumber,
      idCountry,
      gender,
      dob,
      mobile,
      familyMobile,
      email,
      postalCode,
      company,
      workDuration,
      helpMessage,
      communicationMethod,
      paymentMethod,
      salaryDate,
      commitment: commitment === true || commitment === "true",
      personalInfoCompleted: true,
    });

    return res.status(201).json({
      message: "Personal information saved successfully",
      applicationId: application._id,
      application,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to save personal information",
      error: error.message,
    });
  }
};

// STEP 2: upload docs + finalize
export const uploadDocumentsAndSubmit = async (req, res) => {
  try {
    const { applicationId } = req.params;

    // Validate applicationId format to avoid mongoose cast errors
    if (!applicationId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid application ID format" });
    }

    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    const {
      marketingEmail,
      marketingSMS,
      marketingPhone,
      marketingWhatsapp,
      joinMore,
      acceptConsent,
    } = req.body;

    // Upload files — wrap each in try/catch so one failure gives a clear message
    if (req.files?.selfie?.[0]) {
      try {
        application.selfieUrl = await uploadToS3(
          req.files.selfie[0],
          "applications/selfies"
        );
      } catch (uploadErr) {
        return res.status(500).json({
          message: "Failed to upload selfie",
          error: uploadErr.message,
        });
      }
    }

    if (req.files?.idPassport?.[0]) {
      try {
        application.idPassportUrl = await uploadToS3(
          req.files.idPassport[0],
          "applications/id-passports"
        );
      } catch (uploadErr) {
        return res.status(500).json({
          message: "Failed to upload ID/Passport",
          error: uploadErr.message,
        });
      }
    }

    application.marketingEmail = ["yes", "no"].includes(marketingEmail) ? marketingEmail : "";
    application.marketingSMS = ["yes", "no"].includes(marketingSMS) ? marketingSMS : "";
    application.marketingPhone = ["yes", "no"].includes(marketingPhone) ? marketingPhone : "";
    application.marketingWhatsapp = ["yes", "no"].includes(marketingWhatsapp) ? marketingWhatsapp : "";
    application.joinMore = joinMore === true || joinMore === "true";
    application.acceptConsent = acceptConsent === true || acceptConsent === "true";
    application.documentsCompleted = true;
    application.submitted = true;

    await application.save();

    return res.status(200).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error("uploadDocumentsAndSubmit error:", error); // <-- log full error server-side
    return res.status(500).json({
      message: "Failed to upload documents and submit application",
      error: error.message,
    });
  }
};

// optional: get one application
export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    return res.status(200).json(application);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch application",
      error: error.message,
    });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      message: "Applications fetched successfully",
      count: applications.length,
      applications,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};