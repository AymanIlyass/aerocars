document.getElementById("whatsappBtn").addEventListener("click", function () {
    // Get form data
    const carModel = document.getElementById("carModel").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const contactInfo = document.getElementById("contactInfo").value;

    // Pre-fill the WhatsApp message
    const message = `Hi! I'd like to reserve a ${carModel} for ${reservationDate}. My contact info is ${contactInfo}.`;

    // Your WhatsApp phone number (in international format without + or 00)
    const phoneNumber = "1234567890";  // Replace this with your number

    // Encode the message and create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, "_blank");
});
