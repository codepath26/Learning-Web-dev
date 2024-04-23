// normal function 

function normalAdd (x,y,z){
  return x+y+z;
}

function curryingAdd (x){
  return function anotherY(y){
    return function anotherZ(z){
      return x+y+z;
    }
  }
}

console.log(curryingAdd(5)(3)(1));