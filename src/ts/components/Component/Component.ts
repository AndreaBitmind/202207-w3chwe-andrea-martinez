import { Component as InterfaceComponent } from "../../types/interfaces.js";

class Component implements InterfaceComponent {
  element: HTMLElement;

  constructor(parent: HTMLElement, className: string, tag = "div") {
    this.element = document.createElement(tag);
    this.element.className = className;

    parent.appendChild(this.element);
  }
}

export default Component;
