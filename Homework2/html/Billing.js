function MailingToBilling()
{
	
var thebox2 = document.getElementById("thebox").value;
var isChecked = document.getElementById("thebox").checked;


	
	if(isChecked==true) {
var shipname = document.getElementById("Sname").value;
var shipzip = document.getElementById("Szip").value;

document.getElementById("Bname").value = shipname;
document.getElementById("Bzip").value = shipzip;
	}
	else
	{
		document.getElementById("Bname").value = '';
		document.getElementById("Bzip").value = '';
	}
}



 