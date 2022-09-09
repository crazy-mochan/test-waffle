//デフォルトのバリデーションメッセージを非表示にする
const initialize = () => {
    
}

const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');
    if (invalids.length < 1) {
        return false;
    }
    for (let i = 0; i < invalids.length; i++) {
        console.log(invalids[i]);
        if (!invalids[i]) {
            continue;
        }
        invalids[i].addEventListener(
            'change',
            function f() {
                this.removeEventListener('change', f);
            }
        );
    }
    return true;
}

const showDialog = (message) => {
    window.alert(message);
}
/*submit に付与するイベント*/
const addEventWithSubmitButton = () => {

    let submit = document.getElementById('submit-button');

    submit.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            if (validateMessage() == false) {
                showDialog('送信しました！');
                return;
            }
            validateMessage();

        }
    )
}

window.addEventListener(
    'load',
    (e) => {
        addEventWithSubmitButton();
    }
);
