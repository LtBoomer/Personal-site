// html elements 
let progressBar = document.querySelectorAll(".progress-bars");
let cards = document.querySelectorAll(".card");
const links = document.querySelectorAll(".scroll_to");
const aboutMe = document.querySelector("#about-meS");
let ListInputs = document.querySelectorAll("input");
let MessageArea = document.querySelector(".messageArea");
let button = document.querySelector(".submit-output");
const mesaj = document.querySelector(".validation");
let check = false;
let secondCheck = false;
let i = 0;
button.addEventListener("click", (event) => {
  event.preventDefault();
  MessageValidation(MessageArea.value);
  SubjectValidation(ListInputs[3].value);
  EmailValidation(ListInputs[2].value);
  LastNameValidation(ListInputs[1].value);
  FirstNameValidation(ListInputs[0].value);
});

// general constants
const progressBarValue = ["50%", "60%", "75%", "40%"];
const progressBarAnimation = ["cplusplus", "HTML", "CSS", "JS"];
const cardLinks = [
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
];

const options = {
  threshold: 0,
  rootMargin: "0% 0% -77% 0%"
};

const observer = new IntersectionObserver(entries =>{
  console.log(entries)
  if(entries[0].isIntersecting){
    animationBar();
  }
},options)

observer.observe(aboutMe)

// fucntions
const animationBar = () => {
    progressBar.forEach((element, index) => {
        setTimeout(() => {
            element.children[0].style.width = progressBarValue[index];
        element.children[0].innerHTML = progressBarValue[index];
        element.children[0].classList.add( `progress-${progressBarAnimation[index]}-aniamtion`);
        }, 700);
    });
}
//FORM VALIDATION
const handleMessage = (message) => {
  mesaj.innerHTML = message;
  mesaj.style.visibility = "visible";
  hideMessage()
}

const handleNameValidation = (value, nameLenngth, message) => {
 value.split("").forEach((letter) => {
    if(letter === " "){
      handleMessage(message)
    }
 })
 if(value.split("")[0] !== undefined){
    if(value.split("")[0].toUpperCase() !== value[0]){
      handleMessage(message)
    }
 }
 if(value.length < nameLenngth){
  handleMessage(message);
 }
}

const LengthCheck = (Length, SupposedLength, message) =>{
  if(Length < SupposedLength){
    handleMessage(message)
  }
}

const FirstNameValidation = (value) =>{
  handleNameValidation(value, 4, "Invalid first name");
}
const LastNameValidation = (value) =>{
  handleNameValidation(value, 6, "Invalid last name");
}
const EmailValidation = (value) =>{
  console.log(value)
  if(!(value.includes(".com") || value.includes(".ro")) || !value.includes("@")){
      handleMessage("invalid email adress")
    }
  }

  const SubjectValidation = (value) =>{
    LengthCheck(value.length, 10, "invalid subject");
  }
  const MessageValidation = (value) =>{
    LengthCheck(value.length, 30, "invalid message length");
  }


const hideMessage = () => {
  setTimeout(()=>{
      mesaj.style.visibility = "hidden";
  }, 1000)
}
// algorithms
links.forEach((item, index) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
cards.forEach((card, index) => {
    card.addEventListener("click", () =>{
        window.open(cardLinks[index], '_blank')
    })
});
