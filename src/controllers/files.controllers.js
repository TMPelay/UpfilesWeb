const dirTree = require("directory-tree");
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const filesCtrl = {};

filesCtrl.renderAllFiles = (req, res) => {
	const tree = dirTree('./Storage');
	const files = tree.children;
	res.render('files/all-files', { files });
};

filesCtrl.renderNewFileForm = (req, res) => {
	res.render('files/new-file');
};

filesCtrl.uploadFile = (req, res) => {
	console.log(req.file);
	res.send('sent');
};

module.exports = filesCtrl;