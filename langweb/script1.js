var selectedRow = null

function onFormSubmit(){
	var formData = readFormData();
	if(selectedRow == null)
		insertNewRecord(formData);
	else
		updateRecord(formData);

	resetForm();
}

function readFormData(){
	var formData = {};
	formData["languages"]= document.getElementById("languages").value;
	return formData;
}

function insertNewRecord(data){
	var table=document.getElementById("languagelist")
	var newRow= table.insertRow(table.length);
	cell1=newRow.insertCell(0);
	cell1.innerHTML=data.languages;
	cell2=newRow,insertCell(1);
	cell2.innerHTML=`<a> onClick="onEdit(this)">Edit</a> 
                     <a> onClick="onDelete(this)">Delete</a>`;	
}

function resetForm(){
	document.getElementById("languages").value="";
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("languages").value = selectedRow.cells[0].innerHTML;

}
function updateRecord(readFormData){
	selectedRow.cells[0].innerHTML=formData.languages;

}
function onDelete(td){
	if(confirm('Are you sure to delete this language?')){
		row = td.parentElement.parentElement;
		document.getElementById("languages").deleteRow(row.rowIndex);
		resetForm();
	}
}