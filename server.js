const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// 클라이언트 입장에서 api경로의 hello로 접속하면 Hello Express! 메시지를 출력하도록 한다.
app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
});

// app을 동작시키기 위해서 5000번 포트로 동작시키고, 
// 서버가 동작 중이면 Listening on port [포트번호] 메시지가 출력되도록 한다.
app.listen(port, () => console.log(`Listening on port ${port}`));