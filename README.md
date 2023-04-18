# Run Instructions
1. clone the repo
2. make sure to have Node.js installed [https://nodejs.org/en]
3. run the following command:  npx create-react-app [PATHNAME]
4. delete the src folder in that folder and replace with this folder
5. navigate into [PATHNAME] you named the app in step 3
6. run the following command: npm start
*this should open up a browser with the application running on your local host*

# Component Props
- Required: list - the list you want shown in the dropdown
- Optional: title - the title of the dropdown if you want to say "Select xyz.." (DEFAULT: null)
- Optional: singleSelect - true if only one selection possible, false if multiple selections possible (DEFAULT: true)
- Optional: hasSearch - true if you want user to be able to search the dropdown list, false if no search (DEFAULT: false)
