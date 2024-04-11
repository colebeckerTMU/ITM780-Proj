function downloadFile(url){
  var link = document.createElement("a")
  link.href = url;
  link.click()
  link.remove();
}

function resumeWarn(){
  if(window.confirm("Are you sure you wish to download this file?")==true){
    downloadFile('Resume Updated.docx');
    document.getElementById("resumeLink").innerHTML = "Thank you!";
  }
    else{
  }
}

function headshot(){
  document.getElementById("headshot").innerHTML();
}
