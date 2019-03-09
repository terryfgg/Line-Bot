//----------------------------------------
// 載入必要的模組
//----------------------------------------
var linebot = require('linebot');
var express = require('express');


//----------------------------------------
// 填入自己在Line Developers的channel值
//----------------------------------------
var bot = linebot({
    channelId: '1553334458',
    channelSecret: '0b6073a9d71e8c81a590d3862162d145',
    channelAccessToken: 'J9Cquww79InDF79ACiKq/Y4vSKMUiT7KB227YKflevIW6IJDukJEFiZ8H5zaNIfgngsA279AzWlLJ5RTMk4am+/uAMYJnRvESyomM+8Qq2dyj/ZLMKDkaULW5ZHhzoS/qJMzq7heuyEkGgTJqhpqnQdB04t89/1O/w1cDnyilFU='
});


//========================================
// 機器人接受訊息的處理
//========================================
bot.on('message', function(event) {
    event.reply({
        "type": "template",
        "altText": "this is a image carousel template",
        "template": {
            "type": "image_carousel",
            "columns": [
                {
                    "imageUrl": "https://terrylin-app.herokuapp.com/imgs/p01.jpg",
                    "action": {
                        "type": "postback",
                        "label": "星夜",
                        "data": "1"
                    }
                },
                {
                    "imageUrl": "https://terrylin-app.herokuapp.com/imgs/02.jpg",
                    "action": {
                        "type": "postback",
                        "label": "向日葵",
                        "data": "2"
                    }
                },
                {
                    "imageUrl": "https://tomlin-app-1.herokuapp.com/imgs/03.jpg",
                    "action": {
                        "type": "postback",
                        "label": "夜晚的露天咖啡座",
                        "data": "3"
                    }
                }
            ]
        }
    });
});
//========================================


// 建立一個網站應用程式app
// 如果連接根目錄, 交給機器人處理
//----------------------------------------
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


//----------------------------------------
// 可直接取用檔案的資料夾
//----------------------------------------
app.use(express.static('public'));


//----------------------------------------
// 監聽3000埠號, 
// 或是監聽Heroku設定的埠號
//----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("正在監聽埠號:", port);
});