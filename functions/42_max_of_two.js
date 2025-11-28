// check which is maximum of two numbers
function maxfind(){
    let a=45, b=78;
    if(a>b){
        return"Maximum is: " + a;
    }
    else{
        return"Maximum is: " + b;           //this is returning value and no arguement
    }
}
   let ans=maxfind();
   console.log(ans);


   // no return value and no arguement
   function find(){
    let a=150, b=120;
    if(a>b){
        console.log("Maximum is: " + a);
    }
    else{
        console.log("Maximum is: " + b);           
    }
   }
   
    find();



    // with arguement and with return value
    function max(a,b){
        if(a>b){
            return"Maximum is: " + a;
        }
        else{
            return"Maximum is: " + b;           
        }
    }
       let answer=max(250,180);
       console.log(answer);