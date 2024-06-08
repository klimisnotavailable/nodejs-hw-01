import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const readContacts = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return [];
        } else {
            throw err;
        }
    }
};

const writeContacts = async (contacts) => {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

// Основна функція для додавання нового контакту
export const addOneContact = async () => {
    try {
        const contacts = await readContacts(); // Читаємо існуючі контакти
        const newContact = createFakeContact(); // Створюємо новий контакт
        contacts.push(newContact); // Додаємо новий контакт у масив
        await writeContacts(contacts); // Записуємо оновлений масив контактів
        console.log('Дані успішно записані у файл.');
    } catch (err) {
        console.error('Помилка запису у файл:', err);
    }
};


// export const addOneContact = async () => {
//     const contacts = await readContacts();
//     const fakeContact = createFakeContact();
//     try{
//         await fs.appendFile(PATH_DB, JSON.stringify(), "utf-8");
//         console.log('Дані успішно записані у файл.');
//     }
//     catch (err) {
//         console.error('Помилка запису у файл:', err);
//     };
// };

await addOneContact();
