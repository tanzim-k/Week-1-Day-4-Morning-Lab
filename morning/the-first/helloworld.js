// const myfullgreet = "Hello, Tanzim!"; one variable
// console.log(myfullgreet);

// const myname = "Tanzim";
// const welcome = "Hello,";
// console.log(welcome,myname)

const readline =require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Who are you?", name => {
    console.log(`Hi ${name}!`);
    readline.close();
});

