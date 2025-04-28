let users = {
    "testuser": "password123", 
    "example": "securePass"
};

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    } else {
        alert("Invalid username or password!");
    }
}
