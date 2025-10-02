ollege Event Management System (CEMS)
A comprehensive, full-stack web application for managing and facilitating student registration for college events. The system is split into two secure portals: an Admin Dashboard for event creation and tracking, and a Student Portal for secure browsing and registration.

✨ Features
Admin Dashboard (index.html → dashboard.html)
The administrator can manage the entire event lifecycle:

Event Creation: Easily add new events with details like title, description, date, venue, and club. Events are stored in the events Firestore collection.

Registration Tracking: View a dynamic list of all existing events. For each event, toggle a detailed list of registered students, including their Name and Email, retrieved from the registrations collection.

Student Portal (student_regi.html / student_login.html → events.html)
The student experience is streamlined and secure:

Secure Authentication: Students sign up using student_regi.html, creating a Firebase Auth user and simultaneously saving detailed student data (name, prn, class, college, etc.) to the Firestore students collection.

Event Browsing: View all available events in a clear, card-based layout.

One-Click Registration: When a student registers for an event, the system securely fetches the student's full name and creates a record in the registrations collection, linking the student to the event.

🛠️ Technology Stack
Category	Technology	Purpose
Frontend	HTML5, CSS3, Vanilla JavaScript (ES Modules)	All client-side presentation and logic.
Styling	Custom CSS (style.css)	Dark-themed, professional aesthetic using CSS variables and the 'Inter' font.
Backend/Database	Google Firebase v11	Serverless backend for all data persistence and user management.
Services	Firebase Auth & Firestore	Handles user sign-in and stores event/registration data.

Export to Sheets
📂 Project Structure
File	Description
index.html	Admin Login Page.
dashboard.html	Admin Event Management Dashboard (Add event, view registrations).
student_login.html	Student Login Page.
student_regi.html	Student Registration Page (Auth + Firestore data collection).
events.html	Student's main page for viewing and registering for events.
firebase.js	Centralized Firebase configuration and service exports.
style.css	Global styling for a dark-themed UI.

Export to Sheets
🚀 Setup and Installation
To get this project running locally, you must connect it to your own Firebase project.

Clone the Repository:

Bash

git clone [repository-url]
cd EventManagementSystem
Firebase Project Setup:

Create a new project in the Firebase Console.

In Firebase Authentication, enable the Email/Password sign-in provider.

Initialize and enable Firestore Database.

Update Configuration:

Go to your Firebase Project Settings to find your web app configuration object.

Replace the placeholder firebaseConfig object in firebase.js with your actual project keys and IDs.

Run: Open index.html or student_login.html in your web browser. Due to the use of ES Modules, you may need to use a simple local web server (like VS Code's Live Server extension) for all files to load correctly.

Note on Admin Access: For the Admin login (index.html) to work, you must manually create an administrator user (email/password) within your Firebase Authentication console.
