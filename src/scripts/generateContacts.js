import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const readContacts = async () =>{
    try {
        const response = await fs.readFile(PATH_DB,"utf-8");
        console.log(JSON.parse(response));
        return JSON.parse(response);
    } catch (error) {
        console.log(error);
    }
};


const generateContacts = async (number) => {
    const data = await readContacts();
    
    for(let i = 0; i < number; i++){
        data.push(createFakeContact());
    };

    try{
        await fs.writeFile(PATH_DB, JSON.stringify(data), "utf-8");
        console.log('Дані успішно записані у файл.');
    }
    catch (err) {
        console.error('Помилка запису у файл:', err);
    };

};

await generateContacts(5);
