for (var counter = 1; counter <= 100; counter++){
    if(counter % 3 === 0 && counter % 5 === 0){
        console.log(counter + 'FuzzBuzz');
    }else if(counter % 3 === 0){
        console.log(counter + 'Fuzz');
     }else if(counter % 5 === 0){
         console.log(counter + 'Buzz')
     }else{
         console.log(counter)
     }
}

