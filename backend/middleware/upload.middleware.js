// upload.middleware.js

const coverUpload = multer({ storage: coverStorage });
const contentUpload = multer({ storage: contentStorage });

// Combine the two manually using fields
const combinedUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            if (file.fieldname === "cover") {
                cb(null, path.join(__dirname, "../uploads/covers"));
            } else if (file.fieldname === "file") {
                cb(null, path.join(__dirname, "../uploads/contents"));
            }
        },
        filename: (req, file, cb) => {
            const uniqueName = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueName);
        },
    }),
});

module.exports = {
    uploadCover: coverUpload,
    uploadContent: contentUpload,
    uploadCombined: combinedUpload.fields([
        { name: "cover", maxCount: 1 },
        { name: "file", maxCount: 1 },
    ]),
};
