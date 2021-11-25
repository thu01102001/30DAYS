var btnOpen = document.querySelector('.modal__open');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal() {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal();
    }
});

// function hideModal() {
//     modal.classList.add('hide')
// }
// iconClose.addEventListener('click', hideModal);
// btnClose.addEventListener('click', hideModal);