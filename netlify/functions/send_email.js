const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { message } = JSON.parse(event.body);

  const to_email = "rafaelgame93@gmail.com";
  const from_email = "userreportbugsic@gmail.com";
  const subject = "Nova postagem";

  const transporter = nodemailer.createTransport({
    service: "gmail", // Use um provedor de e-mail como o Gmail, Outlook ou outros
    auth: {
      user: "userreportbugsic@gmail.com", // Substitua pelo seu e-mail
      pass: "userreport01", // Substitua pela sua senha do e-mail
    },
  });

  const mailOptions = {
    from: from_email,
    to: to_email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: "Postagem enviada com sucesso!" };
  } catch (error) {
    return { statusCode: 500, body: "Erro ao enviar a postagem." };
  }
};
