
// 위치 정보 및 카카오 맵 초기화
function initializeMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        alert("Geolocation is not supported by this browser.");
    }

}

// 위치 정보 획득 후 카카오 맵 실행
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 2
    };

    var map = new kakao.maps.Map(container, options);

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
// function loadContent() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "../html/busStation.html", true); // "external.html"을 외부 HTML 파일의 경로로 대체하세요.
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // 내용을 지정한 div에 삽입합니다.
//             document.getElementById("location").innerHTML = xhr.responseText;
//         }
//     };
//     xhr.send();
// }

// loadContent 함수를 호출하여 내용을 가져와 삽입합니다.


function deleteMap() {
    if (map) {
        map.removeAllListeners();
        delete map;
        map = null;
    }
}




// 페이지 로드 시 카카오 맵 초기화 실행
window.onload = initializeMap;


