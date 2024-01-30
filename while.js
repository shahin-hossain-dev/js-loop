/**
 * *******************
 *   WHILE LOOP
 * *******************
 *  */
// if-else এবং loop এর পার্থ্ক্য হলো if-else একবার check করে শেষ হয়ে যায় 
// কিন্তু লুপ হলো বার বার চেক করতে থাকে যতক্ষন পর্যন্ত condition সত্য হয়। condition false হলে loop stop হয়ে যাবে।।
// while লুপের আরেকটি বৈশিষ্ট হলো এখানে condition এর সংখ্যা সবসময় define করা থাকবে না।
// যতক্ষন পর্যন্ত শর্ত পূরন না হবে ততক্ষন চলতে থাকবে। যেমন user login করা আছে কিনা, user এর data গুলো load হয়েছে কিনা, যতক্ষন পর্যন্ত data লোড না হবে ততক্ষন চলতে থাকবে, friend fill up হয়েছে কিনা etc.
//  ‍সব সময় সংখ্যা নিয়ে কাজ হবে না।
// 
/* const number = 7;

if (number < 5) {
    console.log('choto akta number paisi')
}
console.log('something new is cooking') */

let num = 0; //loop variable 

while (num < 7) { //loop condition
    console.log('Looping is running', num) //loop statement 
    // num = num + 1; //loop variable value change 
    // num += 1;
    num++; //++ double plus দিয়ে num এর value ১ করে increment হবে।
}