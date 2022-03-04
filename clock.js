setInterval(()=>{
    let date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    hrotation=30*hour+min/2;
    mrotation=6*min;
    srotation=6*sec;
    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
    console.log(hour);


}, 1000);

