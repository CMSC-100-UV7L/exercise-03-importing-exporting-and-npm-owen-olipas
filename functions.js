// Olipas, Karl Kenneth Owen
// BSCS - CMSC 100 UV-7L

import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';

// function for generating user's unique id
const generateUniqueID = (fname, lname) => {
    var id = fname.charAt(0) + lname + uuidv4().slice(0,8);
    return id.toLowerCase();
}

const addAccount = (account_details) => {
    var flag = true;
    // console.log(account_details)

    // there should be 4 elements in the array
    if (account_details.length != 4){
        console.log(" ~ All fields should be present");
        flag = false;
    }
    
    // checks each input parameter if it is an empty string
    const param_string = ["First name", "Last name", "Email"];
    for (let i = 0; i<account_details.length-1; i++){
        if(account_details[i] === ""){
            console.log(" ~ " + param_string[i] + " should be present");
            flag = false;
        }
    }

    // checks if email is valid
    if (!isEmail(account_details[2])){
        console.log(" ~ Email should be in valid format (e.g. ada@love.com)");
        flag = false;
    }

    // checks if age is at least 18
    if (account_details[3] < 18){
        console.log(" ~ Age should be at least 18");
        flag = false;
    }
}


export { generateUniqueID, addAccount }