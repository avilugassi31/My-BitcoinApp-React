const express = require('express');
const { requireAuth } = require('../../middlewares/requireAuth.middleware');
const { log } = require('../../middlewares/logger.middleware');
const {
    addContact,
    getContacts,
    getContact,
    deleteContact,
    updateContact,
} = require('./contact.controller');
const router = express.Router();


router.get('/', getContacts);
router.post('/', addContact)
router.get('/:id', getContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact)

module.exports = router;
