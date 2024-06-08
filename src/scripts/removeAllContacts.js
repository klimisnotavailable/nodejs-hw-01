import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        fs.writeFile(PATH_DB,"[]");
    } catch (error) {
        console.log(error);
    }
};

await removeAllContacts();
