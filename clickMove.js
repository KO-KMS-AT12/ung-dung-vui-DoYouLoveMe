function clickYes() {
    alert("Me too, I love you");
}

function clickNo(event) {
    var valuePoint = event.type;
    console.log(valuePoint);
    if (valuePoint == 'mouseenter') {
        move();
    }
}

function move() {
    var btnNo = document.getElementById('id_no');
    var random = Math.random() * 100 + 250;
    btnNo.style.position = 'relative';
    btnNo.style.marginLeft = '0px';
    btnNo.style.marginRight = '0px';
    btnNo.style.left = '0px';
    btnNo.style.top = '0px';
    btnNo.style.right = '0px';
    btnNo.style.bottom = '0px';
    btnNo.style.marginLeft = parseInt(btnNo.style.marginLeft) + random + 'px';
    btnNo.style.marginRight = parseInt(btnNo.style.marginRight) + random + 'px';
    btnNo.style.left = parseInt(btnNo.style.left) + random + 'px';
    btnNo.style.top = parseInt(btnNo.style.top) + random + 'px';
    btnNo.style.right = parseInt(btnNo.style.top) + random + 'px';
    btnNo.style.bottom = parseInt(btnNo.style.top) + random + 'px';
}

window.onload = clickNo();


