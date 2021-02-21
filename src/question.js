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
                question.id = res.name;
                question.id = res.name;
                return question;
            })
            .then(addToLocalStorage)
            .then(Question.renderList);
    }

    static fetchAllquestions(token) {
        if (!token) {
            return Promise.resolve('<p class="error">no token</p>')
        }
        return fetch(`${baseUrl}/questions.json?auth=${token}`)
            .then(res => res.json())
            .then(res => {
                if (res && res.error) {
                    return `Error: ${res.error}`;
                }
                return res ? Object.keys(res).map((key) => {
                    return {...res[key], id: key}
                }) : [];
            })
    }

    static renderList() {
        const questions = getKeyFromLocalStorage('questions');
        const html = questions.length
            ? questions.map(toCart).join(" ")
            : '<li class="list-item">no data</li>';

        const list = document.getElementById('list');
        list.innerHTML = html;
    }

    static listToHtml(questions) {
        return questions.length
            ? `<ol>${questions.map(q=>`<li>${q.text}</li>`).join(' ')}</ol>`
            : `<p>no questions yet</p>`;
    }

}

export function addToLocalStorage(question) {
    const questions = getKeyFromLocalStorage('questions');
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
    return question;
}

function getKeyFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function toCart(question) {

    return `<li class="list-item"><em>${new Date(question.date).toLocaleString()}</em><p>${question.text}</p></li>`
}
