//ver 2:
var a1 = 1, a2=2, a3=0, sum = 2;  

while(a3 <= 4000000){  
  
 // 1
 // 1
 // 2 = 1+1
 // 3=2+1
 // 5=3+2
 // 8=5+3=(3+2)+(2+1)
  
  // 8 =  ( (a2+a1) + a2)+(a2+a1) = 3*a2 + 2*a1
  
  a3 = 3*a2 + 2*a1;
  
  a1 = 2*a2+a1;
  
  a2 = a3;
  
  sum += a3;
  
}; 

console.log(sum);



// ver 1:
var a1 = 1, a2=2, a3=0, sum = 2;  
while(a3 <= 4000000){ a3=a1+a2; a1=a2; a2=a3; if(a3%2==0) { sum += a3; } }; 
console.log(sum);
