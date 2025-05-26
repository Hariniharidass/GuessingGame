# Guess my Nationality!

"Guess my Nationality!" is a modern, responsive web application built with React that allows users to predict the nationality associated with a given name by leveraging an external API. The project emphasizes user authentication, a clean user interface, and efficient development practices.
---
## ✨ Features

* **Nationality Prediction:** The core functionality allows users to enter a last name and receive a predicted nationality along with a probability score, powered by the `nationalize.io` API.
* **User Authentication (Login/Register):**
    * **Secure Registration:** New users can register with a username (email) and a password, which includes basic client-side validation for password strength (minimum length, uppercase letter).
    * **User Login:** Existing users can log in with their registered credentials.
    * **Client-Side Persistence:** User credentials (username and password) are stored in `localStorage` for simplified demonstration of authentication.
* **Dynamic Navigation:** The navigation bar intelligently adapts to display "Login" and "Register" buttons for logged-out users, and a personalized "Welcome, [Username]!" message with a "Logout" button for logged-in users.
* **Protected Content:** The main game form (`GuessForm`) is only accessible to authenticated users, redirecting guests to the login page.
* **Smooth Client-Side Routing:** Utilizes React Router DOM for seamless navigation between the Home, Login, and Register pages without full page reloads, providing a Single-Page Application (SPA) experience.
* **Responsive Design:** The application is designed to be fully responsive, ensuring a consistent and pleasant user experience across various devices, from mobile phones to desktop computers.
* **Favicon & PWA Ready:** Includes multi-format favicons and a web manifest for improved branding and Progressive Web App (PWA) capabilities, allowing the app to be installed to home screens.

---

## 🛠️ Techniques Used

* **React.js:** The entire user interface is built using **React functional components** and **Hooks (`useState`, `useEffect`)** for efficient state management and component lifecycle handling.
* **React Router DOM:** Implements **client-side routing** for navigating between different views (`/`, `/login`, `/register`) using `<BrowserRouter>`, `<Routes>`, and `<Route>`, ensuring a smooth SPA experience. The `basename` is configured for seamless **GitHub Pages deployment in a subdirectory**.
* **External API Integration (`Workspace` API):** Uses the native JavaScript `Workspace` API with `async/await` for making asynchronous HTTP requests to the `nationalize.io` service to retrieve nationality predictions.
* **Client-Side Data Storage (`localStorage`):** Employs `localStorage` for basic storage of user credentials (username and password). *Note: For production applications, storing passwords directly in `localStorage` is **highly insecure** and should be replaced with a robust backend authentication system involving hashed passwords and secure tokens.*
* **Conditional Rendering:** Leverages React's conditional rendering capabilities (e.g., `&&` operator, ternary operator) to display UI elements dynamically based on user authentication status and data availability.
* **Form Handling & Validation:** Manages form inputs as **controlled components** and implements **client-side validation** for user registration (e.g., password length, uppercase character, confirmation match).
* **Tailwind CSS:** Utilizes **Tailwind CSS** as a utility-first CSS framework for rapid and consistent styling directly within JSX. This includes:
    * **Flexbox** for layout and alignment.
    * **Responsive utility classes** (`md:text-3xl`, `w-fit`, `md:w-4/12`) for adaptive design.
    * **Hover states** and other interactive styles for enhanced user experience.
* **Data Transformation:** Processes raw API data (country codes and probabilities) to find and display the most relevant information to the user.

---

## 🚀 Get Started

To set up and run "Guess my Nationality!" locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Hariniharidass/GuessingGame.git](https://github.com/Hariniharidass/GuessingGame.git)
    cd GuessingGame
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should open in your browser, typically at `http://localhost:5173/GuessingGame/`.

---