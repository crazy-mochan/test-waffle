//デフォルトのバリデーションメッセージを非表示にする
const initialize = () => {
    let messages = document.getElementsByClassName('error-message');
    messages = Array.from(messages);
    console.log(Array.isArray(messages));
    for (let i = 0; i < messaeges; i++) {
        messages[i].style.display = 'none';
    }
}
const showValidateMessage = (index) => {
    let messages = document.getElementsByClassName('error-message');
    messages[index].style.display = 'block';
}

//デフォルトのバリデーションメッセージを使用せず
// カスタムしたメッセージを使用する
const validateMessage = () => {
    let form = document.getElementById('form-body');
    let invalids = form.querySelectorAll(':invalid');

    if (invalids.length < 1) {
        return false;
    }
    let invalidsIndex;
    invalids.foreach(
        (invalid) => {
            if (!invalid) {
                return;
            }
            invalid.addEventListener(
                'change',
                function f() {
                    this.removeEventListener('change', f);
                    invalidsIndex = invalids.indexOf(this);
                    showValidateMessage(invalidsIndex);
                }
            );
        }
    );

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
