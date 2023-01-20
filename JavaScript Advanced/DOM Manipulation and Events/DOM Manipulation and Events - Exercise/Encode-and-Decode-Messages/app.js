function encodeAndDecodeMessages() {
    let allButtons = document.querySelectorAll('button');
    allButtons[0].addEventListener("click",encodeFunc);
    allButtons[1].addEventListener("click",decodeFunc);

    function encodeFunc() {
        let allTextAreas = document.querySelectorAll("textarea")
        let encodeTextArea = allTextAreas[0].value;
        let encodeMsg = ""
        for(let i = 0;i < encodeTextArea.length;i++) {
            let encodeCh = encodeTextArea[i].charCodeAt();
            encodeMsg += String.fromCharCode(encodeCh + 1);
        }

        let textArea = allTextAreas[0];
        textArea.value = "";
        let secondTextArea = allTextAreas[1];
        secondTextArea.value = encodeMsg;
    }

    function decodeFunc(event) {
        let textArea = event.target.parentElement.querySelector('textarea');
        let decodeTextArea = textArea.value;
        let decodeMsg = "";
        for(let i = 0;i < decodeTextArea.length;i++) {
            let decodeCh = decodeTextArea[i].charCodeAt();
            decodeMsg += String.fromCharCode(decodeCh - 1);
        }
        
        textArea.value = decodeMsg;
    }
}