const progressBar = document.getElementById('progress');
const inputs = document.querySelectorAll('input[type="text"], input[type="radio"]');
const totalInputs = inputs.length;

function updateProgressBar() {
  let filledInputs = 0;
  inputs.forEach(input => {
    if (input.type === 'text') {
      if (input.value.length >= 3) {
        filledInputs++;
      }
    } else if (input.type === 'radio') {
      if (input.value) {
        filledInputs++;
      }
    }
  });
  console.log(filledInputs);
  const progressPercentage = (filledInputs/ totalInputs) * 100;
  progressBar.style.width = progressPercentage + '%';



  if (progressPercentage >= 100) {
    setTimeout(() => {
      window.location.href = "page_2.html"; 
    }, 500); 
  }
}


inputs.forEach(input => {
  if(input.type==='text')input.addEventListener('input', updateProgressBar);
  else input.addEventListener('click', updateProgressBar);
});


updateProgressBar();