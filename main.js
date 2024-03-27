{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet); // یہاں ٹھیک کام کرتا ہے
    console.log(blockConst); // یہاں بھی ٹھیک کام کرتا ہے
}
/*try {
    console.log(blockLet);یہ ناکام ہوگا
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst);
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}*/
// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        // Uses `let` for loop variable `i`
        console.log(i); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}
printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
