export const jsQuiz = {
  questions: [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      choices: [
        "Original DOM",
        "Both A & B",
        "None of the Above",
        "Virtual DOM",
      ],
      type: "MCQ",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "What is ReactJS",
      choices: [
        "User Interface framework",
        "Server-side framework",
        "Both A & B",
        "None of the Above",
      ],
      type: "MCQ",
      correctAnswer: "User Interface framework",
    },
    {
      question: "Which command is used to create the new react app?",
      choices: [
        "npx create-react-app -g my-app",
        "npx create-new-react-app my-app",
        "None of these",
        "npx create-react-app my-app",
      ],
      type: "MCQ",
      correctAnswer: "npx create-react-app my-app",
    },
    {
      question: "JSX stands for?",
      choices: [
        "Javscript Extension",
        "Javascript",
        "Javascript XML",
        "None of these",
      ],
      type: "MCQ",
      correctAnswer: "Javascript XML",
    },
    {
      question: "What is the virtual DOM in React?",
      choices: [
        "A JavaScript library for building user interfaces",
        "A method for updating the view in MVC architecture",
        "A tool for handling events and state in web applications",
        "A lightweight JavaScript object that represents the actual DOM",
      ],
      type: "MCQ",
      correctAnswer:
        "A lightweight JavaScript object that represents the actual DOM",
    },
    {
      question: "What is the purpose of JSX in React?",
      choices: [
        "To improve the performance of the virtual DOM",
        "To handle browser events in a more efficient way",
        "To provide a way to write HTML elements in JavaScript",
        "To make it easier to work with state and props",
      ],
      type: "MCQ",
      correctAnswer: "To provide a way to write HTML elements in JavaScript",
    },
    {
      question: "What is the purpose of React state?",
      choices: [
        "To store static data",
        "To store dynamic data",
        "To store styles",
        "To store function",
      ],
      type: "MCQ",
      correctAnswer: "To store dynamic data",
    },
    {
      question: "What is the purpose of props in React?",
      choices: [
        "To pass styles to the component",
        "To pass data from parent to child component",
        "To pass data from child to parent component",
        "To pass data within the same component",
      ],
      type: "MCQ",
      correctAnswer: "To pass data from parent to child component",
    },
    {
      question: "What is the difference between state and props in React?",
      choices: [
        "Props are mutable, state is immutable",
        "Both state and props are mutable",
        "Both state and props are immutable",
        "State is mutable, props are immutable",
      ],
      type: "MCQ",
      correctAnswer: "State is mutable, props are immutable",
    },
    {
      question: "What is the purpose of React Router?",
      choices: [
        "To handle styling in React applications",
        "To handle state management in React applications",
        "To handle data fetching in React applications",
        "To handle routing in React applications",
      ],
      type: "MCQ",
      correctAnswer: "To handle routing in React applications",
    },
    {
      question: "Props are __________ into other components",
      choices: ["Injected", "Both A and B", "Methods", "None of these"],
      type: "MCQ",
      correctAnswer: "Methods",
    },
    {
      question:
        "Which of the following is the correct data flow sequence of flux concept?",
      choices: [
        "Dispatcher->Action->Store->View",
        "Action->Dispatcher->View->Store",
        "Action->Dispatcher->Store->View",
        "Action->Store->Dispatcher->View",
      ],
      type: "MCQ",
      correctAnswer: "Action->Dispatcher->Store->View",
    },
    {
      question: "Who Develop React.js?",
      choices: ["Google", "Apple", "Facebook/Meta", "Twitter"],
      type: "MCQ",
      correctAnswer: "Facebook/Meta",
    },
    {
      question:
        "If you want to import just the Component from the React library, what syntax do you use?",
      choices: [
        "import React.Component from 'react'",
        "import React.Component from 'react'",
        "import Component from 'react'",
        "import { Component } from 'react'",
      ],
      type: "MCQ",
      correctAnswer: "import { Component } from 'react'",
    },
    {
      question: "What are two ways data gets handled in react?",
      choices: ["State only", "state & props", " Props only", " None of these"],
      type: "MCQ",
      correctAnswer: "state & props",
    },
  ],
};

export const resultInitialState = {
  correctAnswers: 0,
  wrongAnswers: 0,
};
