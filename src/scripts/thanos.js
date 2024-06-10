import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const readContacts = async () =>{
    try {
        const response = await fs.readFile(PATH_DB,"utf-8");
        return JSON.parse(response);
    } catch (error) {
        console.log(error);
    }
};

export const thanos = async () => {
try {
    const data = await readContacts();
    const newData = [];
    data.map(element => {
        if(Math.random() >= 0.5){
            return;
        }else{
            newData.push(element);
        }
    });
    fs.writeFile(PATH_DB,JSON.stringify(newData));
} catch (error) {
    console.log(error);
}
};

await thanos();
