let buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click',function(){
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}