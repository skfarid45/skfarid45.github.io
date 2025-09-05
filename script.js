function showNotification(message, isSuccess) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.padding = "15px";
    notification.style.borderRadius = "5px";
    notification.style.color = "white";
    notification.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    notification.style.transition = "opacity 0.5s ease";
    notification.style.opacity = "1";
    notification.style.zIndex = "1000";
    notification.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336";
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0"; 
        setTimeout(() => {
            document.body.removeChild(notification); 
        }, 500);
    }, 2000);
}

const button = document.querySelector(".button--submit");
button.addEventListener("click", () => {
    const pesan = document.querySelector("#pesan").value;

    if (pesan === "") {
        showNotification("Please Enter Your Message!", false); 
        return;
    }

    showNotification("Thank You! Your Message Has Been Sent", true); 
});


// menampilkan slideshow item
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Optional: Auto change slide every 3 seconds 
setInterval(() => {
    changeSlide(1);
}, 3000);
