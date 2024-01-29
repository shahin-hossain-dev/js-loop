/**
 * *******************
 *   WHILE LOOP
 * *******************
 *  */
// if-else এবং loop এর পার্থ্ক্য হলো if-else একবার check করে শেষ হয়ে যায় 
// কিন্তু লুপ হলো বার বার চেক করতে থাকে যতক্ষন পর্যন্ত condition সত্য হয়। condition false হলে loop stop হয়ে যাবে।।
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