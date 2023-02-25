var b1 = document.querySelectorAll(".arrow-right");
var b2 = document.querySelectorAll(".arrow-left");
console.log(b2);
b1.forEach(button => {
    button.addEventListener("click", ()=>{
        var div =  button.parentElement.parentElement;
        div.childNodes[1].scrollLeft += 20;
    });
});

b2.forEach(button => {
    button.addEventListener("click", ()=>{
        var div =  button.parentElement.parentElement;
        div.childNodes[1].scrollLeft -= 20;
    });
});