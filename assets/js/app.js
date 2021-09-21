const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let header = $('#header');
let menu_items = $$('#nav > li:not(:last-child)');

function preventReload(e){
    e.preventDefault();
}

function closeHeader(header){
    header.style.height = '46px';
}

function openHeader(header){
    header.style.height = 'auto';
}

$('#nav li:last-child').addEventListener('click',preventReload);
$('#menu-bar').onclick = function() {
    //? check header có đang mở không
    (header.clientHeight == 46) ? openHeader(header): closeHeader(header);
}

menu_items.forEach(function(item){
    item.onclick = function() {
        closeHeader(header);
    }
})

