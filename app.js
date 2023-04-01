let btn = document.querySelector(".mybtn");
let jokes = document.querySelector(".joke");
let myjoke = [" Write code regularly",
"Don’t get too attached to one technology, let alone a programming language",
 "Learn from your colleagues and mentors",
  "Test your skills in open source projects",
  "Write clean code",
   "Learn best practices from other developers",
   "Ask questions from your friends in saylani class",
"Never lose the joy of programming",
"Be the “some new blood” in software development",
 "Develop your good communication skills it will more helpful in interview",
 "Read code and do code reviews",
  "Write code regularly",
  "always ask the question from your developer teacher", 
  "you will be the best programmer if you create consistancy for your future",]



function getJoke(){
    let Num =Math.floor(Math.random()*12+0) ;

    jokes.innerHTML = myjoke[Num]
   
   
}

btn.addEventListener("click",getJoke);