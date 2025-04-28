function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let timestamp = new Date().toLocaleTimeString();
    let username = document.getElementById('username').value;

    let message = `[ ${timestamp} ] ${username}: ${messageInput.value}`;
    document.getElementById("messages").innerHTML += `<p>${message}</p>`;
    
    messageInput.value = ""; // Clear input after sending
}
