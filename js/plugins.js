/*global $*/

$(document).ready(function () {
    "use strict";
    
    // icons 
    var menuIcon = $('.menu-icon'),
        icon = $('.icon');
    
    icon.each(function () {
        // set index
        $(this).attr('data-index', $(this).index());
        // set target 
        $(this).attr('data-target', '#' + $(this).attr('id') + '-sec').addClass('nav-icon');
    });
    
    // on click on icon active it
    menuIcon.on('click', function () {
        $(this).addClass('active');
        
        icon = $(this).parent().find('.icon');
        icon.each(function () {

            // animate sub icons
            $(this).css({
                top : $(this).data('index') * 6 + $(this).data('index') + 'rem',
                opacity: 1,
                visibility: 'visible'
            });
        });
    });
    
    // on click outside the active icon deactive it
    $(document).on('click', function (e) {
        var clickOver = $(e.target);
        if (!clickOver.closest('.social').length && !clickOver.closest('.menu').length && menuIcon.hasClass('active')) {
            menuIcon.removeClass('active');
            $('.icon').each(function () {
                var $this = $(this);
                // deactive sub icons
                $this.css({top : 0});
                setTimeout(function () {
                    $this.css({opacity: 0, visibility: 'hidden'});
                }, 250);
            });
        }
    });
    
    // nav icons 
    $('.nav-icon').each(function () {
        $(this).on('click', function () {
            $($(this).data('target')).addClass('active').siblings().removeClass('active');
            window.console.log($(this).data('target') + '-content');
            $($(this).data('target') + '-content').addClass('active').siblings().removeClass('active');
        });
    });
    
});