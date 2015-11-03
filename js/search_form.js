function validateform()
{
	// Lets make sure a Zip Code is entered:
	var zip = document.search_form.zip.value;
	var state = document.search_form.state.value;
	var city = document.search_form.city.value;
	var name = document.search_form.name.value;
	var country = document.search_form.country.value;

	if ((zip == '' || zip == undefined) && (state == '' || state == undefined) && (city == '' || city == undefined) && (name == '' || name == undefined) && (country == '' || country == undefined)){
		alert("Please enter one serach criteria to continue.");
		document.search_form.zip.focus();
		return false;
	}
	return true;
}
 
function NewWindow(mypage, myname, w, h, scroll) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}
  
function hideThis(thisDiv){
	var hDiv = document.getElementById(thisDiv);
	hDiv.style.display = "none";
}

function showThis(thisDiv){
	var sDiv = document.getElementById(thisDiv);
	sDiv.style.display = "block";
}
