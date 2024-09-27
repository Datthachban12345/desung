
var CART = {
    paddingBanner: function(){
      const paddingHeader = document.querySelector('.close-header');
      const banner = document.querySelector('.banner');
      
      window.addEventListener('resize', function() {
        var height = paddingHeader.offsetHeight;
        banner.style.paddingTop = height.toString() + 'px';
      });
    },
    header: function(){
        let navToggle = document.querySelector('.header-menu-bar');
        let headerNavbar = document.querySelector('.menu');
        var headerOver = document.querySelector('.over-lay');
        function toggleHamburger(e) {
          headerNavbar.classList.toggle("active");
          headerOver.classList.toggle("active");
        }
        function closeHeader(e) {
          headerNavbar.classList.toggle("active");
          headerOver.classList.toggle("active");
        }
        navToggle.addEventListener('click', toggleHamburger);
        headerOver.addEventListener('click', closeHeader);
        // dưới 1024
        const btnDropMenu = document.querySelectorAll(".btn-dropdown-menu");
        const MenuUl = document.querySelectorAll(".menu > li > ul");
        if( window.innerWidth < 1024){
            btnDropMenu.forEach(function(nameImg,X){
              // từ trên xuống dưới từ trái qua phải
              nameImg.addEventListener("click",function(e){
                // Kiểm tra nếu phần tử liền kề là ul và tồn tại
                MenuUl[X].classList.toggle("active");
                nameImg.classList.toggle("active");
            })
          })
    }
},
  headerTop:function(){
    btt = document.querySelector(".close-header");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            console.log("hello");
            btt.classList.add('show');
        } else {
          btt.classList.remove('show');
        }
      }
  },
  keyframe: function(){
    document.addEventListener("DOMContentLoaded", function() {
      // Lấy tất cả các phần tử cần được quan sát
      const animatedBoxUp = document.querySelectorAll('.FadeInUp');
      const animatedBoxRi = document.querySelectorAll('.FadeInRight');
      const animatedBoxLe = document.querySelectorAll('.FadeInLeft');
      // Khởi tạo Intersection Observer
      const observer = new IntersectionObserver((entries, observer) => { // biến khai báo viewpoint có xuất hiện khung hình hay không 
        entries.forEach(entry => {
          // Kiểm tra nếu phần tử đang nằm trong viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('wow');
            observer.unobserve(entry.target);    // Ngừng quan sát phần tử này sau khi animation được kích hoạt
          }
        });
      });
      // Bắt đầu quan sát mỗi phần tử
      animatedBoxUp.forEach(box => {
        observer.observe(box);
      });
      animatedBoxLe.forEach(box => {
        observer.observe(box);
      });
      animatedBoxRi.forEach(box => {
        observer.observe(box);  //xác định viewpoint
      });
    });
  },
};
var swiper = {
    banner:function(){
        var swiperBanner = new Swiper(".swiper-banner", {});
    }
}
CART.header();
swiper.banner();
CART.headerTop();
CART.keyframe();
CART.paddingBanner();