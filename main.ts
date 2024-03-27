{
  let blockLet = "visible inside the block";
  const blockConst = "also only inside the block";
  console.log(blockLet);
  console.log(blockConst);
}

try {
  console.log(blockLet); //this will fail
} catch (error) {
  console.log("`blockLet` is not accessible outside the block.");
}

try {
  console.log(blockConst);//this will also fail
} catch (error) {
  console.log("`blockConst` is not accessible outside the block.");
}

function printNumbersWithLet() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

printNumbersWithLet();

let age = 25;
age = 26;
console.log(age);

const names = "Alice";
try {
  name = "Bob"; // This line will cause an error
} catch (error) {
  console.log("Error: Can't reassign a `const`-declared variable.");
}
