var gallery = document.querySelector('.gallery');
var imageList = document.querySelectorAll('.image-list');
var title = document.querySelectorAll('.title');
imageList.forEach(function expand(a, i) {
  a.addEventListener('click',function listner() {
    var activeImage = document.querySelector('.active-image');
    var activeTitle = document.querySelector('.active-title');
    activeTitle.classList.remove('active-title');
    activeImage.classList.remove('active-image');
    a.classList.add('active-image');
    title[i].classList.add('active-title');
  });
})























