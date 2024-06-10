import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';


export const countContacts = async () => {
    const contacts = await fs.readFile(PATH_DB);
    return JSON.parse(contacts).length;
};

console.log(await countContacts());
