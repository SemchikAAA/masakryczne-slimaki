import axios from 'axios';
import 'modern-normalize/modern-normalize.css';

const backdrop = document.querySelector('.wt-backdrop');
const form = document.querySelector('.wt_form');
const closeBtn = document.querySelector('.wt-close-btn');

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

    return;
  } catch (error) {
    if (error.request.status === 400) {
      alert('Будь ласка заповніть форму');
    } else {
      alert(`Error ${error.request.status}`);
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
