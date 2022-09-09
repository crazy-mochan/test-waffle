
const addEventWithSubmitButton = () => {

    let submit = document.getElementById('submit-button');

    submit.addEventListener(
        'click',
        () => {
            let form = document.getElementById('form-body');
            let invalids = form.querySelectorAll(':invalid');
            e.preventDefault();
            let invalid;
            for (let i = 0; i < invalids.length; i++) {
                invalid = invalids[i];
                invalid.addEventListener(
                    'change',
                    function f() {
                        this.removeEventListener('change', f);
                    }
                );
            }
        }
    )
}

window.addEventListener(
    'load',
    () => {
        addEventWithSubmitButton();
    }
);
