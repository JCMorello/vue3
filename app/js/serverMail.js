// js/serverMail.js
import nodemailer from 'nodemailer';

export async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: 'mailhog', // nombre del servicio Docker
    port: 1025,      // SMTP MailHog
    secure: false
  });

  return transporter.sendMail({
    from: 'dev@local.test',
    to: 'usuario@test.local',
    subject: 'Mail desde Vue',
    text: 'Correo enviado pulsando un botón'
  });
}
