/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

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
    // 카카오맵 초기화 및 표시
    var mapContainer = document.getElementById('map');
    mapContainer.style.display = 'block'; // 카카오맵 보이기

    // 카카오맵 초기화
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 초기 중심 위치
        level: 3 // 초기 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

    // 현재 위치 가져오기 (Geolocation API 사용)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // 현재 위치 좌표
            var currentPosition = new kakao.maps.LatLng(lat, lng);

            // 마커 생성 및 추가
            var marker = new kakao.maps.Marker({
                position: currentPosition,
                map: map
            });

            // 지도 중심 이동
            map.setCenter(currentPosition);
        });
    }
});

// 모달 닫히면 실행할 함수
$('#portfolioModal1').on('hide.bs.modal', function () {
    // 카카오맵 정리 로직
    var mapContainer = document.getElementById('map');
    mapContainer.style.display = 'none'; // 카카오맵 숨기기

    // 카카오맵 객체 해제
    map = null;
});
