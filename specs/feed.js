describe('Feeds', function(){
  var Feed = new require('../models/feed')();
  beforeEach(function(done){
    Feed.sync({force:true}).success(function(){
      done();
    });
  });
  it('should create feed', function(done){
      var feed = Feed.create({
        name: 'test'
      }).success(function(task){
        done();
      })
  });
  it('should delete feed', function(){

  });
  it('should generate feed items from a feed', function(){

  });

})