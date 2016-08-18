var clone=require('clone');

var my_letter_array = ['a', 'b', 'c', 'd', 'e'];

// create my_array
var my_array = [];
for (var i = 0; i < 5; i++) {

    var object = {
        number: i,
        letters: my_letter_array
    };
    my_array.push(object);
}

//create nested_array with several my_array's
var my_nested_array = [];
for (var i = 0; i < 5; i++) {

    var object = {
        letters: my_array[i]
    };
    my_nested_array.push(object);
}

//create the dep copy array:
var deep_copy_array = clone(my_nested_array);

// makes the change just in my_array  :
my_array[0].letters[0] = 'z';
console.log('just made the change in my_array in the first position from a to z');

// this change will affect the nested_array, even without making any explicit change in the nested_array! :
console.log('my_array[0].letters[0] = ' + my_array[0].letters[0]);
console.log('my_nested_array[0].letters[0] = ' + my_nested_array[0].letters.letters[0]);

// but will not affect the deep_copy array because the values were copied by value and not by reference
console.log('deep_copy_array[0].letters[0] = ' + deep_copy_array[0].letters.letters[0]);







