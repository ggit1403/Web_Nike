function showImg(thumbnail) {
    var mainPicture = document.querySelector('.main-picture img');
    mainPicture.src = thumbnail.src;
}

// JavaScript (store.js)
function addBorderOnHover(image) {
    image.addEventListener('mouseover', function() {
        image.style.border = '2px solid black'; // Thêm viền màu đen khi di chuột vào ảnh
    });

    image.addEventListener('mouseout', function() {
        image.style.border = 'none'; // Loại bỏ viền khi di chuột ra khỏi ảnh
    });
}

// Lấy tất cả các ảnh con và thêm hiệu ứng cho từng ảnh
var thumbnailImages = document.querySelector('.blacka img');

thumbnailImages.forEach(function(image) {
    addBorderOnHover(image);
});
