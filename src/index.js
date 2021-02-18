
import css from "./style.css";
import {isValid} from "./utils";
import {Question} from "./question";


window.addEventListener('load', Question.renderList);



const form = document.getElementById('form');
form.addEventListener('submit', submitFormHandler)


const input = form.querySelector('#ask');


const submitBtn = form.querySelector('#submit');
input.addEventListener('input', ()=>{
    submitBtn.disabled = !isValid(input.value)

})

const modalBtn = document.querySelector('#modal-btn');
modalBtn.addEventListener('click', openModal);

function openModal(){
    console.log("openModal")
}

function submitFormHandler($event){
    $event.preventDefault();
    if(isValid(input.value)){
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
};

