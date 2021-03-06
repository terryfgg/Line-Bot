//----------------------------------------
// 載入必要的模組
//----------------------------------------
var linebot = require('linebot');
var express = require('express');

//增加引用函式
const student = require('./utility/student.js');


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
bot.on('postback', function(event) { 
    var data = event.postback.data;
    var userId = event.source.userId;

    event.source.profile().then(function (profile) {
        userName = profile.displayName;
		
        return event.reply([
            {
                "type": "text",
                "text": data
            },
            {
                "type": "text",
                "text": userId
            },
            {
                "type": "text",
                "text": userName
            }
        ]);		
    });
});
//========================================
//--------------------------------
// 機器人接受訊息的處理
//--------------------------------
bot.on('message', function(event) {    
    event.source.profile().then(
        function (profile) {	
            //取得使用者資料
            var userName = profile.displayName;
            var userId = profile.userId;
	    
	    //使用者傳來的學號
            var no = event.message.text;		
		  
            student.fetchOneStudent(no).then(d => {
                if (d.data.length > 0){
                    event.reply(d.data[0].course);  //回覆學生姓名
                }else{
                    event.reply('找不到資料');        //回覆找不到
                }  
            })  
        }
    );
});


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