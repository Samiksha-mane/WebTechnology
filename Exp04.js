function SubmitButtonCLick()
{
    //get values using DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //clear old message
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML ="";

    let isValid = true;

    if(name == "")
    {
        document.getElementById('nameError').innerHTML = "Name feild is required";
        isValid = false;
    }
    if(email == "")
    {
        document.getElementById('emailError').innerHTML = "Email feild is requeird";
         isValid = false;
    }
    if(password == "")
    {
        document.getElementById('passwordError').innerHTML ="Password field is requeied";
         isValid = false;
    }
    if(isValid == true)
    {
        document.getElementById('successMessage').innerHTML = "Form Submitted Successfully!";

    }
    else
    {
        document.getElementById('successMessage').innerHTML.style.color  = "red";
        document.getElementById('successMessage').innerHTML = "Form is not Submitted";
    }
    return false;
}