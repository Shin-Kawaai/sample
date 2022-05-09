



//ハンバーガーメニュー
function hamburger() {
    document.getElementById('line1').classList.toggle('line_1'); //toggleメソッド・・・状態を切り替えられる　結果的にはcssのline1とline_1の設定を切り替えている
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function() {
    hamburger(); //ハンバーガークリック時に上記関数発動
});




//カウントダウン
function countdown(due) {
    const now = new Date(); //Dateオブジェクト初期化

    const rest = due.getTime() - now.getTime(); //目的の時間から現在の時間を引く　※この取得値は1/1000秒単位いなっているので次の行以降では1000で割って秒に直す
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

const goal = new Date(2022, 5, 25); //目的の日付を設定　※月はインデックス番号換算されるので―1の月を入力

function recalc() {
    const counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = String(counter[2]).padStart(2, '0'); //padStartメソッドはある文字列を揃える文字列に揃える
    document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0'); //数値型ではpadStartが使えないのでStringに変換
    refresh();
}

function refresh() {
    setTimeout(recalc, 1000); //setTimeoutメソッドは待ち時間(今回で言えば1000ミリ秒)後にファンクションを一度だけ実行する
}

recalc();



//予算管理ページパスワードアクセス
function goLoginPage() {
    passwd = document.formno1.passwd.value;
    if (passwd === "money") {
        location.href="cost.html";
    } else {
        alert('パスが違うよ～');
    
    }
 }