function sendMail(contactForm) {
    emailjs.send("default_service ", "template_xm6e2w4", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.infosummary.value
    })
}