import React from 'React';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const AppLayout = () => {
    return <>
        <div className="app-layout">
            <Header/>
            <Body/>
        </div>
    </>
}

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<AppLayout/>);