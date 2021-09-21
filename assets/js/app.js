const $ = document.querySelector.bind(document);

function preventReload(e){
    e.preventDefault();
}

$('#nav li:last-child').addEventListener('click',preventReload);

let header = $('#header');
console.log(header.clientHeight);

$('#menu-bar').onclick = function() {
    //? check header có đang mở không
    if(header.clientHeight == 46){
        header.style.height = 'auto';
    }
    else
        header.style.height = '46px';
}
