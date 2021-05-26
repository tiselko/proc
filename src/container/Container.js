import { buildObjectFromStr } from "../functions/functions";
export function Container() {
  this.arr = [];
}

export function containerClear(container) {
  container.arr = [];
}

export function skip(container, file, writeStrFromFile, skipId) {
  container.arr.forEach((obj) => {
    if (obj.id === skipId.toString()) {
      writeStrFromFile(file, buildObjectFromStr(obj));
    }
  });
}
