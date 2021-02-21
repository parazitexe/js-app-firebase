export function getAuthForm() {
    const html = `
            <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input id="email" type="text" required>
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input id="password" type="password" required>
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Login</button>
            </form>
    `;
    return html;
}


export function authWithLoginAndPass(email, password) {
    const apiKey = 'AIzaSyDSDC1pOcCyj1Q4mgkZMBe_Btx9QLhSUuU';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
            email, password, returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken)
}
