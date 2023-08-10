const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");
const digitalTime = document.getElementById("digitalTime");


function showTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();


    /**
     * 12 hours
     * 1h = 60 mins
     * 1m = 60 secs
     * 360 deg / 12 = 30deg  + [30deg / 60 mins = 0.5]*minutes
     * 
     * 360 deg / 60 mins = 6 
     * 360 deg / 60 secs = 6  
     */
    // console.log(hour);
    const hourHandRotation = 30 * hour + (minutes * 0.5);

    const minuteHandRotation = 6 * minutes;

    const secondHandRotation = 6 * seconds;

    digitalTime.textContent = currentTime.toTimeString();

    hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
    secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
}



setInterval(showTime, 1000);