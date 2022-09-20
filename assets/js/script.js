var gallery = document.querySelector('.gallery');
var imageList = document.querySelectorAll('.image-list');

imageList.forEach(function expand(a) {
  a.addEventListener('click',function listner() {
    var activeImage = document.querySelector('.active-image');
    activeImage.classList.remove('active-image');
    a.classList.add('active-image');
    a.children[0].children[1].style.display = "block";
  });
})























