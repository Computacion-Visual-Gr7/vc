const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();


        page = await browser.newPage();
        await page.goto('https://wallpaperscraft.com/catalog/nature', {waitUntil: 'load'});

    const newPage = await page.evaluate(() => {


        var imgs = document.getElementsByTagName("img");
        var imgSrcs = [];
        var wallpapers_image = "https://images.wallpaperscraft.com/image/single/"
        for (var i = 0; i < imgs.length; i++) {
            const imgTxt = imgs[i].src 
            if(imgTxt.includes(wallpapers_image)){
                imgSrcs.push(imgTxt)
            };
        }
        return imgSrcs;
        });

        var images = newPage
        var fs = require('fs'),
        request = require('request');

        var download = function(uri, filename, callback){
            request.head(uri, function(err, res, body){
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };
        
        for (var i = 0; i < images.length; i++) {
            var string = './shaders/imagenesmosaico_2/' + i + ".jpg"
            download(images[i], string, function(){
                console.log('done');
            })
        }
  })();