const container = document.querySelector('#chips-container');
 

container.addEventListener('focus', () => {
    container.style.borderBottom = "2px solid red";

})

const input = document.querySelector('#input-box');

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){

    const chip = document.createElement('div');
    const text = document.createTextNode(`${input.value}`);
    chip.setAttribute('class', 'chips');
    
    const chipContent = document.createElement('sapn');
    const text2 = document.createTextNode("x");
    chipContent.setAttribute('class', 'closebtn');
    chipContent.setAttribute('onclick', 'this.parentElement.remove()');
    chipContent.appendChild(text2);

    chip.appendChild(text);
    chip.appendChild(chipContent);
    // alert(container.childNodes.length)
    container.insertBefore(chip, container.childNodes[container.childNodes.length-2]);
    input.value="";
    }
})