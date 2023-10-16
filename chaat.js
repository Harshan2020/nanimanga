// JavaScript for sending a message and receiving a response
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
    userInput.value = "";

    if (message.trim() !== "") {
        var chatMessages = document.getElementById("chat-messages");

        // Create a new message element for the user's message
        var userMessage = document.createElement("div");
        userMessage.className = "chat-message user";
        userMessage.textContent = "You: " + message;
        chatMessages.appendChild(userMessage);

        // Simulate a response (you can replace this with actual response logic)
        var responseMessage = document.createElement("div");
        responseMessage.className = "chat-message response";
        responseMessage.textContent = "Bot: Thanks for your message!";
        chatMessages.appendChild(responseMessage);
    }
}
