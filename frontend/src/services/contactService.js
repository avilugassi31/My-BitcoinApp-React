import { httpService } from './http.service.js';

const CONTACTS_URL = 'contact/';
export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact,
};

async function getContacts(filterBy = null) {
    const contacts = await httpService.get(CONTACTS_URL, filterBy);
    var contactsToReturn = contacts;
    if (filterBy) {
        contactsToReturn = filter(filterBy);
    }
    return contactsToReturn;
}

function getContactById(id) {
    return httpService.get(CONTACTS_URL + id);
}

function deleteContact(id) {
    return httpService.delete(CONTACTS_URL + id);
}

function saveContact(contact) {
    if (contact._id) {
        return httpService.put(CONTACTS_URL + contact._id, contact);
    } else {
        return httpService.post(CONTACTS_URL, contact);
    }
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '',
        coins: '',
        details: '',
    };
}

async function filter({ term }) {
    term = term.toLocaleLowerCase();
    const contacts = await httpService.get(CONTACTS_URL);
    return contacts.filter((contact) => {
        return (
            contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
        );
    });
}
