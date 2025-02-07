// conditional Statements

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

let i=0;
while (i<5){
    console.log("$");
    i++;
}

// map implementation. 
const myarray = ["cat","dog","cat2","cat3"];
console.log(myarray.map(
    (x)=>{
        return x;
    }
))

console.log(myarray.splice(2,1,"peacock"));
console.log(myarray)

console.log(myarray.length)
console.log(myarray.unshift("hamza","hishaam"))
console.log(myarray);

var newadd = (a,b) => {
    return(a+b); 
}
console.log(newadd(30, 90));

// 5 unique functions of Array.
//from method iterates each element.
console.log(Array.from("foo"));
console.log(Array.from(myarray[1]));
//at method gives what is there in that index.
console.log(`An index of 2 returns ${myarray.at(2)}`);
//fill method - (replace,index,number of positions )
var array1 = [1,2,3,3,4,5,6,7]
console.log(array1.fill(0, 2, 4));
// every method - gives all values to function mentioned. 
function below2(x){
    return x<2
}
console.log(array1.every(below2));
//with method - used to replace like we use .replace in python. 
console.log(array1.with(2, 6));