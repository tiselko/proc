import {
  Container,
  containerClear,
  sorting,
  skip,
  containerMultimethod,
} from "./src/container/Container";
import { switchedObject, checkCorrectData } from "./src/functions/functions";
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

  try {
    writeStrFromFile(file, "Начало!");
    readFile(file);

    const container = new Container();
    const array = buildFileFromArray(file);

    checkCorrectData(array);

    switchedObject(array, container);

    writeStrFromFile(
      file,
      `Кол-во элементов в контейнере: ${container.arr.length}`
    );
    writeStrFromFile(file, "Обычный контейнер:");
    writeContainerFromFile(file, container.arr);

    writeStrFromFile(file, "Мультиметод:");
    containerMultimethod(container.arr, file, writeStrFromFile);

    writeStrFromFile(file, "Отсортированный контейнер:");
    sorting(container);
    writeContainerFromFile(file, container.arr);

    writeStrFromFile(file, "Контейнер с пропусками:");
    skip(container, file, writeStrFromFile, 2);

    containerClear(container);
    writeStrFromFile(
      file,
      `Кол-во элементов в контейнере: ${container.arr.length}`
    );
    writeStrFromFile(file, "Конец!");
  } catch (error) {
    writeStrFromFile(file, error);
  }
}

main();
