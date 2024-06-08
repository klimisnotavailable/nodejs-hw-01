import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const response = await fs.readFile(PATH_DB,"utf-8");
        return JSON.parse(response);
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
