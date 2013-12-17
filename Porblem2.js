var n = 4000000;

// ver 1:

var start = new Date().getTime();
var a1 = 1, a2=2, a3=0, sum = 2;  
while(a3 <= n){ a3=a1+a2; a1=a2; a2=a3; if(a3%2==0) { sum += a3; console.log(a3); } }; 
var endT = new Date().getTime();
console.log("sum:");
console.log(sum);
console.log("time ver1:");
console.log(endT-start);

//ver 2:
start = new Date().getTime();
var a1 = 1, a2=2, a3=0, sum = 2;  
while(true){  
  a3 = 3*a2 + 2*a1;
  if(a3 > n) break;
  a1 = 2*a2+a1;
  a2 = a3;
  console.log(a3);
  sum += a3;
};
var endT = new Date().getTime();
console.log("sum:");
console.log(sum);
console.log("time ver2:");
console.log(endT-start);


