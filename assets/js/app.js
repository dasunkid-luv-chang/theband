const $ = document.querySelector.bind(document);

function preventReload(e){
    e.preventDefault();
}

$('#nav li:last-child').addEventListener('click',preventReload);

let header = $('#header');
console.log(header.clientHeight);

$('#menu-bar').onclick = function() {
    if(header.clientHeight == 46){
        header.style.cssText = 'overflow: visible; height: auto';
    }
    else
        header.style.cssText = 'overflow:hidden; height: 46px';
}
