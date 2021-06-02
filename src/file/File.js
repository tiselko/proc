import { correctFile, buildObjectFromStr } from "../functions/functions";
import fs from "fs";

export function File(filePathInput, filePathOutput) {
  this.filePathInput = filePathInput;
  this.filePathOutput = filePathOutput;
  this.file = [];
}

export function readFile(file) {
  file.file = correctFile(
    fs.readFileSync(file.filePathInput, "utf-8").toString().split("\n")
  );
}

export function exists(file) {
  return fs.existsSync(file.filePathInput);
}

export function writeStrFromFile(file, str) {
  fs.appendFileSync(file.filePathOutput, str + "\n");
}

export function buildFileFromArray(file) {
  return file.file.map((element) => {
    return element.split(" ");
  });
}

export function writeContainerFromFile(file, array) {
  array.forEach((obj) => {
    writeStrFromFile(file, buildObjectFromStr(obj));
  });
}

export function clearFile(file) {
  fs.writeFile(file.filePathOutput.toString(), "", () => {});
  return fs.readFileSync(file.filePathOutput, "utf-8").toString().split("\n");
}
