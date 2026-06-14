import React from 'react';
import ReactDOM from 'react-dom/client';

//How to write JSX
// const HeadingComponent = () => (
//     <h1>Namaste React using JSX</h1>
// )

// const BodyComponent = () => (
//     <>
//     <HeadingComponent/>
//     <div>Content of episode 2. JSX under the hood is React.createElement()</div>
//     </>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BodyComponent/>);

//You can write React element inside an another react element/JSX component. Also you can write JSX inside a JSX Component/react element.
const JSXComponent3 = () => (
    <div>This is JSX Component 3</div>
)

const reactElement1 = (
    <>
    <div>This is react element 1 which has JSX Component inside it</div>
    {/* Three ways to write */}
    <JSXComponent3/>
    <JSXComponent3></JSXComponent3>
    {JSXComponent3()} {/* Cause ultimately a JSX Component is a JS function so you can also follow the syntax that calls a JS function */}
    </>
);

const reactElement2 = (
    <>
    <div>This is react element 2 which has another react element inside it</div>
    {reactElement1}
    </>
);

const JSXComponent1 = () => (
    <>
    <div>This is JSX Component 1 which has react element inside it</div>
    {reactElement2}
    </>
)

const JSXComponent2 = () => (
    <>
    <div>This is JSX Component 2. It has another JSX Component inside it</div>
    <JSXComponent1/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JSXComponent2/>);