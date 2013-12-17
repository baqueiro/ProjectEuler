//ver 2:
var a1 = 1, a2=2, a3=0, sum = 2;  

while(true){  

  a3 = 3*a2 + 2*a1;
  
  if(a3 > 4000000) break;
  
  a1 = 2*a2+a1;
  
  a2 = a3;
  
  console.log(a3);
  
  sum += a3;
  
}; 

console.log(sum);



// ver 1:
var a1 = 1, a2=2, a3=0, sum = 2;  
while(a3 <= 4000000){ a3=a1+a2; a1=a2; a2=a3; if(a3%2==0) { sum += a3; console.log(a3); } }; 
console.log(sum);
