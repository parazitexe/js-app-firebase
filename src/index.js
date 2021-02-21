import css from "./style.css";
import {createModal, isValid} from "./utils";
import {addToLocalStorage, Question} from "./question";
import {authWithLoginAndPass, getAuthForm} from "./auth";


window.addEventListener('load', Question.renderList);


const form = document.getElementById('form');
form.addEventListener('submit', submitFormHandler)

function submitFormHandler($event) {
    $event.preventDefault();
    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON(),
        }

        submitBtn.disabled = true;
        //Async request to API
        Question.create(question).then((res) => {
            input.value = "";
            input.className = "";
        });
    }
}


const submitBtn = form.querySelector('#submit');
const input = form.querySelector('#ask');
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})


const modalBtn = document.querySelector('#modal-btn');
modalBtn.addEventListener('click', openModal);


function openModal() {
    console.log("openModal")
    createModal('Login', getAuthForm());
    const authForm = document.getElementById('auth-form');
    authForm.addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler($event) {
    $event.preventDefault();
    const btn = $event.target.querySelector('button');
    const email = $event.target.querySelector('#email').value;
    const password = $event.target.querySelector('#password').value;
    btn.disabled = true;
    authWithLoginAndPass(email, password)
        .then((token) => Question.fetchAllquestions(token))
        .then(question => {
            renderModalAfterAuth(question)
            btn.disabled = false
        });
}

function renderModalAfterAuth(content) {
    console.log("Content", content);
    if (typeof content == "string"){
        createModal("Error", content)
    }else {
        createModal("Result", Question.listToHtml(content));
        addToLocalStorage(content);
        Question.renderList();
    }
}


