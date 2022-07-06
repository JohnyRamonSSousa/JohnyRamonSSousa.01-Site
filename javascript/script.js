document.querySelector('.open-menu').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.add('open');
});


document.querySelector('.close-menu button').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.remove('open');
});


document.querySelector('.menu .backdrop').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.remove('open');
});



'use strict';

const images = [
    { 'id': '1', 'url':'./img/violino01.jpg' },
    { 'id': '2', 'url':'./img/violino02.jpg' },
    { 'id': '3', 'url':'./img/violino03.jpg' },
    { 'id': '4', 'url':'./img/violino04.jpg' },
    { 'id': '5', 'url':'./img/violino11.jpg' },
    { 'id': '6', 'url':'./img/violino22.jpg' },
    { 'id': '6', 'url':'./img/violino23.jpg' },
    { 'id': '6', 'url':'./img/violino25.jpg' },
    { 'id': '6', 'url':'./img/violino26.jpg' },
    { 'id': '6', 'url':'./img/violino27.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);