//デフォルトのバリデーションメッセージを非表示にする
const initialize = () => {
    let messages = document.getElementsByClassName('error-message');

    for (let i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none';
    }
}
const showValidateMessage = (invalidObject, isShow) => {
    let messages = document.getElementsByClassName('error-message');
    let form = document.getElementById('form-body');
    let invalids = Array.prototype.slice.call(form.querySelectorAll(':invalid'));
    let invalidIndex = invalids.indexOf(invalidObject);

    messages[invalidIndex].style.display = isShow ? 'block' : 'none';
}

//デフォルトのバリデーションメッセージを使用せず
// カスタムしたメッセージを使用する
const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');
    console.log("validateMessage");
    if (invalids.length < 1) {
        return false;
    }
    for (let i = 0; i < invalids.length; i++) {
        console.log(invalids[i]);
        if (!invalids[i]) {
            showValidateMessage(invalids[i], false);
            continue;
        }
        invalids[i].addEventListener(
            'change',
            function f() {

                this.removeEventListener('change', f);

            }
        );
        showValidateMessage(invalids[i], true);
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
        }
    );
}

window.addEventListener(
    'load',
    (e) => {
        initialize();
        addEventWithSubmitButton();
    }
);
