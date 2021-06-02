import { Container, containerClear } from "../container/Container.js";

describe("Container function", () => {
  let container = new Container();

  test("Should by defined:", () => {
    expect(containerClear(container)).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(containerClear(container)).toEqual([]);
  });

  test("Should check for the content:", () => {
    expect(containerClear(container)).not.toContain(false);
  });
});
