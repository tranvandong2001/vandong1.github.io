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

// thông báo đầu trang

function thongbao() {
    var cm;


    // Lấy thông tin 
    cm = prompt('Bạn bao nhiêm cm ? ');
    if (cm >= 20) {
        alert('Wow!');
        prompt('Bạn để số điện thoại ở đây nhé, anh yêu bạn!')
    } else {
        alert('Của bạn ngắn quá haizz! Thật là thất vọng quá đi')
    }

}

thongbao();