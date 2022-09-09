//デフォルトのバリデーションメッセージを非表示にする
const hiddenValidationMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');

    let invalid;
    for (let i = 0; i < invalids.length; i++) {
        console.log(invalid);
        invalid = invalids[i];
        invalid.addEventListener(
            'change',
            function f() {
                this.removeEventListener('change', f);
            }
        );
    }
}
const addEventWithSubmitButton = () => {

    let submit = document.getElementById('submit-button');

    submit.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            hiddenValidationMessage();
        }
    )
}


window.addEventListener(
    'load',
    (e) => {
        addEventWithSubmitButton();
    }
);
