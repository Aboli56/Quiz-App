const Data = [
    {
        que: "What is the correct command to create a new React project?",
        Ans :[
            {ans:"npx create-react-app MyReactApp", isCorrect:true},
            {ans:"npx create-react-app", isCorrect:false},
            {ans:"npm create-react-app MyReactApp", isCorrect:false},
            {ans:"npm create-react-app ", isCorrect:false}
        ]
    },
    {
        que: "What does myReactApp refer to in the following command?",
        Ans :[
            {ans:"The type of app to create", isCorrect:false},
            {ans:"The name you want to use for the new app ", isCorrect:true},
            {ans:"The directory to create the new app in", isCorrect:false},
            {ans:"A reference to an existing app", isCorrect:false}
        ]
    },
    {
        que: "What command is used to start the React local development server?",
        Ans :[
            {ans:"npm start", isCorrect:true},
            {ans:"npm serve", isCorrect:false},
            {ans:"npm run dev", isCorrect:false},
            {ans:"npm build", isCorrect:false}
        ]
    },
    {
        que: "What is the default local host port that a React development server uses?",
        Ans :[
            {ans:"3500", isCorrect:false},
            {ans:"5000", isCorrect:false},
            {ans:"8080", isCorrect:false},
            {ans:"3000", isCorrect:true}
        ]
    },
    {
        que: "What is the children prop?",
        Ans :[
            {ans:"A property that lets you set an object as a property", isCorrect:false},
            {ans:"A property that lets you pass data to child components", isCorrect:false},
            {ans:"A property that lets you nest components in other components ", isCorrect:true},
            {ans:"A property that adds child values to state", isCorrect:false}
        ]
    },
    {
        que: "A copy of the 'real' DOM that is kept in memory is called what?",
        Ans :[
            {ans:"Virtual DOM", isCorrect:true},
            {ans:"Shadow DOM", isCorrect:false},
            {ans:"React DOM", isCorrect:false},
            {ans:"DOM", isCorrect:false}
        ]
    },
    {
        que: "What tool does React use to compile JSX?",
        Ans :[
            {ans:"JSX Compiler", isCorrect:false},
            {ans:"React Router", isCorrect:false},
            {ans:"Babel", isCorrect:true},
            {ans:"ReactDOM", isCorrect:false}
        ]
    },
    {
        que: "What is a common use case for ref?",
        Ans :[
            {ans:"To directly access a DOM node", isCorrect:true},
            {ans:"To bind the function", isCorrect:false},
            {ans:"To refer to a function", isCorrect:false},
            {ans:"To refer to another JavaScript file", isCorrect:false}
        ]
    },
    {
        que: "What is the correct syntax to import a Component from React?",
        Ans :[
            {ans:"import Component from 'react'", isCorrect:false},
            {ans:"import { Component } from 'react'  ", isCorrect:true},
            {ans:"import React.Component from 'react'", isCorrect:false},
            {ans:"import [ Component ] from 'react'", isCorrect:false}
        ]
    },
    {
        que: "How can you optimze performance for a function component that always renders the same way?",
        Ans :[
            {ans:"Use the shouldComponentUpdate lifecycle method", isCorrect:false},
            {ans:"Use the useReducer Hook", isCorrect:false},
            {ans:"Wrap it in the React.memo higher-order component", isCorrect:true},
            {ans:"Use the useMemo Hook", isCorrect:false}
        ]
    }
]
export default Data;