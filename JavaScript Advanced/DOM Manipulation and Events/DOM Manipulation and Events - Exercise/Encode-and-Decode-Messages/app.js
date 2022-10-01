function encodeAndDecodeMessages() {
   let buttons = document.getElementsByTagName('button');
   buttons[0].addEventListener('click',encodeText);
   buttons[1].addEventListener('click',decodeText);

   function encodeText() {
    let textAreas = document.querySelectorAll('textarea');
    let encodeMsg = "";
    let encodeText = textAreas[0].value;
    for(let i = 0;i < encodeText.length;i++) {
        let encodeCh = encodeText[i].charCodeAt();
        encodeMsg += String.fromCharCode(encodeCh + 1);
    }

    let currentArea = textAreas[0];
    currentArea.value = "";
    let dropArea = textAreas[1];
    dropArea.value = encodeMsg;
   }

   function decodeText(event) {
    let currentTextArea = event.target.parentElement.getElementsByTagName('textarea')[0];
    let decodeText = currentTextArea.value;
    let decodeMsg = "";
    for(let i = 0;i < decodeText.length;i++) {
        let decodeCh = decodeText[i].charCodeAt();
        decodeMsg += String.fromCharCode(decodeCh - 1);
    }
    currentTextArea.value = decodeMsg;
   }
}