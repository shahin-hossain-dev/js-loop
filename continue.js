// continue means -> Skip rest of the code  for this iteration
// break means -> I am done with this loop, loop end;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    // console.log(i)
}

let n = 1;
while (n < 15) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n)
}

