import { Container, containerClear } from "./src/container/Container";
import { switchedObject } from "./src/functions/functions";
import {
  File,
  clearFile,
  writeStrFromFile,
  readFile,
  buildFileFromArray,
  writeContainerFromFile,
} from "./src/file/File";

function main() {
  let file = new File("1.txt", "2.txt");
  clearFile(file);

  writeStrFromFile(file, "Начало!");
  readFile(file);

  const container = new Container();
  const array = buildFileFromArray(file);

  switchedObject(array, container);

  writeStrFromFile(
    file,
    `Кол-во элементов в контейнере: ${container.arr.length}`
  );
  writeStrFromFile(file, "Обычный контейнер:");
  writeContainerFromFile(file, container.arr);

  containerClear(container);
  writeStrFromFile(
    file,
    `Кол-во элементов в контейнере: ${container.arr.length}`
  );
  writeStrFromFile(file, "Конец!");
}

main();
