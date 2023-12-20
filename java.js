let bt = document.getElementById('btn');
window.onscroll = function () {
    if (scrollY >= 400) {
        bt.style.display = 'block';
    } else { bt.style.display = 'none'; }
}

bt.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}



let so = document.querySelector('.sofa');
let tab = document.querySelector('.table');
let be = document.querySelector('.bed');
let cso = document.querySelector('.sofa-item');
let ctab = document.querySelector('.table-item');
let cbe = document.querySelector('.bed-item');


so.onclick = function () {
    cso.classList.remove('hide');
    ctab.classList.add('hide');
    cbe.classList.add('hide');

}
tab.onclick = function () {
    ctab.classList.remove('hide');
    cso.classList.add('hide');
    cbe.classList.add('hide');
}
be.onclick = function () {
    cbe.classList.remove('hide');
    cso.classList.add('hide');
    ctab.classList.add('hide');
}
