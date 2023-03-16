# Exercise 3
### Author: Olipas, Karl Kenneth Owen
### Student Number: 2021 - 05707
### Section: UV-7L

## Program Description
This program provides two functions to generate unique IDs and add user accounts to a file.

### generateUniqueID()
This function takes in two parameters - first name and last name - and returns a unique ID by concatenating the first letter of the first name (converted to lowercase), the last name (converted to lowercase), and an alphanumeric string of length 8 generated using the uuid package.

### addAccount()
This function takes in an array with the following contents: first name, last name, email, and age. If all fields are present and valid, it saves the data into a new line of a file called users.txt in the format:
    firstname,lastname,email,age,uniqueID

It uses the generateUniqueID() function to generate a unique ID for the user. If the user is saved, the function returns true. Otherwise, it returns false.

## Test
The functions can be tested by calling them in a separate JavaScript file called test.js.