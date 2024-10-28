const arv = (val1,val2,cv) =>{
  const result = val1*val2;
  cv(result);
}

arv(23,8,function(val){
    console.log(val);
});




const dipu = (a,b,cb)=>{
    data = a+b;
     cb(data);
}

dipu(2,3, cb =(val)=>console.log("Ressult Is:",val))