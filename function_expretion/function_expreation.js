
// function expretion 
var myFunc = function (a,b){
    return a + b
}
var result= myFunc(34,53)
console.log(result)


setTimeout( function myFunction (){
    console.log(result)
},5000)

