/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

// 페이지 로드 시 카카오 맵 초기화 실행
// window.onload = initializeMap;

window.addEventListener('DOMContentLoaded', event => {



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$('#portfolioModal1').on('show.bs.modal', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        alert("Geolocation is not supported by this browser.");
    }


});
var map;

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var container;

    document.addEventListener("DOMContentLoaded", function () {
        // DOMContentLoaded 이벤트 핸들러 내에서 container 변수를 초기화
        container = document.getElementById('map');
        // 이제 'container' 요소를 조작하거나 사용할 수 있습니다.
    });
    
    var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 2
    };

    map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(latitude, longitude);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">현재 나의 위치 </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
    });

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);




}


// 모달 닫히면 실행할 함수
$('#portfolioModal1').on('hide.bs.modal', function () {
    // 카카오맵 정리 로직

    var mapContainer;

    document.addEventListener("DOMContentLoaded", function () {
        // DOMContentLoaded 이벤트 핸들러 내에서 container 변수를 초기화
        mapContainer = document.getElementById('map');
        // 이제 'container' 요소를 조작하거나 사용할 수 있습니다.
    });

    mapContainer.style.display = 'none'; // 카카오맵 숨기기

    // 카카오맵 객체 해제
    map = null;
});
