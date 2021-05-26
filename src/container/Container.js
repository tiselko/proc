import { relationship, compare } from "../functions/functions";

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
