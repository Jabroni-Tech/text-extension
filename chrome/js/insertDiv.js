const insertDiv = (text, x, y) => {
    var div = document.createElement('div');
    div.innerHTML = text
    div.className = 'text'
    document.querySelector("body").appendChild(div);
}
