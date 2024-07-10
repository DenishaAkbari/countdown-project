let day = document.getElementById('day');
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc   = document.getElementById('sc');
const countDown = () => {
    
    let hrs = 0;
    let mins = 0;
    let sec = 0;
    let days = 0;
    
    day.innerHTML = days;
    hr.innerHTML = hrs;
    mn.innerHTML = mins;
    sc.innerHTML = sec;

    setInterval(() => {
        sec++;
        sc.innerHTML = sec;
        if(days <= 9) {
            days.innerHTML = "0" + days;
        }   
        if(hrs <= 9) {
            hr.innerHTML = "0" + hrs;
        }
        if(mins <= 9) {
            mn.innerHTML = "0" + mins;
        }
        if(sec <= 9) {
            sc.innerHTML = "0" + sec;
        }
        if (sec > 60) {
            mins++;
            sec = 0;
            mn.innerHTML = mins;
            sc.innerHTML = sec;
        }
        if (mins > 59) {
            hrs++;
            mins = 0;
            mn.innerHTML = mins;
            hr.innerHTML = hrs; 
        }
        if (hrs > 23    ) {
            days++;
            hrs = 0;
            hr.innerHTML = hrs;
            mn.innerHTML = mins;
            sc.innerHTML = sec;
            day.innerHTML = days;
        }
        
    },1000)
}