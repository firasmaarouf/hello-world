import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import YesNoQuestion from "./questions/YesNoQuestion";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <YesNoQuestion question="Do you like khmaies ?" answer={true} />
        <YesNoQuestion
          question="Do you want to buy sth for khmaies ?"
          answer={false}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
