let chat = document.getElementsByClassName('chat');
let chatButton = document.getElementsByClassName('chat-button');

      chatButton[0].addEventListener('click',function(){
        chat[0].classList.toggle('chat-active')
    })


let sendButton = document.getElementsByClassName('fas-send');
let chatMain = document.getElementsByClassName('chat-main');
let input = document.getElementsByClassName('chat-text-input')
let deleteButton = document.getElementsByClassName('cancel-text')[0]


sendButton[0].addEventListener('click',function(){
    let newMessage = document.createElement('div');
    newMessage.classList.add('new-message')
    let nmText  = document.createElement('h3');
    let img = document.createElement('img')
    img.src = 'asserts/user.jpg'
    nmText.innerText = input[0].value;
    chatMain[0].appendChild(newMessage)
    newMessage.appendChild(img);
    newMessage.appendChild(nmText);
    nmText.style.margin = '0'
    nmText.style.fontSize = '16px'
    nmText.style.color = 'white'
    nmText.style.margin = '20px'
    nmText.style.fontWeight = '100'
    newMessage.style.padding = '20px';
    newMessage.style.paddingLeft = '0px';
    newMessage.addEventListener('click',function(){
        newMessage.classList.toggle('nm-click')
        newMessage.classList.toggle('new-message')
        deleteButton.classList.remove('chat-active');
    })
    
    newMessage.style.width = '750px';
    newMessage.style.borderBottom = 'solid gray .1px'
    newMessage.style.display = 'flex';
    newMessage.style.flexDirection = 'row-reverse'
    
    
deleteButton.addEventListener('click',function(){
    if(newMessage.classList.contains('nm-click')){
        chatMain[0].removeChild(newMessage)
    }
})
    let word = input[0].value
    if(word[0] == word[0].toUpperCase()){
    newMessage.style.flexDirection = 'row'
    img.src = 'asserts/1548257128_image_temp_name1.jpg'
}
    input[0].value = "";
    
})


input[0].addEventListener("keyup", function(e){

    if(e.keyCode == 13){
        let newMessage = document.createElement('div');
        newMessage.classList.add('new-message')
        let nmText  = document.createElement('h3');
        let img = document.createElement('img')
        img.src = 'asserts/user.jpg'
        nmText.innerText = input[0].value;
        chatMain[0].appendChild(newMessage)
        newMessage.appendChild(img);
        newMessage.appendChild(nmText);
        nmText.style.margin = '0'
        nmText.style.fontSize = '16px'
        nmText.style.color = 'white'
        nmText.style.margin = '20px'
        nmText.style.fontWeight = '100'
        newMessage.style.padding = '20px';
        newMessage.style.paddingLeft = '0px';
        newMessage.addEventListener('click',function(){
            newMessage.classList.toggle('nm-click')
            newMessage.classList.toggle('new-message')
            deleteButton.classList.remove('chat-active');
        })
        newMessage.style.width = '750px';
        newMessage.style.borderBottom = 'solid gray .1px'
        newMessage.style.display = 'flex';
        newMessage.style.flexDirection = 'row-reverse'
        
        
    deleteButton.addEventListener('click',function(){
        if(newMessage.classList.contains('nm-click')){
            chatMain[0].removeChild(newMessage)
        }
    })
        let word = input[0].value
        if(word[0] == word[0].toUpperCase()){
        newMessage.style.flexDirection = 'row'
        img.src = 'asserts/1548257128_image_temp_name1.jpg'
    }
        input[0].value = "";
    }

});


