let x=100;
let count = 0;
for(i=2;i<x;i++)
{
  if(x%i==0)
  count++;
}
(count!=0) ? console.log("No") : console.log("Yes");