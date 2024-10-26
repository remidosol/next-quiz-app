# Quiz App

A quiz application built with **Next.js 13** using the `/app` directory structure, **TypeScript**, **Redux Toolkit**, and **RTK Query**. The app presents users with 10 multiple-choice questions, each with options A-D, and includes timers and interactive features as specified.

### ⚠ Important Note
There is a bug after clicking `Start Quiz` button. You should go back(with back button of browser) and click the `Start Quiz` button again.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features

- **10 Questions**: The quiz consists of 10 questions, each with options A-D.
- **Timed Questions**:
  - Each question is displayed for **30 seconds**.
  - Options are **unclickable for the first 10 seconds**.
  - After **10 seconds**, options become clickable.
- **Automatic Progression**:
  - If an answer is selected, the quiz proceeds to the next question immediately.
  - If no answer is selected within 30 seconds, the quiz automatically moves to the next question.
- **No Back Navigation**: Users cannot return to previous questions.
- **Results Display**: At the end of the quiz, a summary table displays the questions and the user's selected answers.
- **Data Fetching**: Questions are fetched from a mock API using **RTK Query**.
- **State Management**: Application state is managed using **Redux Toolkit**.

## Technologies Used

- **Next.js 13** with `/app` directory
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **React Redux**
- **HTML/CSS**

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/remidosol/next-quiz-app.git
   cd next-quiz-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

1. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open the App in Your Browser**

   Navigate to `http://localhost:3000` in your web browser.

3. **Start the Quiz**

   - Click on the **"Start Quiz"** button on the home page.
   - The quiz will begin, displaying the first question.

4. **Answering Questions**

   - **Wait for 10 Seconds**: Options are unclickable for the first 10 seconds.
   - **Select an Answer**: After 10 seconds, click on your chosen option.
   - **Automatic Progression**: The quiz moves to the next question immediately after selection.

5. **Completing the Quiz**

   - After answering all questions, you will be redirected to the **Results** page.
   - Review your answers displayed in a summary table.

## Project Structure

```plaintext
├── app
│   ├── layout.tsx
│   ├── page.tsx         # Home page
│   ├── hooks
│   └── usePreventBack.ts
│   ├── quiz
│   │   └── page.tsx     # Quiz page
│   └── results
│       └── page.tsx     # Results page
│   └── StoreProvider.tsx
├── lib
│   ├── features
│   │   └── quiz
│   │       ├── quizApiSlice.ts
│   │       └── quizSlice.ts
│   ├── hooks.ts         # Custom hooks for Redux
│   ├── store.ts         # Redux store configuration
├── public
├── styles
│   └── globals.css
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm start`**: Starts the production build.
- **`npm run lint`**: Runs ESLint to analyze code for potential errors.

## License

This project is licensed under the [MIT License](LICENSE).
