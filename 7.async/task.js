class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id){
        if (!id) {
            throw new Error('Не задан id');
        }
        if (this.alarmCollection.some(element => element.id === id)) {
            console.log("Звонок с данным id уже существует");
        } else {
            this.alarmCollection.push({id: id, time: time, callback: callback});
        }
    }
    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => !(element.id === id));
        let end = this.alarmCollection.length;
        if ((start - end) === 1) {
            return true;
        } else {
            return false;
        }
    }
    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
        return `${hours}:${minutes}`;
    }
    start() {
        if(this.timerId === null){
            this.timerId = setInterval(() => {
                for (let clock of this.alarmCollection) {
                    checkClock.call(this, clock);
                }
            }, 1000);
        }
    }
    stop(){
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
            console.log(`Будильник № ${element.id} заведен на ${element.time}`);
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
function checkClock(clock) {
    if (clock.time === this.getCurrentFormattedTime()) {
        clock.callback();
    }
}
function testCase(){
    let alarm = new AlarmClock();
    let i = 0;
    function getTime() {
        let now = new Date();
        let hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        let minutes = (now.getMinutes() + i) < 10 ? `0${now.getMinutes() + i}` : `${now.getMinutes() + i}`;
        i++;
        return `${hours}:${minutes}`;
    }
    alarm.addClock(getTime(), () => console.log("Первый будильник"), 1);
    alarm.addClock(getTime(), () => {console.log("Второй будильник"), alarm.removeClock(2)}, 2);
    try {
    alarm.addClock("17:51", () => console.log("Второй будильник"));
    } catch(error){
        console.log(error);
    }
    alarm.addClock("17:50", () => console.log("Первый будильник"), 1);
    alarm.addClock(getTime(), () => {
        console.log("Третий будильник");
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.printAlarms();
    alarm.start();
}
