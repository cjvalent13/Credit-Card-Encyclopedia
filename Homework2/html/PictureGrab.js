function GrabPicture()
{
	var AnimalName = document.getElementById('ani').value;
	document.getElementById('picID').innerHTML = '<img src="./img/' +AnimalName+ '.jpg">';
}