import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: subject || "Nuevo mensaje desde portafolio",
        html: `
            <h2>Nuevo mensaje desde el formulario de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        `          
   };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error al enviar correo:", error);
      res.status(500).json({ success: false, error });
    }
};
