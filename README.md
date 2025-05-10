# student-Record
📚 Student Record System
Welcome to the Student Record System, a simple yet powerful web application built with TypeScript, HTML, and CSS. This project allows users to manage student records efficiently by adding, editing, and deleting student information, with data persistence using localStorage. It’s a perfect example of a front-end application showcasing TypeScript’s type safety and DOM manipulation in a browser environment.
🚀 Features

Add Students: Easily add new students with details like name, age, gender, enrollment status, subjects, marks, and scholarship status.
Edit Students: Update existing student records with a user-friendly interface.
Delete Students: Remove students from the list with a single click.
Data Persistence: Student data is saved in localStorage, ensuring records persist across page refreshes.
Average Marks Calculation: Automatically calculate and display the average marks for each student.
TypeScript Type Safety: Leverages TypeScript for type definitions, enums, and union types to ensure robust code.
Clean UI: A minimalistic and intuitive interface styled with CSS for a seamless user experience.

🛠️ Tech Stack

TypeScript: For type-safe JavaScript code.
HTML: Structure of the web application.
CSS: Styling for a clean and functional UI.
localStorage: For data persistence in the browser.

📸 Screenshots
Main interface showing the student table and input form.
📋 Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher): For managing dependencies and running the development server.
npm: Node package manager (comes with Node.js).
A modern web browser (Chrome, Firefox, etc.).

⚙️ Installation and Setup
Follow these steps to get the project up and running on your local machine:

Clone the Repository  
git clone [https://github.com/Sarthakbhai/student-record-system.git](https://github.com/Sarthakbhai395/student-Record.git)
cd student-record-system


Install DependenciesInstall the required packages using npm:
npm install


Compile TypeScriptCompile the TypeScript code to JavaScript:
npm run build

Or use the watch mode to automatically recompile on changes:
npm run watch


Start the Development ServerLaunch the application using lite-server:
npm start

This will open the app in your default browser (typically at http://localhost:3000).


📖 How to Use

View Students: Upon loading, the app displays a table of 5 default students.
Add a Student: Fill in the form fields (name, age, gender, enrollment status, subject, marks, scholarship) and click "Add Student". Name is optional and defaults to "Anonymous".
Edit a Student: Click the "Edit" button on a student row, modify the details in the form, and click "Update Student".
Delete a Student: Click the "Delete" button to remove a student from the list.
Check the Console: Open the browser’s developer console (F12) to view logs of all actions (add, edit, delete, and student list).

📂 Project Structure
student-record-system/
├── src/
│   └── index.ts           # TypeScript source code
├── dist/
│   └── index.js           # Compiled JavaScript (generated)
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation

📜 Assignment Tasks
This project fulfills the following requirements:

Task 1: Created a Student type alias with properties: id, name, age, gender (enum), enrollmentStatus, subjects, and scholarship.
Task 2: Initialized an array of 5 students.
Task 3: Implemented a function to add a student with a default name ("Anonymous").
Task 4: Used a tuple [string, number] for subjects (e.g., ["Math", 85]).
Task 5: Added a getAverageMarks function to calculate average marks.
Task 6: Created a reusable logMessage function for logging.
Task 7: Used rest parameters in addSubjects to add multiple subjects.
Task 8: Defined a ScholarshipStatus union type ("none" | "partial" | "full").
Task 9: Implemented printAllStudents with a void return type to log all students.
Task 10: Added findStudentOrThrow with a never return type to throw an error if a student isn’t found.

💡 Future Improvements

Add form validation for better user input handling.
Implement sorting and filtering for the student table.
Enhance the UI with animations and responsive design.
Add export/import functionality to save student data as a file.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.
©️ Copyright
© 2025 [Sarthakbhai395]. All rights reserved.This project is intended for educational purposes and personal portfolio use. Unauthorized distribution or commercial use is prohibited without permission.
🙌 Acknowledgments

Thanks to the TypeScript community for excellent documentation and resources.
Inspired by various front-end development tutorials and TypeScript best practices.


Built with ❤️ by [Sarthakbhai395]GitHub | https://www.linkedin.com/in/sarthak-bhatnagar-801a02343/ | sarthakbhatnagar2005@gmail.com
