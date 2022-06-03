
let user={
  firstName:"Chinara",
  lastName:"Nasib",
  age: 27

}

 delete user.firstName
console.log(user);








  var object = {img:'shadhjh'}
  function isEmpty(obj){
    if(Object.keys(obj).length==0){
      return true
    }
    else{
      return false
    }
  }
  console.log(isEmpty(object));



 
  
  let teachersSalary={
    Yolchu: 10000,
    Aqil:5000,
    sum: function(){
      return this.Yolchu+this.Aqil
    }
  }
console.log(teachersSalary.sum());


let menu={
width:200,
height:300,
title:"My menu"

}

multiplyNumeric(menu);

function multiplyNumeric(menu){
  for(let values in  menu){

    if(typeof menu[values]=='number')
    {
     menu[values]*=2
    }
  }
}

console.log(menu)
