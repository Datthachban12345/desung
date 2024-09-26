var CART = {
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
}
};
var swiper = {
    banner:function(){
        var swiperBanner = new Swiper(".swiper-banner", {});
    }
}
CART.header();
swiper.banner();