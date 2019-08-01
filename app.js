module.exports = {

    //PART 1_______________________________________

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
    },

    //PART 2_______________________________________
    
    add_special_char: function(array, index){
        var temp = array.slice(0);
        temp[index] = '*';
        return temp;
    },

   concat_without_special_char: function(array) {
        var sol = '';
        array.forEach(function(char){
            if (!(char == '*')) {
                sol += char;
            }
        });
        return sol;
    },

    check_solution_obj: function(array, sol_obj){
        if (sol_obj[array]) {
            return true;
        } else {
            sol_obj[array] = 1;
            return false;
        }
    },

    solution_part_2: function(text_path){
        //read file
        let array_of_input_value = this.read_file(text_path);
        let array_of_char_strings = [];
        var solution;
        
        //build solution from this solution_object
        let solution_object = {};

        for (var i = 0; i < array_of_input_value.length; i++) {
            var temp = this.string_to_char_array(array_of_input_value[i]);
            array_of_char_strings.push(temp);
        }

        //Convert each array of chars to include a special char for each of the index.
        for (var i = 0; i < array_of_char_strings[0].length; i++) {
            for(var j = 0; j < array_of_char_strings.length; j++) {
                var special_char_array = this.add_special_char(array_of_char_strings[j], i);
                //check to see if this property already exists in the solution object
                if (this.check_solution_obj(special_char_array, solution_object)){
                    //if  it does, this will store the concatenated letters without the special char that two string inputs share.
                    solution = this.concat_without_special_char(special_char_array);
                }
            }
        }

        // return the solution
        return solution;
    }
};