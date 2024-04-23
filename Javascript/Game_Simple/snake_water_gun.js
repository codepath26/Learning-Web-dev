let gameitem = ["snake","water","gun"]
let anothertry = true;
let youselect;
let comSelect;




 
while(anothertry){
  youselect= prompt("choose from snake water and gun")
  comSelect= gameitem[Math.floor(Math.random()*gameitem.length)]
  console.log(comSelect);
  // if(youselect !=gameitem.forEach){
  //   alert("Enter valid items")
  // }
 if(youselect=="snake" & comSelect=="snake"){
  alert("game tyee")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="gun" & comSelect=="gun"){
  alert("game tyee")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="water" & comSelect=="water"){
  alert("game tyee")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="water" & comSelect=="gun"){
  alert("you win")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="water" & comSelect=="snake"){
  alert("computer win")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="snake" & comSelect=="water"){
  alert("you win")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="snake" & comSelect=="gun"){
  alert("computer win")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="gun" & comSelect=="snake"){
  alert("you win")
  anothertry = confirm("do you want to Play again?")
}
else if(youselect=="gun" & comSelect=="water"){
  alert("computer win")
  anothertry = confirm("do you want to Play again?")
}
 
  }
 
