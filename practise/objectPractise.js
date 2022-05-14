const obj={
    firstName20:'sohail',
    lastName:'hossain',
    age: 20,
    salary:20000,

};
// console(obj[firstName+lastName+(age*2)]) not valid
console.log(obj['firstName'+obj.age])