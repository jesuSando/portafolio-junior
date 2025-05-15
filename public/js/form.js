document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const payload = {
      name: document.getElementById("name-form").value,
      email: document.getElementById("email-form").value,
      subject: document.getElementById("subject-form").value,
      message: document.getElementById("message-form").value,
    };
  
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
    if (data.success) {
      alert("Correo enviado correctamente");
      e.target.reset();
    } else {
      alert("Error al enviar el correo");
    }
});
  
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const subject = e.target.getAttribute('data-subject');
    
    // Espera a que se haga scroll, luego rellena
    setTimeout(() => {
        const subjectInput = document.getElementById('subject-form');
        if (subjectInput) {
            subjectInput.value = subject;
            subjectInput.focus(); // opcional
            }
        }, 0);
    });
});