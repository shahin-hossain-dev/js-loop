/**
 * *******************
 *   FOR LOOP
 * *******************
 * while loop and for loop একই কাজ করে শুধু syntax ভিন্ন। এবং কিছু ক্ষেত্রে কাজটা একটু ভিন্ন।
 * 
 * // for loop একটি বৈশিষ্ট হলো এখানে condition এর সংখ্যা সবসময় define করা থাকবে ্এবং নির্দিষ্ট সংক্ষক থাকবে।
 * // কখন শুরু হবে কখন শেষ হবে তা define করা থাকবে
 *  */

/**
 * STRUCTURE OF FOR LOOP   
 * 
 * for(first part ; second part ; third part){
 *      //statement
 * }
 * 
 * for(loop variable ; loop condition ; loop variable change){
 *      //statement 
 * }
 */

let number = 0
while (number < 5) {
    console.log(number)
    number++;
}

for (let number = 0; number < 5; number++) {
    console.log(number)
}