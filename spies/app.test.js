const expect = require('expect');

describe('App', ()=>{
   it('should call the spy correctly', ()=>{
      var apy = expect.createSpy();
      spy('KD',33);
      expect(spy).toHaveBeenCalledWith('KD',33);
   });
});