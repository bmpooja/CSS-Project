console.log("Hello from JavaScript")

const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");

function renderEmoji()
{for(let i =0; i< myEmojis.length; i++){
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    console.log(emoji);
    emojiContainer.append(emoji);
}
}

renderEmoji()
const pushButton = document.getElementById("push-btn")
pushButton.addEventListener('click', function(){
    console.log('clicked');
    const emojiInput = document.getElementById('emoji-input');
    myEmojis.push(emojiInput.value);
    console.log(myEmojis);
    emojiContainer.innerHTML='';
    renderEmoji()
})
