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

     console.log(newPage)

  })();