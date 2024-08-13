function sentMail() {
    if (document.getElementById("email_name").value.length > 0 &&
        document.getElementById("email_address").value.length > 0 &&
        document.getElementById("email_message").value.length > 0 &&
        document.getElementById("input_number").value.length ==10
    ) {
        var params = {
            name: document.getElementById("email_name").value,
            email: document.getElementById("email_address").value,
            message: document.getElementById("email_message").value,
            number: document.getElementById("input_number").value,
            address: document.getElementById("input_details").value,
        };
        const serviceID = "service_btlwrap";
        const templateID = "template_r10g6c1";
        emailjs.send(serviceID, templateID, params)
            .then(function
                (res) {
                document.getElementById("email_name").value = "";
                document.getElementById("email_address").value = "";
                document.getElementById("email_message").value = "";
                document.getElementById("input_number").value = "";
                document.getElementById("input_details").value = "";
                console.log(res);
                alert("Your Message Sent Successfully");
            }
            )
            .catch((err) => console.log(err))

    } else if (document.getElementById("email_name").value.length == 0) {
        alert("Name cant be empty");
    }
    else if (document.getElementById("email_address").value.length == 0) {
        alert("Email cant be empty");
    }
    else if (document.getElementById("email_message").value.length == 0) {
        alert("Message cant be empty");
    } else if (document.getElementById("input_number").value.length == 0) {
        alert("Number cant be empty");
    } else if (document.getElementById("input_number").value.length < 10) {
        alert("Number cant be Full");
    } else if (document.getElementById("input_number").value.length > 10) {
        alert("Enter 10 Digit Number");
    }
}