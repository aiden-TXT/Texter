let friends = ["User123", "CoolUser", "GamerX"];

function showTab(tabName) {
    alert("Switching to " + tabName);
}

function reportUser(username, reason) {
    alert(`Reporting ${username} for ${reason}`);
    // Store reports in database here
}

document.querySelectorAll(".username").forEach(user => {
    user.addEventListener("mouseover", () => {
        let blockButton = document.createElement("button");
        blockButton.innerText = "Block";
        blockButton.onclick = () => alert("Blocked " + user.innerText);
        user.appendChild(blockButton);
    });
});
