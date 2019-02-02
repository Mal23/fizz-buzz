const test = QUnit.test;


function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        return 'fizzBuzz';
    }
    else if(num % 3 === 0) {
        return 'fizz';
    }
    else if(num % 5 === 0) {
        return 'bizz';
    }
}


test('numbers divisable by 3 replaced with fizz', function(assert){
    const result = fizzBuzz(3);
    assert.equal(result, 'fizz');
});

test('numbers divisable by 5 replaced with bizz', function(assert){
    const result = fizzBuzz(5);
    assert.equal(result, 'bizz');
});

test('numbers divisable by 3 and 5 replaced with fizzBuzz', function(assert){
    const result = fizzBuzz(15);
    assert.equal(result, 'fizzBuzz');
});