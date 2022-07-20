
let output = document.getElementById("output")
let num1 = '';
let lastVal = null;
let pressEquals= false
function inputVal(val) {
    if(val<="9"&&val>="0"&&pressEquals){
        num1=val
        output.innerHTML=num1
        pressEquals=false
        return;
    }
    else{
        pressEquals=false
    }

    if(val=="+"||val=="-"||val=="*"||val=="/"){
        
        if(lastVal=="+"||lastVal=="-"||lastVal=="*"||lastVal=="/"){
            num1 = num1.slice(0,-1)
            num1+=val
            output.innerHTML=num1
            return;
        }
        
    }

    if( val!=="="&&val!=="c"){
        lastVal=val
        num1 +=val
        
        printOutput(val)
    }

else if(val=="="){
        let result = calculator(num1); 
        lastVal=null
        num1=result+''
        output.innerHTML='';
        printOutput(result);
        pressEquals=true
    }

else if(val=="c"){
        num1 = '';
        output.innerHTML='';
        lastVal=null
        pressEquals=false
    }

}

function split(string){
    let arr =  [];
    arr.length=3;
    let i,r,part1,part2,ch;
    for(i=string.length-1;i>=0;i--)
        if(string[i]=="+"||string[i]=="-")
            break;
    if(i<0){
        for(i=string.length;i>=0;i--)
            if(string[i]=="*"||string[i]=="/")
                break;
    }
    ch=string[i];
    part1="";
    part2="";
    for(r=0;r<i;r++)
        part1+=string[r];
    for(r=i+1;r<string.length;r++)
        part2+=string[r];
    arr[0]=part1;
    arr[1]=ch;
    arr[2]=part2;
    return arr;
}
function calc(num1,op,num2){
    switch(op){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "/":
            return num1/num2;
    }
    return num1*num2;
}
function pars(string){
    let num ="";
    for(i=0;i<string.length;i++)
        if(!(string[i]>='0'&&string[i]<='9'))
            return string;
    for(i=0;i<string.length;i++)
        num+=string[i];
    return parseInt(num);
}
function calculator(string){
    let num=pars(string);
    if(isNaN(num)){
        let arr = split(string);
        return calc(calculator(arr[0]),arr[1],calculator(arr[2]));
    }else
        return num;
}

function printOutput(result){
    output.innerHTML += result
   
}

// function checkError(result){
//     let countOp = 0
//     let countNum = 0



// }

