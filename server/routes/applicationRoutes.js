import express from "express";
import upload from "../middleware/upload.js";
import {
  createPersonalInfo,
  uploadDocumentsAndSubmit,
  getApplicationById,
  getAllApplications,
} from "../controllers/applicationController.js";

const router = express.Router();

// step 1
router.post("/personal-info", createPersonalInfo);

// step 2
router.post(
  "/:applicationId/documents",
  upload.fields([
    { name: "selfie", maxCount: 1 },
    { name: "idPassport", maxCount: 1 },
  ]),
  uploadDocumentsAndSubmit
);

// optional
router.get("/:applicationId", getApplicationById);
router.get("/admin/all", getAllApplications);

export default router;