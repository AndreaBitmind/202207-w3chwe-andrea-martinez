import Component from "./Component";

describe("Given a component Component", () => {
  describe("When is instantiated with a div as a parent and main as a className and 'li' as a tag", () => {
    test("Then it should show a main as a className", () => {
      const container = document.createElement("div");
      const className = "main";
      const tag = "li";

      new Component(container, className, tag);

      expect(container.querySelector(tag)).not.toBeNull();
    });
  });
});
