Student Finance Tracker
1. Project Overview
The Student Finance Tracker is a responsive web application designed to help students manage and monitor their daily expenses. Many students struggle to track where their money goes, especially with small daily purchases like food or transport. This app will allow users to record transactions, categorize them, and view summary statistics to better understand their spending habits.

The application will be built using vanilla HTML, CSS, and JavaScript without any frameworks. It will focus on accessibility, responsive design, clean modular code, and proper input validation using regular expressions. All data will be stored locally in the browser using localStorage, so the user’s records persist across sessions.

Key features will include:
Adding, editing, and deleting transactions
Sorting and filtering transactions
Regex-based live search
A dashboard showing spending statistics
A configurable spending cap with alerts
JSON import and export functionality

2. Data Model
Each transaction record will follow a structured object format to ensure consistency and validation.
{
  id: "txn_001",
  description: "Lunch at cafeteria",
  amount: 12.50,
  category: "Food",
  date: "2025-09-29",
  createdAt: "2025-09-29T10:15:00Z",
  updatedAt: "2025-09-29T10:15:00Z"
}
3. Regex Validation Plan
1. Description Validation
Must not contain leading or trailing spaces.
Double spaces should be collapsed.
Example pattern: prevent empty or whitespace-only strings.
2. Amount Validation
Must be a valid number.
Can include up to two decimal places.
Should not allow negative values.
Ensures correct financial formatting.
3. Date Validation
Must follow the YYYY-MM-DD format.
Month and day ranges will be validated using grouped conditions.
4. Category Validation
Only letters, spaces, and hyphens allowed.
No numbers or special characters.
5. Advanced Regex (Duplicate Word Detection)
Detects repeated words in the description (e.g., “coffee coffee”).
Uses a back-reference pattern to improve input quality.
4. Accessibility Plan
Accessibility will be a key priority in this application.
The following measures will be implemented:
Use of semantic HTML landmarks (header, nav, main, section, footer).
Proper heading hierarchy (h1, h2, h3).
Labels explicitly connected to form inputs.
Keyboard navigation for all interactive elements.
Visible focus styles for better usability.
Sufficient color contrast for readability.
A skip-to-content link for keyboard users.
The goal is to ensure the app is fully usable without a mouse.

5. Wireframe Sketch
HEADER (App Title)
NAVIGATION (Dashboard | Transactions | Settings | About)
MAIN
Dashboard Section
Total Transactions
Total Spending
Top Category
Last 7 Days Summary
Spending Cap Status
Add Transaction Form
Description
Amount
Category
Date
Submit Button
Search & Sort Controls
Regex Search Input
Case Toggle
Sort Dropdown
Transactions Table
Description
Amount
Category
Date
Edit/Delete Buttons
FOOTER (About + Contact Information)
The layout will be mobile-first and adapt to tablet and desktop breakpoints using Flexbox and media queries.