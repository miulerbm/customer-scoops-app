import express from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { email, formData } = req.body;

  const emailContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; color: #333;">
    <div style="background-color: #231331; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <img src="https://raw.githubusercontent.com/miulerbm/customer-scoops-app/refs/heads/main/public/assets/mobile-banner.webp" alt="Customer Scoops" style="width: 150px;"/>
    </div>
    <div style="padding: 20px; background-color: #ffffff;">
      <h2 style="color: #231331;">Hola ${formData.name || "Usuario"},</h2>
      <p>En Customer Scoops nos importa mucho tu experiencia, y queremos asegurarnos de que nuestros servicios sigan cumpliendo tus expectativas.</p>
      <p>Por eso, hemos preparado unas breves preguntas para que puedas compartir tus comentarios y sugerencias.</p>
      <p>Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que realmente necesitas. Nos tomará solo unos minutos de tu tiempo.</p>
      
      <a href="https://customer-scoops-app.vercel.app/" style="display: inline-block; padding: 10px 20px; background-color: #231331; color: #ffffff; border-radius: 30px; text-decoration: none; font-weight: bold; margin: 10px 0;">Ingresa Aquí</a>
      
      <p>Agradecemos de antemano tu participación y confianza en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!</p>
      
      <p>Saludos,<br/>
      <strong>Equipo de Customer Scoops</strong></p>
    </div>
    <div>
      <h1>Resultados del Formulario</h1>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Posición:</strong> ${formData.position}</p>
      <p><strong>Desafíos:</strong> ${formData.challenges}</p>
      <p><strong>CRM:</strong> ${formData.crm}</p>
      <p><strong>Industria:</strong> ${formData.industry}</p>
    </div>
    <div style="background-color: #231331; padding: 10px; text-align: center; color: #ffffff; border-radius: 0 0 8px 8px;">
      <img src="https://raw.githubusercontent.com/miulerbm/customer-scoops-app/refs/heads/main/public/assets/scoops-white.webp" alt="Customer Scoops" style="width: 100px;"/>
    </div>
  </div>
`;
  try {
    await resend.emails.send({
      from: "miulerbm@resend.dev",
      to: email,
      subject: "Resultados del Formulario",
      html: emailContent,
    });
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar correo", error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
