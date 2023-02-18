const username = document.getElementById("username");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const form = document.getElementById("form");
const contButton = document.getElementById("buttonCont");
const exitButton = document.getElementById("izlaz");

trenutniDatum = new Date();

/* -------------- REGISTRACIJA --------------------*/ 
contButton.addEventListener("click", e => {
  if(validateInputs()){
    document.getElementById("popupDatum").innerHTML += trenutniDatum.getDate() + "/" + (Number(trenutniDatum.getMonth())+1)  + "/" + trenutniDatum.getFullYear();
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "inline";
  }
});

exitButton.addEventListener("click", e => {
  document.getElementById("popupDatum").innerHTML = "Komentar poslat datuma: ";
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  form.reset();
});

const setError = (element, msg) => { /*parametri su html element i error msg*/
  const inputControl = element.parentElement; /*uzece parent elementa sto je zapravo input control*/ 
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = msg;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const isValidEmail = email => {
  const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase()); /*true ako je valid. false ako nije */
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  let value1 = false;
  let value2 = false;

  if(usernameValue === ""){
    setError(username, "Morate uneti ime.");
  }else{
    setSuccess(username);
    value1 = true;
  }

  if(emailValue === ""){
    setError(email, "Morate uneti email.");
  }else if(!isValidEmail(emailValue)){
    setError(email, "Niste uneli važeću adresu.");
  }else{
    setSuccess(email);
    value2 = true;
  }

  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
};
/* ------------------------------------------------------ */