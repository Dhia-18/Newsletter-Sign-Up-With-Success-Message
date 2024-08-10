const emailInput = document.querySelector("input");
const emailError = document.getElementById("error-message");

const submitButton = document.querySelector("button[type=submit]");

const textContainer = document.querySelector(".text-container");
const pictureContainer = document.querySelector("picture");
const thankYouContainer = document.querySelector(".thank-you-container");

function showError(msg){
    emailError.textContent=`${msg}`;
    emailInput.style.color="var(--tomato)";
    emailInput.style.backgroundColor="var(--light-red)";
    emailInput.style.borderColor="var(--tomato)";
}

function removeError(){
    emailError.textContent="";
    emailInput.style.color="";
    emailInput.style.backgroundColor="";
    emailInput.style.borderColor="";
}

function validEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput.value);
}

function showSuccess(){
    const confirmationEmail = thankYouContainer.querySelector("#email");
    
    confirmationEmail.textContent=`${emailInput.value}`;
    textContainer.classList.add("hidden");
    pictureContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");

}

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();

    if(emailInput.value === ""){
        showError("Please enter an email");
    }
    else if(!validEmail()){
        showError("Valid email required");
    }
    else{
        showSuccess();
    }
})

emailInput.addEventListener("input",removeError);