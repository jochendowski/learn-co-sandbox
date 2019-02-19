function sayHi(name) {
  console.log("Hello " + name + "!");
}

sayHi("Cho");

function sayHiBack(name, greeting) {
  console.log("You said hello first");
  return `${greeting}, ${name} it's been awhile!`;
}

sayHiBack("Ba", "Yo!")