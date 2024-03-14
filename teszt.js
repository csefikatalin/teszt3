import { fuggvenyem } from "./main.js";

export function tesztFuggvenyem() {
  let number = 3;
  let a = 6;
  let b = 9;
  console.assert(
    number === fuggvenyem(a, b),
    "%o",
    `a=${a}, b=${b}, lnko=${number} `,
    "A várt eredmény nem stimmel!"
  );
}
