let pass;
pass=Array.from(document.querySelectorAll(`input[type="password"]`));

pass.forEach(item => item.addEventListener("input", checkPass));


function checkPass(e){
    let pass1, pass2;
    pass1=document.querySelector("#password").value;
    pass2=document.querySelector("#confirmPassword").value;
    if(pass1===pass2){pass.forEach(item=>item.setCustomValidity(""))}
    else{
        e.target.setCustomValidity("Passwords do not match!");
        e.target.reportValidity();
    }
    
}
