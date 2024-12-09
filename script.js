document.getElementById("captchaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse === "") {
        alert("Veuillez compléter le Captcha.");
    } else {
        alert("Captcha validé !");
        // Soumettre les données ou effectuer d'autres actions ici
    }
});
