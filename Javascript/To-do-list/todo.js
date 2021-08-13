function newItem() {
    var item = document.getElementById('userInput').value;
    var list = document.getElementById("list");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode("-" + item));
    list.appendChild(li);
    document.getElementById('userInput').value = " ";
    li.onclick = removeItem;
}

document.body.onkeyup = function (e){
    if (e.keyCode == 13){
        newItem();
    }
};

function removeItem(e){
    e.target.parentElement.removeChild(e.target);
}