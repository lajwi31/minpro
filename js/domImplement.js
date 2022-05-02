// DOM Selection
// document.getElementById
const dom1 = document.getElementById('dom1');
dom1.style.color = 'blue';
dom1.style.backgroundColor = '#ccc';
dom1.innerHTML = "Lajwi";

// document.getElementByTagName()
// -> HTML Collection
const p = document.getElementsByTagName('p');

for(let i=0;i<p.length;i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// document.getElementByClassName('')
const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "Ini Diubah dari JavaScript";

for (let i = 0; i < p1.length; i++) {
//  p[i].style.backgroundColor = "lightblue";
    p1[i].innerHTML = "Ini Diubah dari JavaScript";
}

const btn = document.getElementById('btn');

function ubahWarna() {
    btn.style.backgroundColor = 'red';
}

const btn2 = document.querySelector('.btn-warning');

function pesan() {
    alert("Ini adalah DOM Alert");
}

const  btn3 = document.querySelector('section .btn-success');

btn3.addEventListener('click',function(){
    const p = document.querySelector('section .btn-success');
    const pBaru = document.createElement('button.btn');
    const textBaru = document.createTextNode('Button Baru \n');
    pBaru.appendChild(textBaru);
    p.appendChild(pBaru);
})

const mouseover = document.querySelector('.mouseover');

function mOver() {
  mouseover.innerHTML = "Ketika Di Hover";
  mouseover.color = "white";
  mouseover.style.backgroundColor = 'purple';
}

function mOut() {
  mouseover.innerHTML = "Ketika Di Lepas";
  mouseover.style.backgroundColor = "lightblue";
}

const btnSend = document.querySelector(".btn-send");

function cekSend() {
  btnSend.style.backgroundColor = "red";
  btnSend.innerHTML = "Sending...."

}