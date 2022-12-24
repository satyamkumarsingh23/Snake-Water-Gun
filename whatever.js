let random(){
  const set = "swg"
  return set[Math.floor((Math.random()) * set.length)]
}
console.log(random())