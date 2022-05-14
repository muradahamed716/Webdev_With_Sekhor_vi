const map=new Map([
    [1,'a'],
   [ 2,'b'],
    [3,'c'],
    ]
    
)
const arr=[[1,2]]
const arr4=[1,2,3]
////Map to array
console.log([...map])
///array to Map
const map2=new Map(arr);
console.log(map2)
const map3=new Map(arr4.entries())
console.log(map3)
const arr2=[1,2,3]
////array object
console.log({...arr2})


/////object to array
const object2={
    1:'a',2:'b'
}
const arr3=Object.entries(object2)
console.log(arr3)
//////object to Map
const map4= new Map(Object.entries(object2))
console.log(map4)