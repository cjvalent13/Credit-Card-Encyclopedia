function GrabPicture()
{
	var AnimalName = document.getElementById('ani').value;
	document.getElementById('picID').innerHTML = '<img src="./img/' +AnimalName+ '.jpg" width="1000" height="1000">';
}