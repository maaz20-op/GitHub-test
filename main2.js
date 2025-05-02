
// solve 
/*
let numbers = [1,23,4,5,6,7]
  let sum = 0
for(let i = 0;i<numbers.length;i++){
 sum = sum + numbers[i]
   console.log("clsls",sum)
 console.log(sum)
}
*/

/*

let love  = ["Maaz","otherGirl","love","Malaika"]

const [main,,,meriJan] = love
console.log(meriJan)



*/

/*
let family = ["maaz","malaika","Nazish"]


function findLove([, malaika,... family]){
  console.log(malaika,)
}
findLove(family)



*/

/*

let nums = [1,2,3,4,56]
let sum = 0
for(let i = 0;i<nums.length;i++){
  sum = sum + nums[i]
  console.log(sum)
}



*/


/*
let obj = {
name :"Maaz",
wife:"Malaika",
} 

for(let i in obj){
  console.log(i,obj[i])
}

let youAndMe = ["Maaz","Malaika"]

for(let i in youAndMe){
  console.log(i,youAndMe[i])
}
*/
/*

let array = ["Maaz","Malaika","mama","papa","bariAmmi","Api"]


array.forEach((val)=>{
  console.log(`Maaz Loves ${val}`)
})
*/
for(let i = 1;i<=10;i++){
  console.log(`Table of ${i}`)
  for(let j=1;j<=10;j++){
   console.log(`${i} × ${j} = ${i*j}`)
  }
}

let nums= [3,9,7,4,5,6,8]
/*
for(let i = 0;i<nums.length;i++){
  let evenNum;
if(nums[i]%2===0){
   console.log(nums[i])
 break
}
}
*/

for(let i = 0;i<nums.length;i++){
  if(nums[i]%2===0){
    console.log(nums[i])
  }else{
    console.log("odd")
  }
}


