function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if(message !==''){
        addMessage(message, "user");
        input.value="";
    }
}
function addMessage(content, type) {
    const chatbox = document.getElementsByClassName("chatbox-content")[0];
    const chatboxContent = document.createElement('div');
    chatboxContent.setAttribute('class', 'chatbox-label ' + type);

    const messageElement = document.createElement('p');
    const textNode = document.createTextNode(content);
    messageElement.appendChild(textNode);

    const messageElement1 = document.createElement('p');
    messageElement1.setAttribute('class', 'message-time');
    const timeNode = document.createTextNode(new Date().toLocaleTimeString());
    messageElement1.appendChild(timeNode);

    chatboxContent.appendChild(messageElement);
    chatboxContent.appendChild(messageElement1);

    chatbox.appendChild(chatboxContent);
    chatbox.scrollTop = chatbox.scrollHeight;
    
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chatbox-label bot';

        const messageElement3 = document.createElement('p');
        const textNode1 = document.createTextNode("This is a response form bot, please waiting for a moment...");
        messageElement3.appendChild(textNode1);

        const messageElement4 = document.createElement('p');
        messageElement4.setAttribute('class', 'message-time');
        const timeNode1 = document.createTextNode(new Date().toLocaleTimeString());
        messageElement4.appendChild(timeNode1);

        botMessage.appendChild(messageElement3);
        botMessage.appendChild(messageElement4);

        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 800);
}

function addMessage1(content, type, isFile = false, file=null) {
    const chatbox = document.querySelector('.chatbox-content');
    const chatboxContent = document.createElement('div');
    chatboxContent.setAttribute('class', 'chatbox-label ' + type);

    let messageElement;
    if(isFile && file){
        if(file.type.startsWith("image/")){
            messageElement = document.createElement('img');
            messageElement.setAttribute("src", URL.createObjectURL(file));
            messageElement.style.maxWidth = "200px";
            messageElement.style.maxHeight = "200px";
        }
        else{
            messageElement = document.createElement('p');
            messageElement.textContent = `File: ${file.name}`;
        }
    } else {
        messageElement = document.createElement('p');
        messageElement.textContent = content;
    }
    chatboxContent.appendChild(messageElement);
    chatbox.appendChild(chatboxContent);
    chatbox.scrollTop = chatbox.scrollHeight;
}