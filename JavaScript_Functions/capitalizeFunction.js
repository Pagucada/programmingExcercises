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