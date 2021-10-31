const { Router } = require('express')
const router = Router(); 
const { renderAllFiles, renderNewFileForm, uploadFile } = require('../controllers/files.controllers');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: './Storage',
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

router.get('/all/files', renderAllFiles);

const upload = multer({
	storage:storage,
	dest: './Storage'
}).single('newfile');

router.get('/new/file', renderNewFileForm);
router.post('/new/file', upload, uploadFile);

module.exports = router;