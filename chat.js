// JavaScript for sending a message
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
    userInput.value = "";

    if (message.trim() !== "") {
        var chatMessages = document.getElementById("chat-messages");
        var newMessage = document.createElement("div");
        newMessage.className = "chat-message";
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
    }
}
