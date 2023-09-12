
function validateform(){  
    var name=document.getElementById("name").value 
    var text=document.getElementById("text").value 
    var email=document.getElementById("email").value
    var emailRegex = /^[a-z A-Z 0-9 _\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
      
    if (name==null|| name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(!isNaN(name)){
    alert(" Invalid Name ");
    return false;
    

       }   else if(!email.match(mailformat))
      {
        alert("You have entered an invalid email address!");
        document.form1.email.focus();
        return false;
      }  else if(text==""||text==null){  
        alert("Message null??");  
        return false;  
        }
      else
      {
        alert("Form Submitted Successfully");
      } 
    }
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  validateForm();
});
