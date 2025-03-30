# Project Management App

## Overview
This project is a **Project Management App** built with React and Tailwind CSS. It allows users to create, manage, and delete projects, as well as add tasks to them. The project helped me understand key React concepts like component management, state handling, prop drilling, refs, and validation.

## Key Topics Learned
### 1. Adding a "Projects Sidebar" Component
- Created a sidebar to display a list of projects.
- Used React state to manage the currently selected project.

### 2. Styling with Tailwind CSS
- Styled the sidebar, buttons, and input fields using Tailwind CSS.
- Learned how to apply utility classes efficiently for a clean and responsive design.

### 3. Creating a "New Project" Component & Reusable Input Component
- Built a reusable input component to manage user input efficiently.
- Used controlled components for handling form data.

### 4. Managing State for Component Switching
- Implemented state management to switch between different views (e.g., project list, new project form).
- Used conditional rendering to show and hide components dynamically.

### 5. Collecting User Input with Refs & Forwarded Refs
- Used `useRef` to collect input values without relying on state.
- Implemented **forwarded refs** to manage focus and interaction with child components.

### 6. Handling Project Creation & UI Updates
- Implemented logic to add new projects dynamically.
- Used state updates to reflect changes in the UI immediately.

### 7. Validating User Input & Showing an Error Modal
- Used `useImperativeHandle` to control the modal component.
- Displayed validation errors when the user submitted empty inputs.

### 8. Making Projects Selectable & Viewing Project Details
- Implemented logic to switch between projects and display their tasks.
- Handled selection state to highlight the active project.

### 9. Handling Project Deletion
- Allowed users to delete projects.
- Managed state updates to reflect project removal.

### 10. Adding "Project Tasks" & Managing Tasks
- Created a task management system for each project.
- Used **prop drilling** to pass data between components.

### 11. Fixing Issues Like Task Persistence Across Projects
- Faced a bug where switching projects retained tasks from the previous project.
- Fixed it by ensuring tasks were properly linked to their respective projects.

## Challenges Faced
- **Prop Drilling:** Managing deeply nested components became challenging.
- **State Persistence Issues:** Tasks appearing in the wrong project due to improper state management.
- **Validation Handling:** Ensuring the UI provided meaningful feedback when invalid data was entered.

## Technologies Used
- **React.js** (for UI and component management)
- **Tailwind CSS** (for styling)
- **useState & useRef Hooks** (for managing component state and refs)

## Future Improvements
- Implement **Context API** or **Redux** to handle global state and avoid prop drilling.
- Add **local storage** support to persist projects and tasks.
- Implement drag-and-drop functionality for task management.

---
This project was a great learning experience in React and helped reinforce important concepts in state management, component structuring, and UI design. 🚀

