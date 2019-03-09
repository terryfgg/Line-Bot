bot.on('message', function(event) {
    console.log(typeof(event.message.text));
    if (event.message.text ==='1'){
        event.reply('Hello');
    }
    else{
        event.reply('你好');
    }
});