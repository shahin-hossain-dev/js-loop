/**
 * *******************
 *   FOR LOOP
 * *******************
 * while loop and for loop একই কাজ করে শুধু syntax ভিন্ন।
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