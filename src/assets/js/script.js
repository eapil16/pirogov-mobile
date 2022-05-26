'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        $('.fixed-menu').slideDown(300); 
        $('body').addClass('hidd'); 
    });
    $('.fixed-menu__close').click(function (e) {
        e.preventDefault();
        $('.fixed-menu').slideUp(300); 
        $('body').removeClass('hidd'); 
    });

    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
    });
   
    $("#phone").mask("+9 (999) 999 - 99 - 99");

    const clinicSlider = new Swiper(".clinic-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    const specialistsSlider = new Swiper(".specialists-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    const blogSlider = new Swiper(".blog-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    const licensesSlider = new Swiper(".licenses-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

    const specialistsSliderProgram = new Swiper(".specialists-slider-program", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    const clinicContentSlider = new Swiper(".clinic-content-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        speed: 800,
    });

    const hospitalRightSlider = new Swiper(".hospital-right-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
    });
    
    const hospitalLeftSlider = new Swiper(".hospital-left-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
    });

    document.querySelector('body').addEventListener('click', e =>{
        if ( document.querySelector('.select-block-link')) {
            // e.preventDefault();
            const collectionLinks = document.querySelectorAll('.select-block-block__link');
            if (e.target.closest('.select-block-link')) {
                if(document.querySelector('.block-scroll')) {
                    const scroollInModal= new PerfectScrollbar('.block-scroll', {
                      wheelSpeed: 1.75,
                      wheelPropagation: false,
                    });
                }
                e.preventDefault();
                $('body').addClass('body-hidden');
                e.target.classList.toggle('select-block-link-active');
                document.getElementById('select-block-block').classList.toggle('select-block-block-show');
            } 
            if (e.target.closest('.select-block-block__link')) {
                e.preventDefault();
                collectionLinks.forEach(element => element.classList.remove('select-block-block__link-active'));
                document.getElementById('select-block-block').classList.remove('select-block-block-show');
                e.target.classList.add('select-block-block__link-active');
                document.querySelector('.select-block-link').classList.remove('select-block-link-active')
                document.querySelector('.select-block-link').textContent = e.target.textContent;
                $('body').removeClass('body-hidden');
            }     
            if (!e.target.closest('.select-block') || e.target.closest('.price-menu__close')) {
                document.getElementById('select-block-block').classList.remove('select-block-block-show');
                document.querySelector('.select-block-link').classList.remove('select-block-link-active')
                $('body').removeClass('body-hidden');
            }       
        }         

    });

});