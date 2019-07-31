const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    describe('Part 1', function(){
        
        describe('read_file(text_path)', function(){
            let result = app.read_file('./test_input.txt');
            it ('should read file and return array', function(){
                assert.typeOf(result, 'array');
            });
            it ('should return an array of strings', function(){
                assert.typeOf(result[0], 'string');
            });
            it ('should convert the entire file', function(){
                assert.equal(result.length, 7);
            });
        });

        describe('string_to_char_array(string_input', function(){
            let result = app.string_to_char_array('hello');
            it ('should return an array', function(){
                assert.typeOf(result, 'array');
            });
            it ('should return an array of individual character strings', function(){
                assert.equal(result[0].length, 1);
                assert.typeOf(result[0], 'string');
            });
            it ('character array should be the same length as the passed in string', function(){
                assert.equal(result.length, 'hello'.length);
            });
        });

        describe('map_occurences(char_string_array)', function(){
            let result = app.map_occurences(['h','e','l','l','o']);
            it ('should return an object', function(){
                assert.typeOf(result, 'object');
            });
            it ('should set keys for each char in string array and values as the number of times they appear in the array', function(){
                assert.equal(result.l, 2);
                assert.equal(result.h, 1);
                assert.isUndefined(result.hello);
            });
        });

        describe('check_two(my_object)', function(){
            let result_true = app.check_two({h:1, e:1, l:2, o:1});
            let result_false = app.check_two({h:1, i:1});
            it ('should return true if any of the object values are two', function(){
                assert.equal(result_true, true);
            });
            it ('should return false if none of the object values are two', function(){
                assert.equal(result_false, false);
            });
        });

        describe('check_three(my_object)', function(){
            let result_true = app.check_three({h:1, e:1, l:2, o:3});
            let result_false = app.check_three({h:1, i:1});
            it ('should return true if any of the object values are three', function(){
                assert.equal(result_true, true);
            });
            it ('should return false if none of the object values are three', function(){
                assert.equal(result_false, false);
            });
        });

        describe('checksum(x,y)', function(){
            let result = app.checksum(12, 2);
            let result_neg = app.checksum(-12, 2);
            let result_two_neg = app.checksum(-12, -2);

            let result_zero = app.checksum(12, 0);
            it ('should return a number', function(){
                assert.typeOf(result, 'number');
            });
            it ('should return the product of the two passed in values', function(){
                assert.equal(result, 24);
            });
            it ('the product of one negative and one positive should be positive', function(){
                assert.equal(result_neg, -24);
            });
            it ('the product of two negatives should be positive', function(){
                assert.equal(result_two_neg, 24);
            });
            it ('the product of any value with 0 should retun 0', function(){
                assert.equal(result_zero, 0);
            });
        });

        describe('solution_part_1(text_path)', function(){
            let result1 = app.solution_part_1('./test_input.txt');
            let result2 = app.solution_part_1('./puzzle_input.txt');

            it('should return a number', function(){
                assert.typeOf(result1, 'number');
            });

            it('should return the correct checksum', function(){
                assert.equal(result1, 12);
            });

            it('should return the correct checksum', function(){
                assert.equal(result2, 6225);
            });
        })
    });


    describe('Part 2', function(){
    });
});