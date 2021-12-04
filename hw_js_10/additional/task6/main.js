//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let div = document.createElement('div');
div.className += 'test';
div.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto assumenda aut cupiditate ea, minus nesciunt numquam quos recusandae vero? Cum delectus, dicta, ea eum expedita facere fugit harum impedit iure magni neque officiis perspiciatis porro ratione reiciendis rem repellendus voluptas voluptates. Ab aperiam architecto blanditiis dignissimos eaque et magnam maiores modi nihil odio officia, provident quis tempora? Assumenda dicta distinctio ducimus, est et nemo possimus provident reiciendis! Beatae culpa eveniet nemo nulla perspiciatis quisquam repellat sunt ut vel veniam! Consequuntur cupiditate impedit in voluptas! Aliquid illum iure laborum odit optio placeat repellat sit! A iste iusto odit`
document.body.appendChild(div);

function getSelectionText() {
    return window.getSelection().getRangeAt(0);
}

addEventListener('mouseup', function () {
    let range = getSelectionText();
    let selectedText = div.innerText.slice(range.startOffset, range.endOffset);
    div.innerHTML = div.innerHTML.replace(selectedText, selectedText.bold())
})

