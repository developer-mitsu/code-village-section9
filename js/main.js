const slideItem = document.getElementsByClassName('pig')

function slideStart() {
    let n = 0;
    // let activeNum = 0;  変数名に意味を持たせて下さい。
    setInterval(function() {
        n++;
        // ここで加算してしまうと、インデックスが0の画像について処理が行われません。
        // setInterval外でslideItem[0]に関するappearの付与は済ませておくといいです。

        // 以下の条件式は、どのような意図を持ったロジックでしょうか。
        // コメントにて解説して下さい。
        if (n < slideItem.length) {
            if (n < slideItem.length - 1) {
                slideItem[n].classList.remove('appear');
                slideItem[n + 1].classList.add('appear');
            } else {
                slideItem[0].classList.add('appear');
                slideItem[slideItem.length - 1].classList.remove('appear');
            }
        } else {
            n = -1 // セミコロン付与はどちらでもいいですが、統一して下さい。
        }
    }, 2000);
}
slideStart()