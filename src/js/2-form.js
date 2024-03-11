const formSet = document.querySelector('.feedback-form');
const inputInfo = formSet.elements.email;
const areaInfo = formSet.elements.message;
let saveInfo = { email: '', message: '' };

const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedInfo !== null) {
  areaInfo.value = parsedInfo.message;
  inputInfo.value = parsedInfo.email;

  saveInfo = parsedInfo;
}

formSet.addEventListener('input', event => {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  saveInfo.email = email.trim();
  saveInfo.message = message.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveInfo));
});

formSet.addEventListener('submit', evt => {
  evt.preventDefault();

  if (email.length == 0 || message.length == 0) {
    console.log(`please fill all field`);
  } else {
    console.log(saveInfo);
    localStorage.removeItem('feedback-form-state');
    formSet.reset();
    saveInfo.email = '';
    saveInfo.message = '';
  }
});