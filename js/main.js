const slideItem = document.getElementsByClassName('pig')

function slideStart() {
    let n = 0;
    setInterval(function() {
        n++;
        if (n < slideItem.length) {
            if (n < slideItem.length - 1) {
                slideItem[n].classList.remove('appear');
                slideItem[n + 1].classList.add('appear');
            } else {
                slideItem[0].classList.add('appear');
                slideItem[slideItem.length - 1].classList.remove('appear');
            }
        } else {
            n = -1
        }
    }, 2000);
}
slideStart()