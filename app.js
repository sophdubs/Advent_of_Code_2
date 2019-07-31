module.exports = {
    read_file: function(text_path){
        var fs = require("fs");
        var text = fs.readFileSync(text_path).toString('utf-8');
        text = text.replace(/ /g, "");
        var textByLine = text.split("\n");
        return textByLine;
    },

    string_to_char_array: function(string_input){
        var result = [];
        for (i = 0; i < string_input.length; i++) {
            result.push(string_input[i]);
        }
        return result;
    },

    map_occurences: function(char_string_array){
        var occurences = {}
        char_string_array.forEach(function(char){
            if(occurences[char]) {
                occurences[char] += 1;
            } else {
                occurences[char] = 1;
            }
        });
        return occurences;
    },

    check_two: function(my_object) {
        var value_array = Object.values(my_object);
        if (value_array.includes(2)) {
            return true;
        }
        return false;
    }, 

    check_three: function(my_object) {
        var value_array = Object.values(my_object);
        if (value_array.includes(3)) {
            return true;
        }
        return false;
    },

    checksum: function(x, y){
        return x * y;
    },

    solution_part_1: function(text_path){
        let result;
        let array_of_char_strings = [];
        let solution_object = {2:0, 3:0};

        //read in file
        result = this.read_file(text_path);
        
        //convert each string in array to an array of char strings
        for (var i = 0; i < result.length; i++) {
            var temp = this.string_to_char_array(result[i]);
            array_of_char_strings.push(temp);
        }

        //map occurences of each letter in each entry. 
        //update count of words containing 2 occurences and 3 occurences of letters in the solution object
        for (var i = 0; i < array_of_char_strings.length; i++) {
            var occurences_object = this.map_occurences(array_of_char_strings[i]);
            if (this.check_two(occurences_object)){
                solution_object[2] += 1;
            }
            if (this.check_three(occurences_object)) {
                solution_object[3] += 1;
            }
        }

        //calculate the checksum for the # of words containing two of the same letters * # of words containing 3 of the same letters
        var solution_part_1 = this.checksum(solution_object[2], solution_object[3]);

        //return the solution
        return solution_part_1;
    }
};