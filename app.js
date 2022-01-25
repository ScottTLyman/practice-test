const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
var currentYear = "2022"
var jsReleaseYear = "1995"
let jsAge = currentYear - jsReleaseYear
console.log("current age of JavaScript is " + jsAge)
if(jsAge >= ageToVote){
  console.log("JavaScript is old enough to vote")
} else if(jsAge < ageToVote){
  console.log("JavaScript is not old enough to vote")
}
if(jsAge >= (ageToVote + "82")){
  console.log("JavaScript is old enough to vote")
} else if(jsAge < (ageToVote + "82")){
  console.log("JavaScript is not old enough to vote")
}

console.log("Starting")
for (let i = 0; i <= 100;i++){
  console.log (i)
}
console.log("Starting")
for (let i = 0; i <= 100;i += 10){
  if (i === 50) {
    console.log(i + " Halfway")
  } else if (i === 100) {
    console.log(i + " Finished")
  } else {
  console.log (i)
}
}

console.log(user.name + " lives at " + user.address.street + ", " + user.address.city)

for (i = 0; i < cases.length; i++) {
  console.log (cases[i].title + " , " + cases[i].releaseYear);
}