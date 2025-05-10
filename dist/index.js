"use strict";
// Task 1: Create a Student type alias with properties: id, name, age, gender (enum), and enrollmentStatus (boolean)
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (Gender = {}));
// Task 2: Create an array of students with 5 entries
let students = [
    {
        id: 1,
        name: "Alice Smith",
        age: 20,
        gender: Gender.Female,
        enrollmentStatus: true,
        subjects: [["Math", 85], ["Science", 90]],
        scholarship: "full",
    },
    {
        id: 2,
        name: "Bob Johnson",
        age: 21,
        gender: Gender.Male,
        enrollmentStatus: true,
        subjects: [["Math", 78], ["History", 82]],
        scholarship: "partial",
    },
    {
        id: 3,
        name: "Charlie Brown",
        age: 19,
        gender: Gender.Male,
        enrollmentStatus: false,
        subjects: [["Science", 65], ["English", 70]],
        scholarship: "none",
    },
    {
        id: 4,
        name: "Diana Prince",
        age: 22,
        gender: Gender.Female,
        enrollmentStatus: true,
        subjects: [["Math", 92], ["Art", 88]],
        scholarship: "full",
    },
    {
        id: 5,
        name: "Evan Davis",
        age: 20,
        gender: Gender.Other,
        enrollmentStatus: true,
        subjects: [["History", 75], ["Science", 80]],
        scholarship: "partial",
    },
];
let nextId = 6;
// Task 6: Create a reusable function expression for logging messages
const logMessage = (message) => {
    console.log(`Log: ${message}`);
};
// Ensure DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const genderInput = document.getElementById('genderInput');
    const enrollmentStatusInput = document.getElementById('enrollmentStatusInput');
    const subjectInput = document.getElementById('subjectInput');
    const marksInput = document.getElementById('marksInput');
    const scholarshipInput = document.getElementById('scholarshipInput');
    const addStudentBtn = document.getElementById('addStudentBtn');
    const studentTableBody = document.getElementById('studentTableBody');
    // State variables for editing
    let isEditing = false;
    let editingId = null;
    // Load students from localStorage on startup
    function loadStudents() {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            students = JSON.parse(storedStudents);
            nextId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
        }
        renderStudents();
    }
    // Save students to localStorage
    function saveStudents() {
        localStorage.setItem('students', JSON.stringify(students));
    }
    // Task 3: Add a function to add a student using default values if name is missing
    function handleAddOrUpdateStudent(name = "Anonymous") {
        logMessage('Add/Update button clicked');
        const age = Number(ageInput.value);
        const gender = genderInput.value;
        const enrollmentStatus = enrollmentStatusInput.value === "true";
        const subject = subjectInput.value;
        const marks = Number(marksInput.value);
        const scholarship = scholarshipInput.value;
        // Basic validation to prevent crashes
        if (!subject || isNaN(age) || isNaN(marks)) {
            alert('Please fill in age, subject, and marks.');
            return;
        }
        const newSubject = [subject, marks]; // Task 4: Tuple
        if (isEditing && editingId !== null) {
            // Update existing student
            const studentIndex = students.findIndex((s) => s.id === editingId);
            if (studentIndex !== -1) {
                students[studentIndex] = Object.assign(Object.assign({}, students[studentIndex]), { name,
                    age,
                    gender,
                    enrollmentStatus, subjects: [...students[studentIndex].subjects, newSubject], scholarship });
                logMessage(`Updated student ID ${editingId}`);
                resetForm();
            }
        }
        else {
            // Add new student
            const student = {
                id: nextId++,
                name,
                age,
                gender,
                enrollmentStatus,
                subjects: [newSubject],
                scholarship,
            };
            students.push(student);
            logMessage(`Added new student ID ${student.id}`);
        }
        saveStudents();
        renderStudents();
    }
    // Task 5: Add a function getAverageMarks(studentId: number): number
    function getAverageMarks(studentId) {
        const student = students.find((s) => s.id === studentId);
        if (!student)
            return 0;
        const totalMarks = student.subjects.reduce((sum, [, marks]) => sum + marks, 0);
        return student.subjects.length > 0 ? totalMarks / student.subjects.length : 0;
    }
    // Task 7: Use rest parameters to allow entering multiple subjects in one call
    function addSubjects(studentId, ...newSubjects) {
        const studentIndex = students.findIndex((s) => s.id === studentId);
        if (studentIndex !== -1) {
            students[studentIndex].subjects.push(...newSubjects);
            saveStudents();
            renderStudents();
            logMessage(`Added subjects to student ID ${studentId}`);
        }
    }
    // Task 9: Add a function with void return type to print all student details
    function printAllStudents() {
        logMessage('Printing all students:');
        students.forEach((student) => {
            console.log(student);
        });
    }
    // Task 10: Add a function that throws an error using a never return type if student not found
    function findStudentOrThrow(id) {
        const student = students.find((s) => s.id === id);
        if (!student) {
            throw new Error(`Student with ID ${id} not found.`);
        }
        return student;
    }
    // Delete a student
    function deleteStudent(id) {
        logMessage(`Delete button clicked for ID: ${id}`);
        students = students.filter((student) => student.id !== id);
        saveStudents();
        renderStudents();
        printAllStudents();
    }
    // Prepare to edit a student
    function editStudent(id) {
        logMessage(`Edit button clicked for ID: ${id}`);
        const student = findStudentOrThrow(id);
        nameInput.value = student.name;
        ageInput.value = student.age.toString();
        genderInput.value = student.gender;
        enrollmentStatusInput.value = student.enrollmentStatus.toString();
        subjectInput.value = '';
        marksInput.value = '';
        scholarshipInput.value = student.scholarship;
        addStudentBtn.textContent = 'Update Student';
        isEditing = true;
        editingId = id;
    }
    // Reset the form after adding/updating
    function resetForm() {
        nameInput.value = '';
        ageInput.value = '';
        genderInput.value = 'male';
        enrollmentStatusInput.value = 'true';
        subjectInput.value = '';
        marksInput.value = '';
        scholarshipInput.value = 'none';
        addStudentBtn.textContent = 'Add Student';
        isEditing = false;
        editingId = null;
    }
    // Render the student table
    function renderStudents() {
        studentTableBody.innerHTML = ''; // Clear existing rows
        students.forEach((student) => {
            const row = document.createElement('tr');
            row.setAttribute('data-id', student.id.toString());
            const averageMarks = getAverageMarks(student.id);
            row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.enrollmentStatus ? 'Enrolled' : 'Not Enrolled'}</td>
        <td>${student.subjects.map(([subject, marks]) => `${subject}: ${marks}`).join(', ')}</td>
        <td>${averageMarks.toFixed(2)}</td>
        <td>${student.scholarship}</td>
        <td class="action-btns">
          <button class="edit-btn" data-id="${student.id}">Edit</button>
          <button class="delete-btn" data-id="${student.id}">Delete</button>
        </td>
      `;
            studentTableBody.appendChild(row);
        });
        printAllStudents(); // Task 9: Print all students to console
    }
    // Event delegation for edit and delete buttons
    studentTableBody.addEventListener('click', (event) => {
        const target = event.target;
        if (!target || !target.hasAttribute('data-id'))
            return;
        const id = parseInt(target.getAttribute('data-id'));
        if (target.classList.contains('edit-btn')) {
            editStudent(id);
        }
        else if (target.classList.contains('delete-btn')) {
            deleteStudent(id);
        }
    });
    // Event listener for adding/updating a student
    addStudentBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        handleAddOrUpdateStudent(name);
    });
    // Initialize the app
    loadStudents();
});
