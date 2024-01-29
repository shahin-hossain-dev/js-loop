/**
 * LOOP
 * *************
 * => কোনো একটা কাজ যখন বার বার করা হয় তকে লুপ বলে।
 *
 */

// for-of Loop-----------------------

/**
 * => একটা variable এর মধ্যে array এর element গুলো  একবার  একবার করে বসাবে যে পর্যন্ত লুপ চলবে।
 * */

const fruits = ['apple', 'banana', 'mango', 'jackfruit', 'watermelon'];

for (const fruit of fruits) {
    // console.log(fruit) // array এর মধ্যে একটা একটা করে প্রতিটা এলিমেন্টকে print করবে। array element শেষ হয়ে গেলে loop বন্ধ হয়ে যাবে।
}

const numbers = [10, 20, 30, 40, 50, 60];

for (const number of numbers) {
    console.log(number)
}
