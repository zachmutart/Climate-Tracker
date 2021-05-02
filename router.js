const express = require('express');
const path = require('path');
const router = express.Router();

// The router links front end and server
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = router;