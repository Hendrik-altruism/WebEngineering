let user = {
     name: "Kingsley",
     age: 28,
     job: "Web Developer",
     location: {
         city: "Lagos",
     }
 }

let deepCopy = (copy) => {
     return copy
}

console.log(user)
console.log(deepCopy(user))
