async function sendEmail() {
  const message = document.getElementById("message").value;
  const response = await fetch("/.netlify/functions/send_email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (response.ok) {
    alert("Postagem enviada com sucesso!");
  } else {
    alert("Erro ao enviar a postagem.");
  }
}
