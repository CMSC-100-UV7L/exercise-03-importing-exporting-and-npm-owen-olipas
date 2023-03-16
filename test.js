// Olipas, Karl Kenneth Owen
// BSCS - CMSC 100 UV-7L

import { generateUniqueID, addAccount } from "./functions.js"

// Test case for generating unique id
console.log("\nGENERATING UNIQUE ID")
console.log(generateUniqueID("Alan", "Turing"));

// Test case incomplete number of fields
console.log("\nINCOMPLETE FIELD")
addAccount(["Alan", "Turing", "aturing@w3c.com",]);

// Test case for empty input
console.log("\nEMPTY FIELD")
addAccount(["Alan", "", "aturing@w3c.com", 58]);

// Test case for invalid email format
console.log("\nINVALID EMAIL")
addAccount(["Alan", "Turing", "aturingw3c.com", 58]);

// Test case for age that is below 18
console.log("\nAGE BELOW 18")
addAccount(["Alan", "Turing", "aturing@w3c.com", 17]);

// Test case for multiple invalid input
console.log("\nMULTIPLE INVALID INPUT")
addAccount(["", "Turing", "aturingw3c.com", 9]);

// Successful test cases
console.log("\nSUCCESSFUL INPUT")
addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]);
addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]);