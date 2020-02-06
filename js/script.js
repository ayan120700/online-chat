let chat = document.getElementsByClassName('chat');
let chatButton = document.getElementsByClassName('chat-button');

      chatButton[0].addEventListener('click',function(){
        chat[0].classList.toggle('chat-active')
    })


let sendButton = document.getElementsByClassName('fas-send');
let chatMain = document.getElementsByClassName('chat-main');
let input = document.getElementsByClassName('chat-text-input')
sendButton[0].addEventListener('click',function(){
    let newMessage = document.createElement('div');
    let nmText  = document.createElement('h3');
    let img = document.createElement('img')
    img.src = '../asserts/rabbit.jpg'
    nmText.innerText = input[0].value;
    chatMain[0].appendChild(newMessage)
    newMessage.appendChild(img);
    newMessage.appendChild(nmText);
    nmText.style.margin = '0'
    nmText.style.fontSize = '16px'
    nmText.style.color = 'white'
    nmText.style.margin = '20px'
    nmText.style.fontWeight = '100'
    newMessage.style.padding = '10px';
        newMessage.addEventListener('mouseover',function(){
        newMessage.style.backgroundColor = 'gray'
        })
        newMessage.addEventListener('mouseout',function(){
        newMessage.style.background = 'none'
        })
    newMessage.style.width = '750px';
    newMessage.style.borderBottom = 'solid gray .1px'
    newMessage.style.display = 'flex';
    newMessage.style.flexDirection = 'row-reverse'
})


