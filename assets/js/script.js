// Image expand function
var gallery = document.querySelector('.gallery');
var imageList = document.querySelectorAll('.image-list');
var title = document.querySelectorAll('.title');
imageList.forEach(function expand(li, titleIndex) {
  li.addEventListener('click',function listner() {
    var activeImage = document.querySelector('.active-image');
    var activeTitle = document.querySelector('.active-title');
    activeTitle.classList.remove('active-title');
    activeImage.classList.remove('active-image');
    li.classList.add('active-image');
    title[titleIndex].classList.add('active-title');
  });
})























