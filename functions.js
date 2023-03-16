// Olipas, Karl Kenneth Owen
// BSCS - CMSC 100 UV-7L

import { v4 as uuidv4 } from 'uuid';

const generateUniqueID = (fname, lname) => {
    var id = fname.charAt(0) + lname + uuidv4().slice(0,8);
    return id.toLowerCase();
}

export {generateUniqueID}