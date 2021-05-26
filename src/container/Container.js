import {
  relationship,
  compare,
  buildObjectFromStr,
} from "../functions/functions";
export function Container() {
  this.arr = [];
}

export function sorting(container) {
  container.arr.sort((a, b) =>
    compare(relationship(a.power), relationship(b.power))
  );
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
