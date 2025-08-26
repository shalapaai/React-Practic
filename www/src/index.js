import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => console.log('You Clicked'),
//     onMouseEnter: () => console.log('Mouse Over'),
// }), document.getElementById('app'));

function inputClick() {
    console.log('clicked');
}

function mouseOver() {
    console.log('mouse over');
}

const helpText = "Help Text!";

const element = (
  <div className="name">
    <h1>Привет</h1>
    <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{helpText === "Help Text" ? "Yes" : "No"}</p>
  </div>
);

const app = ReactDOMClient.createRoot(document.getElementById('app'));

app.render(element);