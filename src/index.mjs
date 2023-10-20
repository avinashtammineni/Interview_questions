

let str="Welcome to this Javascript Guide!"

const reverseWord=(words)=>{
 return words.split(' ').map((word)=>{
    return word.split('').reverse().join('')
  }).join(' ')
}

const result=reverseWord(str)

document.getElementById("app").innerHTML=result
 


const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Alice', age: 25 },
  { id: 4, name: 'Bob', age: 35 },
  { id: 5, name: 'John', age: 25 },
];

const removeDup=(arrr)=>{
  
  let result=[]
  
 arrr.forEach(employee=> {
   
   const existingEmp= result.find((x)=> x.name===employee.name)
   console.log(existingEmp)
   if(!existingEmp){
    result.push(employee)
  }
   
 })
 return result
}
  

console.log(removeDup(data))


