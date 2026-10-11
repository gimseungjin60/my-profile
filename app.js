
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        name: '김승진',
        studentId: '202245034',
        major: '컴퓨터시스템공학과',
        hobby: '웹 개발, 음악 감상',
        introduction: '안녕하세요. 저를 소개하는 홈페이지입니다!!!!'
    });
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
