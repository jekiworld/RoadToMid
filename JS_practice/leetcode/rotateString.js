var rotateString = function(s, goal) {
    let array = s.split('');
    let length = array.length;
    let first_element = null;

    for(let i = 0; i < length; i++){
        first_element = array[0];
        array.shift();
        array.push(first_element);
        console.log(array);
        if(array.join('') === goal){
            console.log(true);
            return true;
        }
    }

    console.log(newGoal);
    return false;


};

rotateString("abcde", "cdeab");