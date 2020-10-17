function sendMail(contactForm) {
    emailjs.send("default_service", "template_xm6e2w4", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "information_request": contactForm.infosummary.value
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}