//take input from user using prompt and check if that input is divisible by 5 or not

let data = prompt("Enter any number: ");

if(data % 5 === 0){
    console.log(data," Multiple of 5.")
}
else{
    console.log(data," is not a multiple of 5.");
}