
count=0;
id= setInterval(()=>{
    count++;
    console.log("Loading...")
    if(count==5){
        console.log("Loaded successful!");
        clearInterval(id);
    }
},1000)