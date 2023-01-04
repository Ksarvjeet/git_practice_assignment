let str="naman";
let str1="";
for(let i=0;i<str.length;i++)
{
  str1[i]=str[str.length-i-1];

}
(str==str1)?console.log("Yes"):console.log("No");