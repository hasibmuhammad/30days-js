const mark = 40;
switch (true) {
  case mark >= 80 && mark <= 100:
    console.log("A");
    break;

  case mark >= 70 && mark < 80:
    console.log("B");
    break;
  case mark >= 60 && mark < 70:
    console.log("C");
    break;

  case mark >= 50 && mark < 60:
    console.log("D");
    break;

  default:
    console.log("F");
    break;
}
