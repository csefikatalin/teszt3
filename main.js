import { tesztFuggvenyem } from "./teszt.js";
export function fuggvenyem(a, b) {
  
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

console.log(fuggvenyem(15,25));
tesztFuggvenyem()