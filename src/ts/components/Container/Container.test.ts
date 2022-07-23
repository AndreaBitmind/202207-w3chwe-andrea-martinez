import Container from "./Container";

describe("Given a component Container", () => {
  describe("When instantiated with a div as a parent and an h1 as a child", () => {
    test("Then, the child it should show the text 'Pokemon List'", () => {
      const mainContainer = document.createElement("div");
      const title = document.createElement("h1");
      title.textContent = "Pokemon List";
      mainContainer.appendChild(title);

      const testContainer = new Container(mainContainer);
      const testTitle = testContainer.element.querySelector("h1");

      expect(testTitle.textContent).toBe(title.textContent);
    });
  });
});
