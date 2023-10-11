const BannerGenerator = require('./src/class/bannerGenerator');

(async () => { 
    try { const g = new BannerGenerator(); await g.start(); } 
    catch (error) { console.error("An error occurred:", error);}
})();
