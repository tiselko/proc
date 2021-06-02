import { File, clearFile, exists } from "../file/File.js";

describe("File clear function", () => {
  let file = new File("1.txt", "2.txt");

  test("Should by defined:", () => {
    expect(clearFile(file)).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(clearFile(file)).toEqual([""]);
  });

  test("Should check for the content:", () => {
    expect(clearFile(file)).not.toContain(false);
  });
});

describe("File exists function", () => {
  let file = new File("1.txt", "2.txt");

  test("Should by defined:", () => {
    expect(exists(file)).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(exists(file)).toEqual(true);
  });

  test("Should check for the content:", () => {
    expect(exists(file)).not.toContain(false);
  });
});
