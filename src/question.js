const baseUrl = 'https://js-app-firebase-default-rtdb.firebaseio.com/'

export class Question {
    static create(question) {
        return fetch(`${baseUrl}/questions.json`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                question.id = res.name;
                question.id = res.name;
                return question;
            })
            .then(addToLocalStorage)
            .then(Question.renderList);
    }


    static renderList(){
        const questions = getKeyFromLocalStorage('questions');
        const html = questions.length
            ? questions.map(toCart).join(" ")
            :  '<li class="list-item">no data</li>';

        const list = document.getElementById('list');
        list.innerHTML = html;
    }
}

function addToLocalStorage(question){
    const questions = getKeyFromLocalStorage('questions');
    questions.push(question);
    localStorage.setItem('questions',JSON.stringify(questions));
    return question;
}

function getKeyFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function toCart(question){

    return `<li class="list-item"><em>${new Date(question.date).toLocaleString()}</em><p>${question.text}</p></li>`
}
