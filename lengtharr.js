var bubbleSort = function(arr){
    do{
        var swapped = false;
        arr.forEach ((num, i) =>{
            //is number greater than the array i plus 1, i is the current number
            if(num > arr[i + 1]){
            var temp = num;
            arr[i] = array[i + 1];
            array[i + 1] = temp;
            //if number in greater than i we name it as temp
            swapped = true;
        }
    })
    }while(swapped === true)
return arr;
}
//console.log bubbleSort([7,45,32,90,1,4])