
function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.text().value, form.email().value, form.tel().value
    ).then(response => {
        window.location.href = "pages/home/home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}

function cadastro() {
    window.location.href = "index.html";
}