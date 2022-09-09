//デフォルトのバリデーションメッセージを非表示にする
const initialize = () => {
    let messages = document.getElementsByClassName('error-message');
    messages.foreach(
        (message) => {
            message.style.display = 'none';
        }
    );
}
const showValidateMessage = () => {
    let messages = document.getElementsByClassName('error-message');
    let valids =
    messages.foreach(
        (message) => {

        }
    );
}

//デフォルトのバリデーションメッセージを使用しない
const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');
    if (invalids.length < 1) {
        return false;
    }

    invalids.foreach(
        (invalid) => {
            if (!invalid) {
                return;
            }
            invalid.addEventListener(
                'change',
                function f() {
                    this.removeEventListener('change', f);
                }
            );
        }
    );
    for (let i = 0; i < invalids.length; i++) {
        console.log(invalids[i]);

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
        initialize();
        addEventWithSubmitButton();
    }
);
