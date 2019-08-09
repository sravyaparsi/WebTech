export  function validateemail(){
    let emailId = document.getElementById("emailid").value;
  
    //regular expression to validate email id.
    let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;

    if (emailRegex.test(emailId)) {
        //if email id is valid then saving it to local storag.
        localStorage.setItem("EmailId", emailId);
        alert("subscribed");
    } else {
        alert("Invalid EmailId");
    }
}