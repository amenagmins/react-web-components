import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export class CECounter extends HTMLElement {
  constructor() {
    super();
    this.host = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(this.host);
  }

  static getObservedAttributes() {
    return ["funcTest"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("name, oldValue, newValue", name, oldValue, newValue);
  }

  connectedCallback() {
    const Component = () => {
      const [cont, setCont] = useState(0);
      const name = this.getAttribute("name");
      const objectTestString = this.getAttribute("objectTest");
      const objectTest = JSON.parse(objectTestString);
      const funcTest = this.getAttribute("funcTest");

      useEffect(() => {
        if (cont === 5) setCont(0);
      }, [cont]);

      return (
        <div
          className="counter"
          onClick={() => {
            setCont(cont + 1);
            funcTest();
          }}
        >
          {objectTest.name} <span>{cont}</span>
        </div>
      );
    };

    ReactDOM.render(<Component />, this.host);
  }
}
customElements.define("ce-counter", CECounter);
