
## COM109 CW2 – Group Report

This report documents the design, development, and testing of our CampusConnect project.

## 1. Project Overview
Problem Addressed & Target Users

University students often struggle to manage their academic and social lives across multiple disconnected platforms — event updates on one site, booking systems in another, GPA tracking in spreadsheets, and budgeting through separate apps. This fragmentation creates inefficiency and stress.

Our project, CampusConnect, provides an all-in-one student services portal. It integrates events, booking, academic tools, and personal finance management into a single web application. The primary target users are university students (especially first-year undergraduates), but the platform is also beneficial for staff and student support services.

Pages & Features Implemented

Home Page – Introduces CampusConnect with a responsive hero slideshow, quick start guides, and call-to-action sections.

Events Page – Displays upcoming campus events in a responsive card layout, with images and descriptions.

Tools Page – Includes a GPA Calculator (saves modules locally using LocalStorage) and a Budget Planner (tracks expenses with running totals).

Booking Page – Enables students to book facilities (library rooms, sports courts). Includes input validation and a booking summary.

Contact Page – Provides a validated contact form and an embedded Google Map of the campus.

Design Goals

Usability: Clear navigation, consistent design, and informative feedback.

Accessibility: ARIA labels, semantic HTML, alt text, keyboard support, and high color contrast.

Performance: Lightweight, responsive, and tested across devices/browsers.

## 2. UX & Accessibility

Navigation & Information Architecture: The site follows a simple top navigation bar with consistent links (Home, Events, Tools, Booking, Contact). Pages are grouped logically and use a responsive grid.

Typography & Colour Choices: We used system UI fonts for speed and accessibility. Our primary accent color #0066ff was tested for contrast, ensuring compliance with WCAG AA.

Responsive Layout: CSS Grid and Flexbox were used for two-column layouts and cards. The site adapts to mobile view using media queries.

Accessibility Measures:

All images include descriptive alt text.

Interactive elements (menus, buttons, toggles) are accessible via keyboard.

ARIA attributes (aria-label, aria-live) were added for clarity.

Evidence: Lighthouse accessibility score = 98/100 (screenshot attached).

## 3. Interactivity & Animations

jQuery Animations:

Hero banner uses fade transitions for slides.

Navigation menu toggles smoothly on mobile.

Event Handling: Forms use event listeners to update DOM in real time (e.g., GPA calculations, budget totals).

Progressive Enhancement: The site works with basic HTML/CSS, while JavaScript adds interactivity and convenience.

## 4. Forms & Validation

Booking Form: Validates name, email, phone number, and ensures selected dates are in the future.

Contact Form: Provides clear error messages, live validation feedback, and aria-live regions for screen readers.

Error Messaging: Errors are shown in red with descriptive messages.

Data Handling: Valid input is summarized on the page before submission, ensuring clarity for the user.

## 5. Tools & LocalStorage

GPA Calculator:

Accepts modules, grades, and credits.

Calculates weighted GPA.

Saves entries in LocalStorage, so progress is retained on refresh.

Budget Planner:

Tracks expense items with amounts.

Provides a running total, updated dynamically.

Uses LocalStorage for persistence.

Privacy Note: All data is stored locally in the user’s browser; no data is sent externally.

## 6. Implementation Details

Separation of Concerns:

HTML for structure (.html files).

CSS for presentation (/css/style.css).

JavaScript for interactivity (/js/tools.js, /js/main.js).

Naming & Comments: Files and IDs use clear names (gpaForm, budgetList). Inline comments explain logic.

Git/GitHub Workflow:

Each team member cloned the repo and worked on feature branches.

Pull Requests were reviewed before merging to main.

Commit history shows equal contributions. (screenshots of commit logs attached).

## 7. Testing

Cross-Browser Testing: Verified on Chrome, Edge, and Firefox.

Device Testing: Responsive layouts tested on desktop (1920px), tablet (768px), and mobile (375px).

Edge Cases:

GPA calculator tested with invalid grades (negative, >100).

Booking form tested with past dates.

Contact form tested with invalid emails/phone numbers.

Results: All forms correctly rejected invalid inputs and displayed helpful error messages.

## 8. Individual Contributions

***a. Rafi-k21 (Group Leader)***

Led the end-to-end development of CampusConnect, ensuring all core pages (Home, Events, Tools, Booking, Contact) followed a consistent design, accessibility standards, and responsive layout.

Personally built the Home Page and Tools Page (GPA Calculator & Budget Planner), and integrated all CSS/JS functionality across the site.

Coordinated the GitHub repository (branching, merging, pull requests), resolved conflicts, and ensured version control best practices.

Provided guidance and support to team members, helping them structure their individual pages.

Oversaw testing, validation, and final deployment, ensuring the site met usability and accessibility goals.

***b. abuHasan12***

Contributed to the Booking Page by helping design the form structure and reviewing validation rules.

Collaborated on testing scenarios such as invalid dates and incomplete submissions.

Assisted with page content and user flow ideas.

***c. mdtarekulster***

Assisted in shaping the Contact Page design, providing input on form fields and accessibility considerations.

Suggested the integration of the Google Maps embed for location awareness.

Participated in cross-browser and device testing.

***d. Junayed190***

Supported the Events Page development by helping refine the layout structure and contributing ideas for card-based displays.

Assisted in image selection and content placement.

Helped with reviewing page responsiveness on mobile devices.
## 9. References

Libraries: jQuery 3.7.1 (via CDN).

Guidelines: W3C Accessibility Guidelines (WCAG 2.1), ARIA Authoring Practices.

Tutorials Consulted:

MDN Web Docs (form validation, LocalStorage).

jQuery official documentation.
