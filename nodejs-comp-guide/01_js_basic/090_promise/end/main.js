// POINT 非同期処理（Promise）
let a = 0;

new Promise((resolve, reject) => { //rejectは何らかの不具合を起こす処理として使用する
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);// 2000ミリ秒後にコールバック関数を返す
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b);
}).catch((c) => {
    console.log('catchが実行', c)
})

