var request = require('superagent');
var expect = require('expect.js');

var expected, current;


    describe('logs new query from prospective clients and returns success or failure', function(){
 
it('should return response status of 200 for posts requests to api route', function(done) {

   
    request.post('http://localhost:3000/api/queryLog').end(function(err, res) {
     
      expect(res).to.exist;

      expect(res.status).to.equal(200);
      
      done();
    
    });
  
  });

 it('should return empty entry ID for post to query log database', function(done) {

   
    request.get('http://localhost:3000/api/queryLog').end(function(err, res) {
     
      expect(res).to.exist;

      expect(res.status).to.equal(200);
      
      done();
    
    });
  
  });

it('return response to client ', function(done) {

   
    request.get('http://localhost:3000/api/queryLog').end(function(err, res) {
     
      expect(res).to.exist;

      expect(res.status).to.equal(200);
      
      done();
    
    });
  
  });




  });