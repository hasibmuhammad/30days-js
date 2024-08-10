import axios from "axios";
import welcome, { addTwoNum, person } from "./task1.mjs";
import lodash from "lodash";

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => console.log(res.data));

// console.log(addTwoNum(1, 2));
// console.log(person.greet());
// console.log(welcome());
