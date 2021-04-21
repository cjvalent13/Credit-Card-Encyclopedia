function GrabPicture()
{
	var AnimalName = document.getElementById('ani').value;
	document.getElementById('picID').innerHTML = '<img src="./img/' +AnimalName+ '.jpg" width="200" height="200">';
}