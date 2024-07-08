# student-registration

github -link:-
https://github.com/Amaresh20/student-registration

Student Registration Form Documentation:-

This project is a web-based application for student registration, allowing users to add, edit, and delete student records. The application utilizes HTML, CSS, and JavaScript to create a user-friendly interface, with data persistence managed through the browser's localStorage.

HTML:-

Header: Includes the title of the page and links to external resources such as stylesheets and fonts.
Form: Contains input fields for student name, student ID, email, and contact number, along with a submit button.
Table: Displays the student records in a tabular format with columns for Name, ID, Email, Contact, Edit, and Delete options.
CSS:-
Global Styles: Resets default padding and margin, sets the box-sizing property.
Body and Header: Styles for overall layout, including minimum height, text alignment, and margin.
Form Styles: Defines the layout and appearance of the form, including label and input styling.
Table Styles: Styles the table, including header and row styling, background colors, hover effects, and text alignment.
JavaScript:-
The JavaScript file handles the functionality of the application, including form submission, data storage, and data manipulation.

Event Listener: Listens for the form submission event and triggers the myToDo function.
Data Storage: Manages student data using localStorage to persist information across sessions.
Form Submission: Validates form input, creates a new student object, updates the local storage, and refreshes the displayed data.
Display Data: Dynamically generates table rows to display student data and adds event listeners for edit and delete actions.
Edit Functionality: Populates the form with existing student data for editing and updates the stored data upon submission.
Delete Functionality: Removes a student record from the local storage and updates the displayed data.
Usage:-
Add a Student: Fill out the form with the student's name, ID, email, and contact number, then click the submit button. The student record will be added to the table and stored in localStorage.
Edit a Student: Click the "Edit" button next to a student's record. The form will populate with the existing data. After making changes, click the "Update" button to save the changes.
Delete a Student: Click the "Delete" button next to a student's record. The record will be removed from the table and localStorage.

Conclusion:-
This student registration form application provides a simple yet effective way to manage student records using web technologies. The combination of HTML, CSS, and JavaScript ensures a seamless user experience with persistent data storage.
