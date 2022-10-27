var DATE = new Date();
export class DateAndTime{
	handleDay(day){
		switch(day.getDay()){
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			case 6:
				return "Saturday";
			default:
				return "Sunday";
		}
	}

	handleMonth(month){
		switch(month){
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			default:
				return "December";
		}
	}

	handleDate(date){
		let len = date.length - 1;
		switch(date.charAt(len)){
			case "1":
				return date + "st";
			case "2":
				return date + "nd";
			case "3":
				return date + "rd";
			default:
				return date + "th";
		}	
	}

	handleHour(hour){
		return hour < 10 ? "0" + hour : hour;
	}

	handleMinute(minute){
		return minute < 10 ? "0" + minute : minute;
	}

	handleData(){
	let hour = this.handleHour(DATE.getHours());
	let minute = this.handleMinute(DATE.getMinutes());
	let time = hour + ":" + minute;

	let day = `${this.handleDay(DATE)}`
	let Date = `${this.handleDate(DATE.getDate().toString())} ${this.handleMonth(DATE.getMonth())} ${DATE.getFullYear()}.`
	return{
		Date, time, day
	}
	}

}

