
var CART = {
    paddingBanner: function(){
      const paddingHeader = document.querySelector('header');
      // lần đầu chỉnh bởi vì lúc này chưa có resize
      const nextSiblingElement = paddingHeader.nextElementSibling;
      var height = paddingHeader.offsetHeight;
      nextSiblingElement.style.paddingTop = height.toString() + 'px';

      window.addEventListener('resize', function() {
        // Kiểm tra và hiển thị kết quả
          var height = paddingHeader.offsetHeight;
          nextSiblingElement.style.paddingTop = height.toString() + 'px';
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
  inputNumber: function(){
    const inputProduct = document.querySelector('.input-product input');
    const inputMinus = document.querySelector('.input-product-minus');
    const inputPlus = document.querySelector('.input-product-plus');
    inputProduct.addEventListener("input",function(e){
      this.value = this.value.replace(/^(0+)/, '');
      this.value = this.value.replace(/[^0-9]/g, '');
      if(/\d/.test(this.value)){
        inputProduct.dataset.target = this.value;
      }
      if(inputProduct.value > 1){
        inputMinus.style.pointerEvents = 'all';
      }

  })
  inputProduct.addEventListener('blur', () => {
    inputProduct.value = inputProduct.dataset.target;
});
  inputMinus.addEventListener("click",function(e){
    if(inputProduct.value <= 2){
      inputProduct.value = (parseInt(inputProduct.value) - 1).toString();
      inputMinus.style.pointerEvents = 'none';
    }else{
      inputProduct.value = (parseInt(inputProduct.value) - 1).toString();
    }
    
  })
  
  inputPlus.addEventListener("click",function(e){
    inputProduct.value = (parseInt(inputProduct.value) + 1).toString();
    if(inputProduct.value >1){
      inputMinus.style.pointerEvents = 'all';
    }
  })
},
  rattingStar: function(){
    const star = document.querySelector('.star-number');
    const rating = document.querySelectorAll('.rating');
    var starNumber = star.getAttribute('number');
    for(i=0;i < parseInt(starNumber);i++){
      rating[i].classList.add('active');
    }
    rating.forEach(function(nameImg,X){
      // từ trên xuống dưới từ trái qua phải
      nameImg.addEventListener("mouseenter",function(e){
        rating.forEach(bar => bar.classList.remove('active'));
        for(i=0;i <= X;i++){
          rating[i].classList.add('active');
        }
      })
    })
    star.addEventListener("mouseleave",function(e){
      var starNumber = star.getAttribute('number');
      rating.forEach(bar => bar.classList.remove('active'));
      for(i=0;i < parseInt(starNumber);i++){
        rating[i].classList.add('active');
      }
    })
    rating.forEach(function(nameImg,X){
      // từ trên xuống dưới từ trái qua phải
      nameImg.addEventListener("click",function(e){
        for(i=0;i <= X;i++){
          rating[i].classList.add('active');
        }
        star.setAttribute('number', X + 1);
        alert("rating thành công");
      })
    })
  }
}

var swiper = {
    banner:function(){
      var swiperBanner = new Swiper(".swiper-banner", {});
    },
    detail:function(){
      const slideThumb = document.querySelectorAll('.swiper-thumb .swiper-slide')
      var swiperThumb = new Swiper(".swiper-thumb", {
        spaceBetween: 8,
        slidesPerView: 3,
      });

      var swiperDetail = new Swiper(".swiper-detail", {
        navigation: {
          nextEl: ".swiper-detail-next",
          prevEl: ".swiper-detail-prev",
        },
        on: {
          slideChange: function () {
            swiperThumb.slideTo(this.activeIndex);
            slideThumb.forEach(bar => bar.classList.remove('active'));
            slideThumb[this.activeIndex].classList.add('active');
          }
        }
      });
      slideThumb.forEach(function(nameImg,X){
        // từ trên xuống dưới từ trái qua phải
        nameImg.addEventListener("click",function(e){
          swiperThumb.slideTo(X);
          slideThumb.forEach(bar => bar.classList.remove('active'));
          slideThumb[X].classList.add('active');
          swiperDetail.slideTo(X);
        })
      })
    },
}
CART.header();
swiper.banner();
swiper.detail();
CART.headerTop();
CART.keyframe();
CART.paddingBanner();
CART.inputNumber();
CART.rattingStar();