'use strict';

if (process.argv[2] == null || process.argv[2] == 'display')
{var cowsay = require("cowsay");

console.log(cowsay.say({
    
    text: "Calculator, Author: Alex",
    e: "oo",
    T: "",


}));

console.log("display");
console.log("addition");
console.log("subtraction");
console.log("division");
console.log("multiply");
console.log("modulo");
console.log("sqrt");
console.log("absolute");
console.log("power");
console.log("sort");
console.log("reverse");
console.log("maximum");
console.log("minimum");
console.log("unique");
console.log("cosinus");
console.log("sinus");

}





function addition()

{
    let sumarray = [];
    for(var a=3; a<=100; a++)
{
    if (process.argv[a] == null)

    {
    sumarray.push();

    }
     else sumarray.push(parseFloat(process.argv[a]));
       

}



//console.log(sumarray);

let sum1 = sumarray[0]; 

if(sumarray.length<=1)

    {
      console.log("ERROR: addition command uses at least 2 parameters");

    } 
    else {
    for(var i=1; i<sumarray.length; i++)
      
    {
       
        
        sum1 +=  sumarray[i];
        
     
    
    }

    
    return  console.log(sum1);
    }
}

if (process.argv[2]=='addition')

{

    addition();
}


function subtraction()

{
    let difarray = [];
    for(var a=3; a<=100; a++)
{
    if (process.argv[a] == null)

    {
    difarray.push();

    }
     else difarray.push(parseFloat(process.argv[a]));
       

}

let dif1 = difarray[0];

if (difarray.length<=1)

    {
      console.log("ERROR: subtraction command uses at least 2 parameters");

    } 

 else  {
    for(var i=1; i<difarray.length; i++)
      
    {
       
        
        dif1 -=  difarray[i];
        
     
    
    }
    return  console.log(dif1);
 }
}

if (process.argv[2]=='subtraction')

{

    subtraction();
}


function multiply()

{
    let mularray = [];
    for(var a=3; a<=100; a++)
{
    if (process.argv[a] == null)

    {
    mularray.push();

    }
     else mularray.push(parseFloat(process.argv[a]));
       

}


let mul1 = mularray[0]; 

if(mularray.length<=1)
{
    console.log("ERROR: multiply command uses at least 2 parameters");

}
else{
    for(var i=1; i<mularray.length; i++)
      
    {
       
        
        mul1 *=  mularray[i];
        
     
    
    }
    return  console.log(mul1);
}
}

if (process.argv[2]=='multiply')

{

    multiply();
}


function division()

{
    let divarray = [];
    for(var a=3; a<=100; a++)
{
    if (process.argv[a] == null)

    {
    divarray.push();

    }
     else divarray.push(parseFloat(process.argv[a]));
       

}


let div1 = divarray[0]; 

if(divarray.length<=1)

{

    console.log("ERROR: division command uses at least 2 parameters");
}


else{
    for(var i=1; i<divarray.length; i++)
      
    {
       
        
        div1 /=  divarray[i];
        
     
    
    }
    return  console.log(div1);
}
}

if (process.argv[2]=='division')

{

    division();
}



function modulo(a,b)

{
   var c = a%b;
   return console.log(c);

}

if (process.argv[2]=='modulo')

{
    if(process.argv[4]==null)
    {
      console.log("ERROR: modulo command uses at least 2 parameters");
    } 
    else
    modulo(process.argv[3], process.argv[4]);
}


function sqrt(a)

{ 
     var b = Math.sqrt(a);
     return console.log(b);

}

if (process.argv[2]=='sqrt')

{
  if(process.argv[3]==null)
  {
    console.log("ERROR: sqrt command uses at least 1 parameters");
  } 
  else
    sqrt(process.argv[3]);
}

function absolute(a)

{
   var b = Math.abs(a);
   return console.log(b);

}

if (process.argv[2]=='absolute')

{ if(process.argv[3]==null)
    {
      console.log("ERROR: absolute command uses at least 1 parameters");
    } 
    else

    absolute(process.argv[3]);
}

function power(a,b)

{
   var c = Math.pow(a,b);
   return console.log(c);

}

if (process.argv[2]=='power')

{
    if(process.argv[4]==null)
    {
      console.log("ERROR: power command uses at least 2 parameters");
    } 
    else
     power(process.argv[3], process.argv[4]);
}

function cosinus(a)

{
   var b = Math.cos(a);
   return console.log(b);

}

if (process.argv[2]=='cosinus')

{

    cosinus(process.argv[3]);
}

function sinus(a)

{
   var b = Math.sin(a);
   return console.log(b);

}

if (process.argv[2]=='sinus')

{

    sinus(process.argv[3]);
}
    

function sort()

{
    let sortarray = [];
    for(var x=3; x<=100; x++)
{
    if (process.argv[x] == null)

    {
    sortarray.push();

    }
     else sortarray.push(parseFloat(process.argv[x]));
       

}

if(sortarray.length<=0)

{
    console.log("ERROR: sort command uses at least 1 parameters");
    
}
else{
  for(var i=0; i<sortarray.length-1; i++)
    { 
      for(var j=0; j< (sortarray.length)-i-1; j++)
       {
           
        if (sortarray[j]>sortarray[j+1])
        {
          var a = sortarray[j];
          sortarray[j]=sortarray[j+1];
          sortarray[j+1]=a;


       }
    }
        
   
       
    }

    for (var b = 0; b<sortarray.length; b++)
    { console.log(sortarray[b]);
    }

    return 0;
}
}


if (process.argv[2]=='sort')

{

    sort();
}



function reverse()

{
    let revarray = [];
    for(var a=3; a<=100; a++)
{
    if (process.argv[a] == null)

    {
    revarray.push();

    }
     else revarray.push(parseFloat(process.argv[a]));
       

}


var len = revarray.length;

if(revarray.length<=0)

{
    console.log("ERROR: reverse command uses at least 1 parameters");
    
}

else{
  for(var i=len-1; i>=0; i--)
    { 
      console.log(revarray[i]);
}
}
}

if (process.argv[2]=='reverse')

{

    reverse();
}


function unique()

{
    let uniarray = [];
    for(var x=3; x<=100; x++)
{
    if (process.argv[x] == null)

    {
    uniarray.push();

    }
     else uniarray.push(parseFloat(process.argv[x]));
       

}



if(uniarray.length<=0)

{
    console.log("ERROR: unique command uses at least 1 parameters");
    
}

else{
  for(var i=0; i<uniarray.length; i++)
    { 
    for(var j=0; j<i; j++)
   
        if(uniarray[i]==uniarray[j])
            break;

        if (i==j)
        console.log(uniarray[i]);
        

   
}
}
}

if (process.argv[2]=='unique')

{

    unique();
}



function maximum()

{
    let maxarray = [];
    for(var x=3; x<=100; x++)
{
    if (process.argv[x] == null)

    {
    maxarray.push();

    }
     else maxarray.push(parseFloat(process.argv[x]));
       

}


 
var len = maxarray.length;

if(maxarray.length<=0)

{
    console.log("ERROR: maximum command uses at least 1 parameter");
    
}

else{
  for(var i=1; i<len; i++)
    { 
   
        if(maxarray[0]<maxarray[i])
        {
          var a = maxarray[0];
          maxarray[0]=maxarray[i];
          maxarray[i]=a;

        }
           
        
        
   
}

return console.log(maxarray[0]);

}
}

if (process.argv[2]=='maximum')

{

    maximum();
}


function minimum()

{
    let minarray = [];
    for(var x=3; x<=100; x++)
{
    if (process.argv[x] == null)

    {
    minarray.push();

    }
     else minarray.push(parseFloat(process.argv[x]));
       

}



 
var len = minarray.length;

if(minarray.length<=0)

{
    console.log("ERROR: minimum command uses at least 1 parameter");
    
}

else{
  for(var i=1; i<len; i++)
    { 
   
        if(minarray[0]>minarray[i])
        {
          var a = minarray[0];
          minarray[0]=minarray[i];
          minarray[i]=a;

        }
           
        
        
   
}

return console.log(minarray[0]);

}
}

if (process.argv[2]=='minimum')

{

    minimum();
}


if(!(process.argv[2]==null || process.argv[2]=='display' || process.argv[2]=='addition' || process.argv[2]=='subtraction' || 
process.argv[2]=='multiply' || process.argv[2]=='division' || process.argv[2]=='modulo' || process.argv[2]=='sqrt' ||
process.argv[2]=='absolute' || process.argv[2]=='power' || process.argv[2]=='sort' || process.argv[2]=='reverse' ||
process.argv[2]=='unique' ||process.argv[2]=='maximum' || process.argv[2]=='minimum' || process.argv[2]=='cosinus' ||
process.argv[2]=='sinus'))

{

    console.log("ERROR: this command does not exist, use display to see available commands");
}


