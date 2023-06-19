const displayTime = () => {
    let date = new Date;
   
    let hour = date.getHours();
    console.log(hour)

    let minutes = date.getMinutes();
    console.log(minutes);

    let amPm = ''

    hour < 12 ? amPm = 'AM' : amPm = 'PM';

    if(hour > 12){
        hour -= 12;
    }


let padHour = String(hour).padStart(2, '0');
let padMinutes = String(minutes).padStart(2, '0');

time.textContent = `${padHour}:${padMinutes} ${amPm}`;
requestAnimationFrame(displayTime);

}

displayTime();