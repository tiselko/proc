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

export function containerMultimethod(array, file, writeStrFromFile) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      switch (array[i].className) {
        case "Truck":
          switch (array[j].className) {
            case "Truck":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Truck - Truck");
              break;
            case "Bus":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Truck - Bus");
              break;
          }
          break;
        case "Bus":
          switch (array[j].className) {
            case "Truck":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Bus - Truck");
              break;
            case "Bus":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Bus - Bus");
              break;
          }
          break;
      }
    }
  }
}
