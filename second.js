function sendEmail() {

    var email = "shreevatsnandan@gmail.com";
    var subject = " ";
    var body = "I hope this email finds you well.";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}