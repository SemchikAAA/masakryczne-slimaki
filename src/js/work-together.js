import axios from 'axios';
import 'modern-normalize/modern-normalize.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const backdrop = document.querySelector('.wt-backdrop');
const form = document.querySelector('.wt_form');
const closeBtn = document.querySelector('.wt-close-btn');
const emailInput = form.elements.email;
const validIcon = document.querySelector('.valid-icon');
const errorMessage = document.querySelector('.error-message');

const LS_KEY = 'feedback-form-state';
const formData = {
  email: '',
  comment: '',
};

// /// INPUT, SAVE FORM DATA/// //
form.addEventListener('input', setData);

function setData(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

const savedData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.comment.value = savedData.comment || '';
  formData.email = savedData.email || '';
  formData.comment = savedData.comment || '';
}

// /// VALID EMAIL /// //
emailInput.addEventListener('input', validateEmail);

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailPattern.test(value)) {
    validIcon.classList.remove('invisible');
    errorMessage.classList.add('invisible');
    emailInput.classList.remove('color-error');
  } else {
    errorMessage.classList.remove('invisible');
    validIcon.classList.add('invisible');
    emailInput.classList.add('color-error');
  }
}

// /// SUBMIT /// //
form.addEventListener('submit', submitData);

async function submitData(event) {
  event.preventDefault();

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      formData
    );

    openModal();

    form.reset();
    localStorage.removeItem(LS_KEY);
    formData.email = '';
    formData.comment = '';

    validIcon.classList.add('invisible');
    errorMessage.classList.add('invisible');
    emailInput.classList.remove('color-error');

    return;
  } catch (error) {
    if (error.request.status === 400) {
      iziToast.warning({
        message: 'Будь ласка заповніть форму',
        position: 'topRight',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: error.request.status,
        position: 'topRight',
      });
    }
  }
}

// /// OPEN MODAL /// //
function openModal() {
  backdrop.classList.add('is-open');
  window.addEventListener('keydown', closeModal);
  document.body.classList.add('no-scroll');
}

// /// CLOSE MODAL /// //
function closeModal() {
  backdrop.classList.remove('is-open');
  window.removeEventListener('keydown', closeModal);
  document.body.classList.remove('no-scroll');
}
closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}
