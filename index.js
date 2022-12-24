function random(){
  const set = "swg"
  return set[Math.floor((Math.random()) * set.length)]
}
let score=0;
for (let i=0; i<3; i++)
  {
    console.log(`Round ${i+1}:` )
    let choice = prompt("Enter s for snake,w for water and g for gun")    
    if ((random() == 'w' && choice == 's') || (random() == 'g' && choice == 'w') || (random() == 's' && choice == 'g')){
    console.log("You won this round.")
      score += 1;
    }
    else if ((random() == 'w' && choice == 'w') || (random() == 'g' && choice == 'g') || (random() == 's' && choice == 's')){
    console.log("It's a tie.")
  }
    else
    {
      console.log("You lost this round.")
    }
  }
console.log("Total Score:",score)
if (score>=2)
  console.log("Congrats you won the game");
else 
 console.log("Sorry you lost the tournament");