document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modalCallButtons = document.querySelectorAll('[data-modal]');

    modalCallButtons.forEach((modalCall) => {
        modalCall.addEventListener('click',(e) => {
            e.preventDefault();

            const modalCallData = modalCall.dataset.modal;

            const neededModal = document.querySelector(modalCallData);
            neededModal.classList.add('show');
            body.classList.add('no-scroll');

            const modalDialog = neededModal.querySelector('.modal__dialog');

            setTimeout(function () {
                modalDialog.style.transform = 'rotateX(0)';
            }, 200);

            $('.worksSlider').slick('setPosition');


            const modalContent = neededModal.querySelector('.modal__content')
                || neededModal.querySelector('.contact')
                || neededModal.querySelector('.modal-work');

            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            const closeButton = neededModal.querySelector('.modal__close');

            closeButton.addEventListener('click', (e) => {
                e.preventDefault();

                const modal = e.currentTarget.closest('.modal');
                const modalDialog = modal.querySelector('.modal__dialog');

                modalDialog.style.transform = 'rotateX(90deg)';

                setTimeout(function() {
                    modal.classList.remove('show');
                    body.classList.remove('no-scroll');
                }, 200);
            });


            neededModal.addEventListener('click', (e) => {
                const modalDialog = e.currentTarget.querySelector('.modal__dialog');

                modalDialog.style.transform = 'rotateX(90deg)';

                setTimeout(function() {
                    neededModal.classList.remove('show');
                    body.classList.remove('no-scroll');
                }, 200);
            });
        });
    })
});