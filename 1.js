// Xử lí click vào số khách
var people = document.querySelector('.header__search-people');
var active = document.querySelector('.header__search-child');
people.onclick = function() {
    if (active.style.display == 'block') {
        active.style.display = 'none';
    } else {
        active.style.display = 'block';
    }
}

// xử lí chuyển ảnh
var index = 1;
changeImg = function() {
    var img = ["file1.png", "file2.png"];
    var changeImg = document.querySelector('.changeImg__img');

    changeImg.src = img[index];
    index++;
    if (index == img.length) {
        index = 0;
    }

}

setInterval(changeImg, 2000)


