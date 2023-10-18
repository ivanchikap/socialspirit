document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll("[data-filter]");

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const buttonData = button.dataset.filter;

            buttons.forEach((button) => {
                button.classList.remove('active');
            })

            e.target.classList.add('active');

            const elements = document.querySelectorAll('[data-cat]');

            elements.forEach((element) => {
                if (buttonData === 'all') {
                    element.classList.remove('hide');
                    return
                }

                if (buttonData !== element.dataset.cat) {
                    element.classList.add('hide');
                } else {
                    element.classList.remove('hide');
                }
            })
            e.target.class
        })
    })
});