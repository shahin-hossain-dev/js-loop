// odd number 

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        // console.log(i)
    }
}

//give me the list of numbers between 1 to 50 divisible by 3 

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        // console.log(i)
    }
}

//give me the list of numbers between 1 to 30 divisible by 5
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        // console.log(i)
    }
}

// ৩ দিয়ে ভাগ যায় অথবা ৫দিয়ে ভাগ যায়।

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
        // console.log(i)
    }
}
// ৩ দিয়ে ভাগ যায় and ৫দিয়ে ভাগ যায়।

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        // console.log(i)
    }
}

// give me the sum of numbers between 1 to 30 that are divisible by 3;
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        // console.log(i)
        console.log(sum, '+', i, '=', sum = sum + i);

    }
}
console.log(sum)