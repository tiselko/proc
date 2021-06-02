import { relationship } from "../functions/functions";

describe("Functions", () => {
  test("Should by defined:", () => {
    expect(relationship(75)).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(relationship(75)).toEqual(1);
  });

  test("Should check for the content:", () => {
    expect(relationship(75)).not.toContain(0);
  });
});
