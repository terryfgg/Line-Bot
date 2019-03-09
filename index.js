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
        "altText": "這是一個輪播樣板",
        "template": {
            "type": "carousel",
            "columns": [
                {
                  "thumbnailImageUrl": "https://terrylin-app.herokuapp.com/imgs/p01.jpg",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "星夜",
                  "text": "荷蘭後印象派畫家文森特·梵谷於1890年在法國聖雷米的一家精神病院裏創作的一幅著名油畫",
                  "defaultAction": {
                      "type": "uri",
                      "label": "詳細資料",
                      "uri": "https://zh.wikipedia.org/wiki/星夜"
                  },
                  "actions": [
                      {
                          "type": "postback",
                          "label": "買了",
                          "data": "action=buy&itemid=111"
                      },
                      {
                          "type": "postback",
                          "label": "加入購物車",
                          "data": "action=add&itemid=111"
                      },
                      {
                          "type": "uri",
                          "label": "詳細資料",
                          "uri": "https://zh.wikipedia.org/wiki/星夜"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://terrylin-app.herokuapp.com/imgs/02.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "向日葵",
                  "text": "荷蘭畫家梵谷繪畫的一系列靜物油畫。當中有2幅繪有15朵向日葵，與1幅繪有十四朵向日葵，另有兩幅繪有12朵向日葵。",
                  "defaultAction": {
                      "type": "uri",
                      "label": "詳細資料",
                      "uri": "https://zh.wikipedia.org/wiki/向日葵_(梵高)"
                  },
                  "actions": [
                    {
                        "type": "postback",
                        "label": "買了",
                        "data": "action=buy&itemid=222"
                    },
                    {
                        "type": "postback",
                        "label": "加入購物車",
                        "data": "action=add&itemid=222"
                    },
                      {
                          "type": "uri",
                          "label": "詳細資料",
                          "uri": "https://zh.wikipedia.org/wiki/向日葵_(梵高)"
                      }
                  ]
                }
                {
                    "thumbnailImageUrl": "https://terrylin-app.herokuapp.com/imgs/03.jpg",
                    "imageBackgroundColor": "#000000",
                    "title": "向日葵",
                    "text": "荷蘭畫家梵谷繪畫的一系列靜物油畫。當中有2幅繪有15朵向日葵，與1幅繪有十四朵向日葵，另有兩幅繪有12朵向日葵。",
                    "defaultAction": {
                        "type": "uri",
                        "label": "詳細資料",
                        "uri": "https://zh.wikipedia.org/wiki/向日葵_(梵高)"
                    },
                    "actions": [
                      {
                          "type": "postback",
                          "label": "買了",
                          "data": "action=buy&itemid=222"
                      },
                      {
                          "type": "postback",
                          "label": "加入購物車",
                          "data": "action=add&itemid=222"
                      },
                        {
                            "type": "uri",
                            "label": "詳細資料",
                            "uri": "https://zh.wikipedia.org/wiki/向日葵_(梵高)"
                        }
                    ]
                  }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
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