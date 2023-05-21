let x=40;
let y=100;
let result=x/y;
console.log(result);

let radius=10;
const pi=3.1416;

let total_area=pi*(radius*radius);
console.log(total_area);

//less then 0 very cool , 0-19 cool , 20-24 normal , 25 to above  abnormal
let weather=-100;
if(weather>=25){
    console.log("abnormal");
}
else if(weather>=20){
    console.log("normal");
}
else if(weather>=0){
    console.log("cool");
}
else{
    console.log("absolute");
}