var sut           = require('../../../lib/util/template'),
    exampleFolder = process.cwd() + '/spec/testdata/';

describe('isValidProjectTemplate', function() {
  describe('when given a valid project folder', function() {
    it('should return true', function() {
      sut.isValidProjectTemplate(exampleFolder + '/projects/python/fabric').should.be.true;
    });
  });
  
  describe('when given an invalid project folder', function() {
    it('should return false for container folders', function() {
      sut.isValidProjectTemplate(exampleFolder + '/projects/python').should.be.false;
    });
    
    it('should return false for invalid folders', function() {
      sut.isValidProjectTemplate(exampleFolder + '/projects/invalid').should.be.false;
      sut.isValidProjectTemplate(exampleFolder + '/projects').should.be.false;
    });
  });
});

describe('readDescription()', function() {
  it('should output the description from the config file', function() {
    sut.readDescription(exampleFolder + '/projects/python/fabric').should.equal('Create a Fabric project.');
  });
});

describe('readConfigFile()', function() {
  it('should read the config file and return the content as an object', function() {
    sut.readConfigFile(exampleFolder + '/projects/python/fabric').should.be.ok;
  });
});