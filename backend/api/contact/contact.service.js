const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;
const asyncLocalStorage = require('../../services/als.service');

async function query() {
    try {
        const collection = await dbService.getCollection('contacts');

        const contacts = await collection.find({}).toArray();

        return contacts;
    } catch (err) {
        logger.error('cannot find contacts', err);
        throw err;
    }
}
async function remove(contactId) {
    try {
        const collection = await dbService.getCollection('contacts');
        const query = { _id: ObjectId(contactId) };
        await collection.deleteOne(query);
    } catch (err) {
        logger.error(`cannot remove contact ${contactId}`, err);
        throw err;
    }
}
async function getById(contactId) {
    try {
        const collection = await dbService.getCollection('contacts');
        const contact = await collection.findOne({ _id: ObjectId(contactId) });
        return contact;
    } catch (err) {
        logger.error(`while finding contact ${contactId}`, err);
        throw err;
    }
}
async function getByContactname(contactname) {
    try {
        const collection = await dbService.getCollection('contacts');
        const contact = await collection.findOne({ contactname });
        return contact;
    } catch (err) {
        logger.error(`while finding contact ${contactname}`, err);
        throw err;
    }
}
async function update(contact) {
    try {
        contact._id = ObjectId(contact._id);
        const collection = await dbService.getCollection('contacts');
        await collection.updateOne({ _id: contact._id }, { $set: contact });
        return contact;
    } catch (err) {
        console.log('err:', err);
    }
}
async function add(contact) {
    try {
        const collection = await dbService.getCollection('contacts');
        await collection.insertOne(contact);
        return contact;
    } catch (err) {
        logger.error('cannot insert contact', err);
        throw err;
    }
}
module.exports = {
    query,
    remove,
    update,
    add,
    getByContactname,
    getById,
};
