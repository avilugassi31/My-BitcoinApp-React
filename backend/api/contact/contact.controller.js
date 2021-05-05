const logger = require('../../services/logger.service');
const userService = require('../user/user.service');
const contactService = require('./contact.service');

async function getContacts(req, res) {
    try {
        const contacts = await contactService.query(req.query);
        res.send(contacts);
    } catch (err) {
        logger.error('Cannot get contacts', err);
        res.status(500).send({ err: 'Failed to get contacts' });
    }
}

async function getContact(req, res) {
    try {
        const contact = await contactService.getById(req.params.id);
        res.send(contact);
    } catch (err) {
        logger.error('Failed to get contact', err);
        res.status(500).send({ err: 'Failed to get contact' });
    }
}

async function deleteContact(req, res) {
    try {
        await contactService.remove(req.params.id);
        res.send({ msg: 'Deleted successfully' });
    } catch (err) {
        logger.error('Failed to delete contact', err);
        res.status(500).send({ err: 'Failed to delete contact' });
    }
}
async function addContact(req, res) {
    try {
        var contact = req.body;
        // let { fullname, _id, imgUrl } = req.session.user;
        contact = await contactService.add(contact);
        res.send(contact);
    } catch (err) {
        logger.error('Failed to add contact', err);
        res.status(500).send({ err: 'Failed to add contact' });
    }
}

async function updateContact(req, res) {
    try {
        const contact = req.body;
        const savedContact = await contactService.update(contact);
        res.send(savedContact);
    } catch (err) {
        console.log('err:', err);
    }
}
module.exports = {
    getContacts,
    deleteContact,
    addContact,
    getContact,
    updateContact,
};
