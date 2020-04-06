'use strict'

var isModalOpen = false;

function onTrigramClick(el) {

    if (!isModalOpen) {
        el.style.background = '#292929'
        document.querySelector('.trigram-icn').style.display = 'none'
        document.querySelector('.trigram-x').style.display = 'block'
        document.querySelector('.nav-modal-container').style.display = 'block'
        isModalOpen = true;
    } else {
        el.style.background = 'white'
        document.querySelector('.trigram-icn').style.display = 'block'
        document.querySelector('.trigram-x').style.display = 'none'
        document.querySelector('.nav-modal-container').style.display = 'none'
        isModalOpen = false;
    }
}