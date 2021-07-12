function capitalizeString(string) {
    array = string.split('');
    newString = string;
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i] == array[i].toLowerCase())
        {
            array[i] = array[i].toUpperCase();
        }
    }
    
    return array.join('');
}
arr = [2,3,4,3,2,1];
ent = 3;
function counterFunction(arr, ent) {
   
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ent) {
            counter++
        }
    }
    return counter
}