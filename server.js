var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function getHtml(url){
  request(url,function(error,response,body){
    if (error) {
      console.log(error);
    }else{
      // console.log(body);
      // fs.writeFileSync('test.txt',body);
      var $=cheerio.load(body,{decodeEntities:false})
      var content=$('#detailContainer').html();
      var nextArcLink=$('#nextArcLink > a').attr('href');
      var realnextArcLink=site+nextArcLink;
      console.log(content,nextArcLink);
      fs.appendFileSync('yikedou.txt',content)
      getHtml(realnextArcLink);
    }
  })
}
var site ='http://www.yikedou.com';
var url='http://www.yikedou.com/wenzi/201510/48795.html';
getHtml(url);
