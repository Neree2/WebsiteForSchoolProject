function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function checkPassword() {
  const password = document.getElementById("password").value;
  let strength = 0;

  // Length check
  const lengthCheck = password.length >= 12;
  lenght=document.getElementById("length");
  console.log(lenght)
  if (lengthCheck) strength += 20;

  // Uppercase and lowercase check
  const upperCaseCheck = /[A-Z]/.test(password);
  const lowerCaseCheck = /[a-z]/.test(password);
  const caseCheck = upperCaseCheck && lowerCaseCheck;
  document.getElementById("uppercase").classList.toggle('valid', caseCheck);
  if (caseCheck) strength += 15;

  // Number check
  const numberCheck = /\d/.test(password);
  document.getElementById("number").classList.toggle('valid', numberCheck);
  if (numberCheck) strength += 15;

  // Symbol check
  const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  document.getElementById("symbol").classList.toggle('valid', symbolCheck);
  if (symbolCheck) strength += 15;

  // Common words check
  const noCommonWordsCheck = !/password|1234|admin|qwerty|letmein/.test(password);
  document.getElementById("common").classList.toggle('valid', noCommonWordsCheck);
  if (noCommonWordsCheck) strength += 15;

  // Update strength bar
  const strengthIndicator = document.getElementById("strength-indicator");
  strengthIndicator.style.width = `${strength}%`;

  if (strength < 40) {
      strengthIndicator.style.backgroundColor = 'red';
  } else if (strength < 80) {
      strengthIndicator.style.backgroundColor = 'yellow';
  } else {
      strengthIndicator.style.backgroundColor = 'green';
  }

  // Update result text
  const resultText = strength == 80 ? "รหัสผ่านใช้ได้" : "รหัสผ่านของคุณยังอ่อนแอ ทำให้มั่นใจว่ารหัสผ่านของคุณตรงตามกฎทั้งหมด.";
  console.log(strength)
  if(strength==80){
    document.getElementById("result").textContent = "รหัสผ่านใช้ได้";
  }else{
    document.getElementById("result").textContent = "รหัสผ่านของคุณยังอ่อนแอ";
  }
  
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));