/*

let house=document.querySelector("#house");
//let m=document.querySelector("#m");
let date=document.querySelector("#date");



function timeZone(){

    let timeDate=new Date();
   

    let h=timeDate.getHours();
    let mt=timeDate.getMinutes()<10 ? "0"+timeDate.getMinutes():timeDate.getMinutes();
    let s=timeDate.getSeconds()<10 ? "0"+timeDate.getSeconds():timeDate.getSeconds();
    let ap=timeDate.getHours()>12? "AM":"PM";


    if(timeDate.getHours()==0){
        h=12;
    }
    else if(timeDate.getHours()>12){
        h=timeDate.getHours()-12;
    }else{
        h=timeDate.getHours();
    }

    let time=`${h}: ${mt}: ${s} ${ap} `;

    house.innerHTML=time;
    //m.innerHTML=ap;

    let nameTheDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let nameTheDate=["January","February","March","April","May ","June","July","August","September","October","November","December"]

    let day=timeDate.getDate();
  
    let year=timeDate.getFullYear();
  

    let todaysnamisdate=`${nameTheDay[timeDate.getDay()]}, ${nameTheDate[timeDate.getMonth()]}, ${day}, ${year}`;
    
    date.innerHTML=todaysnamisdate;
   
};

timeZone()

setInterval(timeZone,1000)

*/

try{


    let h1=document.querySelector("#house");
    let mt1=document.querySelector("#Minit");
    let s1=document.querySelector("#secend");
    let m1=document.querySelector("#m");
    let dt=document.querySelector("#date")
    
    console.log(s1);
    
    
    
    const digitalClock=()=>{
     
        let date=new Date();
        
        let h=date.getHours();
        let mt=date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes();
        let s=date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds();
        let m=date.getHours()>12? "PM":"AM";

        if(date.getHours()==0){
            h=12;
        }
        else if(date.getHours()>12){
            h=date.getHours()-12;
        }else{
            h=date.getHours();
        }
    
    
       h1.innerHTML=h;
       mt1.innerHTML=mt;
       s1.innerHTML=s;
       m1.innerHTML=m;
    
       let nameTheDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
       let nameTheDate=["January","February","March","April","May ","June","July","August","September","October","November","December"]
    
       let day=date.getDate();
       let year=date.getFullYear();
    
       let d=`${nameTheDay[date.getDay()]}, ${nameTheDate[date.getMonth()]}  ${day}, ${year}`
       dt.innerHTML=d;
    
    
    }
    
    digitalClock()
    
    setInterval(digitalClock,1000)
    
    


}catch(e){
console.log(e);
}