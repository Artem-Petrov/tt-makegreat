const APP = {
    domLoaded: function() {
        let _this = this;

        $(document).ready(function(){
            //hide preload
            setTimeout(function(){$('#preloader').fadeOut()},300);

            _this.tabs();
            _this.scroll();
            _this.anchorScroll();
            _this.waypointScrolled();
        });

    },

    tabs: function () {
        let $controls = $('.works-tabs__controls-item');
        let $content = $('.works-tabs__content-item');

        $controls.click(function (e) {
            e.preventDefault();
            let tab = $(this).attr('href');

            $controls.removeClass('is-active');
            $(this).addClass("is-active");

            $content.removeClass('is-active');
            $(tab).addClass('is-active');
        });

    },

    scroll: function () {
        let $header = $('header');

        function getScrollTop() {
            if( $(window).scrollTop() > 0){
                $header.addClass('is-scrolled');
            }else{
                $header.removeClass('is-scrolled');
            }
        }

        getScrollTop();

        $(window).scroll(function(){
            getScrollTop();
        });
    },

    anchorScroll: function () {
        let $anchor = $('.js-anchor');

        $anchor.click(function (e) {
           e.preventDefault();
           let target = $(this).attr('href');
           let $anchorTarget = $(target);
           let offset= $anchorTarget.offset();

            $('body, html').stop().animate({
                scrollTop: offset.top - 100
            }, 'slow');
        });
    },

    waypointScrolled: function () {

        let worksDiv = new Waypoint({
            element: $('.steps-container'),
            handler: function() {
                $(this.element).addClass('active');
            },

            offset: '85%'
        });

        let intergationDiv = new Waypoint({
            element: $('.integr-container'),
            handler: function() {
                $(this.element).addClass('active');
            },

            offset: '50%'
        })


    }
}

export default APP;
