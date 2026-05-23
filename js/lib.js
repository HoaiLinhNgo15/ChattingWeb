function getMessage() {
    const input =document.getElementById('message-input');
    const message = input.value.trim();
    if(message !== ''){
        const chatboxContent = document.createElement('div');
        chatboxContent.setAttribute('class', 'chatbox-label');

        const messageElement = document.createElement('p');
        const textNode = document.createTextNode(message);
        messageElement.appendChild(textNode);

        const messageElement1 = document.createElement('p');
        messageElement1.setAttribute('class', 'message-time');
        const timeNode = document.createTextNode(new Date().toLocaleTimeString());
        messageElement1.appendChild(timeNode);

        chatboxContent.appendChild(messageElement);
        chatboxContent.appendChild(messageElement1);

        document.getElementsByClassName("chatbox-content")[0].appendChild(chatboxContent);
        input.value="";
        document.getElementsByClassName("chatbox-content")[0].scrollTop = document.getElementsByClassName("chatbox-content")[0].scrollHeight;
    }
}