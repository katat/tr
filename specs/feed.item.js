describe('feed item', function(){
  var FeedItem = require('../models/feed.item')();
  var FeedParser = require('feedparser');
  var should = require('should');
  beforeEach(function(done){
    FeedItem.sync({force:true}).success(function(){
      done();
    });
  })
  it('should fetch rss, parse', function(done){
    var fs = require('fs');
    fs.createReadStream(__dirname+'/feeds/rss2sample.xml')
      .on('error', function(error){
        console.log(errror);
      })
      .pipe(new FeedParser())
      .on('error', function(error){
        console.error(error);
      })
      .on('meta', function(meta){
        console.log('===== %s =====', meta.title);
      })
      .on('readable', function(){
        var stream = this, item;
        while(item = stream.read()){
          item.should.be.a('object');
        }
      })
      .on('end', function(){
        done();
      })
  });
  it('should parse the rss and save the contents to the feed item models', function(done){
    var fs = require('fs');
    fs.createReadStream(__dirname+'/feeds/rss2sample.xml')
      .on('error', function(error){
        console.log(errror);
      })
      .pipe(new FeedParser())
      .on('error', function(error){
        console.error(error);
      })
      .on('meta', function(meta){
        console.log('===== %s =====', meta.title);
      })
      .on('readable', function(){
        var stream = this, item;
        while(item = stream.read()){
          var feedItem = FeedItem.create({
            guid : item.guid,
            title : item.title,
            description : item.description,
            url : item.link,
            // categories : item.categories
          });
        }
      })
      .on('end', function(){
        FeedItem.findAndCountAll().success(function(result){
          result.count.should.equal(4);
          done();
        })
      });
  })
})