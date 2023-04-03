        let a;
        let date;
        let time;
        let day;
        setInterval(() => {
        a=new Date();
        let date=a.toDateString();
        // let day=a.toLocaleDayString();
        let time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
        document.getElementById('time').innerHTML=time+"<br> Date: "+date;
    }, 1000);