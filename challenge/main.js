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
        if (invalids[i] == undefined) {
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
                showDialog('送信したよ！');
                return;
            }
        }
    );
}

window.addEventListener(
    'load',
    (e) => {
        addEventWithSubmitButton();
    }
);
