import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export class CECounter extends HTMLElement {
  constructor() {
    super();
    this.host = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(this.host);
  }

  connectedCallback() {
    const objectTestString = this.getAttribute("objectTest");
    const objectTest = JSON.parse(objectTestString);
    const Component = () => {
      const [cont, setCont] = useState(0);

      useEffect(() => {
        if (cont === 5) setCont(0);
      }, [cont]);

      return (
        <div
          className="counter"
          onClick={() => {
            setCont(cont + 1);
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
