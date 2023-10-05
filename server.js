const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 버스 기사 페이지 라우트
const path = require('path');

// "public" 디렉토리에서 정적 파일 서빙

// 정적 파일 경로 설정

app.use(express.static(path.join(__dirname, 'public')));




// ...

app.get('/driver', (req, res) => {
    res.sendFile(path.join(__dirname, 'busDriverPageTest.html'));
});

app.get('/busStation', (req, res) => {
    res.sendFile(path.join(__dirname, 'busStation.html'));
});
app.get('/n_Location', (req, res) => {
    res.sendFile(path.join(__dirname, 'n_Location.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});


// WebSocket 연결 이벤트 처리
io.on('connection', (socket) => {
    console.log('버스 기사 페이지에 새로운 클라이언트가 연결되었습니다.');

    // 예약 정보 전송
    socket.on('reservation', (data) => {
        console.log('받은 예약 정보:', data);

        // 예약 정보를 다른 클라이언트에게 전송
        io.emit('reservation', data);
    });

    // 예약 승인 처리
    socket.on('approveReservation', (resultData) => {
        console.log('예약 승인:', resultData);

        // 승인된 예약 정보를 해당 클라이언트에게 전송
        io.emit('approveReservation', resultData);
    });

    // 연결 해제 이벤트 처리
    socket.on('disconnect', () => {
        console.log('버스 기사 페이지의 클라이언트가 연결을 해제했습니다.');
    });
});



// 서버 시작
const port = 3000;
server.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 시작되었습니다.`);
});
