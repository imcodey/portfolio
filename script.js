// aboutus

const details = document.querySelectorAll("details");

details.forEach((targetDetail)=>{
    targetDetail.addEventListener("click",()=>{
        details.forEach((detail)=>{
            if(detail !== targetDetail){
                detail.removeAttribute("open")
            }
        })
    })
})


 if(window.matchMedia("(width:320px)")){
 let head = document.getElementsByTagName('head')[0];
 let link = document.createElement('link');
 link.rel = 'stylesheet';
 link.type = 'text/css';
 link.href = './css/media1.css';
 head.appendChild(link);
 }


//  sentEmail

const sentEmail = ()=>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "myaduvanshi1508@gmail.com",
        Password : "Mukesh@150802my",
        To : 'mmukesh1508@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
 