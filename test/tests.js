const test = QUnit.test;

let num = 3;

function fizzBuzz(num) {
    if (num % 3 === 0) {
        return 'fizz';
    }
    else if(num % 5 ==== 0) {
        return "bizz";
    }
    else(num % === 3 && 5) {
        return "fizzBuzz";
    }
}

test('numbers divisable by 3 replaced with Fizz', function(assert){
    let(result % 3 === 0)
    assert.equal(result,'fizz');
});

test('numbers divisable by 5 replaced with Bizz', function(assert){
    let(result % 5 === 0)
    assert.equal(result,'buzz');
});

test('numbers divisable by 3 and 5 replaced with FizzBuzz', function (assert){
    let (result % 3 === 0 && result % 5 === 0)
    assert.equal(result, 'fizzbuzz');
});