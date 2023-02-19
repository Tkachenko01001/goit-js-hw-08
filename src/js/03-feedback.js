import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input')

const formData = {};
let savedData;
let parseData;

const onDataStorage = (e) => {
    savedData = localStorage.getItem('feedback-form-state');
    parseData = JSON.parse(savedData);
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

const onDataSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(parseData);
};

const storageCheck = () => {
if (savedData) {
    inputEl.value = parseData.email;
    textareaEl.value = parseData.message;  
}
};

storageCheck();

formEl.addEventListener('submit', onDataSubmit);
formEl.addEventListener('input', throttle(onDataStorage, 500));
