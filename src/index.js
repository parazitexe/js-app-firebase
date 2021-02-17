
import css from "./style.css";
import {isValid} from "./utils";
import {Question} from "./question";




const form = document.getElementById('form');



const input = form.querySelector('#ask');
const submitBtn = form.querySelector('#submit');
input.addEventListener('input', ()=>{
    submitBtn.disabled = !isValid(input.value)
})

form.addEventListener('submit', submitFormHandler)

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

