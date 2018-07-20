const portfolio = document.querySelector('.portfolio');

portfolio.addEventListener('click', e => {
    // console.log(e.target);
    const button = e.target.closest('.js-open-modal');
    console.log(button);

    if (!button) return;
    const modal = button.parentNode.nextElementSibling;

    //console.log(modal);

    const closeButton = modal.querySelector('.js-close-modal');

    const modalOpen = _ => {
        modal.classList.add('is-open');
    }

    const modalClose = _ => {
        modal.classList.remove('is-open');
    }

    modalOpen();

    closeButton.addEventListener('click', _ => {
        modalClose();
    })


    document.addEventListener('keydown', e => {
        // console.log(e)
        // console.log(e.keyCode)
        if (e.keyCode === 27) {

            modal.style.animation = 'opacity-down 500ms forwards'
            modal.addEventListener('animationend', modalClose)
        }
    })

})