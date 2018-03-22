const expect = require('expect');
const utils = require('./utils');

// Grouping of Test Cases to make reading easier.
describe('Utils',()=>{

    describe('Add *', ()=>{
        // Behaviour driven development
        it('should add two numbers',() =>{
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
        });

        // Testing an Asynchronous Method
        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(4,3,(sum) =>{
                expect(sum).toBe(7).toBeAn('number')
                done();
            })
        });
    });

    it('should square a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeAn('number');
    });
});


// Test should verify first and last names are set
it('should set firstName and lastName', () =>{
    var user = {location : 'dallas' , age:25};
    var res = utils.setName(user, 'KD S');
    expect(res).toInclude({
        firstName: 'KD',
        lastName: 'S'
    });
});

/*it('should expect some values', () => {
    //expect(12).toNotBe(12);
    //expect({name : 'KD'}).toEqual({name : 'KD'});
    //Check if the include is present in array
    //expect([2,3,4]).toInclude(2);
    expect({
        name: 'KD',
        age: 33,
        location : 'Dallas'
    }).toInclude({
        age : 33
    })
});*/