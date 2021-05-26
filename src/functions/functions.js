import { Truck } from "../truck/Truck";
import { Bus } from "../bus/Bus";

export function switchedObject(array, container) {
  let truck = null;
  let bus = null;

  array.forEach((element) => {
    let params = {
      id: element[0],
      value: element[1],
      power: element[2],
    };

    switch (params.id) {
      case "1":
        let truckParams = {
          id: params.id,
          payload: params.value,
          power: params.power,
        };
        truck = new Truck(truckParams);
        container.arr.push(truck);
        break;
      case "2":
        const busParams = {
          id: params.id,
          capacity: params.value,
          power: params.power,
        };
        bus = new Bus(busParams);
        container.arr.push(bus);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function buildObjectFromStr(obj) {
  let str = "";
  Object.keys(obj).forEach((key) => {
    str += `${key}: ${obj[key]} `;
  });

  return str;
}

export function relationship(power) {
  let weightPeople = 75;
  return weightPeople / power;
}

export function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
