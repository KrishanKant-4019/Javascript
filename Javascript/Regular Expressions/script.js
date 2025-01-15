let text="Visit ABESEC!";
let n=text.search("ABESEC");
console.log(n)

let ntext="Visit Microsoft!";
let result=text.replace("Microsoft","ABESEC");
console.log(result)

const pattern=/e/;
test=pattern.test("The best things in life are free!")
console.log(test)

exe=pattern.exec("The best things in the life are free!")
console.log(exe)

