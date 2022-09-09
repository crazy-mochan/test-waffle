//デフォルトのバリデーションメッセージを非表示にする
const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');
    if (invalids.length < 1) {
        return false;
    }
    for (let i = 0; i < invalids.length; i++) {
        //console.log(invalid[i]);
        invalids[i].addEventListener(
            'change',
            function f() {
                this.removeEventListener('change', f);
            }
        );
    }
    return true;
}
/*submit に付与するイベント*/
const addEventWithSubmitButton = () => {

    let submit = document.getElementById('submit-button');

    submit.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            if (validateMessage()) {
                window.alert("送信しました！");
            }
            return;
        }
    )
}

window.addEventListener(
    'load',
    (e) => {
        addEventWithSubmitButton();
    }
);
