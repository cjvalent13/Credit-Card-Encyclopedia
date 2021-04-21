function GetDate()
{
var amORpm = 'am';
var da = new Date();
var hour = da.getHours();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var actualDay = days[da.getDay()];
var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
var actualMonth = months[da.getMonth()];
	if(hour > 12)
	{
		hour = hour - 12;
		amORpm = 'pm';
	}
	else
	{
		amORpm = 'am';
	}
document.getElementById('pa').innerHTML= '' +actualDay+ ', ' +actualMonth+ ' ' +da.getDate()+ ', ' +hour+ ':' +da.getMinutes()+ ':' +da.getSeconds()+ ' ' +amORpm+ '';
}