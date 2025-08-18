$(document).ready(function() {
    var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)noMoreAsking\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var iOS = DVL.device.os('ios');
    var android = DVL.device.os('android');
    var pathArray = window.location.pathname.split('/');
    var dir;

    if (pathArray[1] == 'personal.html') {
        dir = "homepage";   
    } else {
        dir = pathArray[1];
    }

    if(myCookie != 'yes') {
        if (android == true) {
            $('.smart-bnr-android').show();
            $('.smart-bnr-wpr').slideDown('300');

            dataLayer.push({
            'event': 'impression',
            'promoLib': {
                  'smartBannerEN-android': {
                    'id': '00000',
                    'name': 'rbc_'+dir+'_smartbanner_top',
                    'creative': 'https://www.rbcroyalbank.com/_assets-custom/includes/smart-banners/rbc-app-icon.svg',
                    'position': 'rbc_'+dir+'_smartbanner_top',
                    'adType': 'other'
                  },
                }
            });
        }
        if (iOS == true) {
            $('.smart-bnr-ios').show();
            $('.smart-bnr-wpr').slideDown('300');

            dataLayer.push({
            'event': 'impression',
            'promoLib': {
                  'smartBannerEN-ios': {
                    'id': '00000',
                    'name': 'rbc_'+dir+'_smartbanner_top',
                    'creative': 'https://www.rbcroyalbank.com/_assets-custom/includes/smart-banners/rbc-app-icon.svg',
                    'position': 'rbc_'+dir+'_smartbanner_top',
                    'adType': 'other'
                  },
                }
            });
        }
    }

    $('.smart-bnr-close').on('click', function(event) {
        $('.smart-bnr-wpr').slideUp('300');    
    });

    $('.smart-bnr-close, .smart-bnr-btn').on('click', function(event) {
        noMoreAsking();
    });

});
//this creates a cookie so that users isn't always asked
function noMoreAsking() {
    document.cookie="noMoreAsking=yes;expires=Fri, 31 Dec 9999 23:59:59 GMT;";
}