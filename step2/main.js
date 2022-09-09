//デフォルトのバリデーションメッセージを非表示にする
const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');

    for (let i = 0; i < invalids.length; i++) {
        //console.log(invalid[i]);
        invalids[i].addEventListener(
            'change',
            function f() {
                this.removeEventListener('change', f);
            }
        );
    }
}
/*submit に付与するイベント*/
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
