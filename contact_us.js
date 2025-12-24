document.getElementById("contact_us").addEventListener("submit", function(event){
    event.preventDefault()
          if (this.username && this.useremail == "") {
      document.getElementById("auten").innerHTML="pls complete the form"
     
       }else if (this.phone && this.message == "") {
      document.getElementById("auten").innerHTML="pls complete the form"
     
       }else   if (this.subject =="") {
      document.getElementById("auten").innerHTML="pls complete the form"
     
       }
       document.getElementById("auten").style.fontSize="20px"
       document.getElementById("auten").style.color="red"

       this.getClientRects


    emailjs.send("service_xutamzf","template_r7ea60l", {
        username: this.username.value,
        useremail:this.useremail.value,
        phone: this.phone.value,
        message: this.message.value,
        subject: this.subject.value
    })

    .then(() => {
        alert("message has been sent");
    }, (error) => {
        alert("failed...", error)
    })


 

})
