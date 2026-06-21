import React from 'react';
import ReactDOM from 'react-dom/client';


// ********************************************** QUESTION 1 *****************************************************
//created using React.createElement
// const divElement = React.createElement('div', {"className": "title"}, 
//     [
//         React.createElement('h1', {"key": 1}, 'This is heading 1'),
//         React.createElement('h2', {"key": 2}, 'This is heading 2'),
//         React.createElement('h3', {"key": 3}, 'This is heading 3')
//     ]
// );

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(divElement);

//using JSX
// const divElement = <><div className='title'>
//                         <h1>This is heading one</h1>
//                         <h2>This is heading two</h2>
//                         <h3>This is heading three</h3>
//                         </div>
//                     </>
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(divElement);


//using functional component
const HeadingComp = () => {
    return <h4>This is heading FOUR using component composition</h4>
}

const DivElement = () => {
    return <>
    <div className='title'>
        <h1>This is heading ONE</h1>
        <h2>This is heading TWO</h2>
        <h3>This is heading THREE</h3>
        <HeadingComp/>
    </div>
    </>
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<DivElement/>);

