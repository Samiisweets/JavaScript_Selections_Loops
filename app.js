console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let initial = 1; initial <= 100; initial++) {
    if (initial / 2 == 1) {
        console.log(initial);
    } else {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (initial2 = 1; initial2 <= 100; initial2++) {
    if (initial2 % 3 == 0 && initial2 % 5 == 0) {
        console.log("FIZZBUZZ"); 
    } else if (initial2 % 3 == 0) {
            console.log("FIZZ");
    } else if (initial2 % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(initial2);
    } 
}