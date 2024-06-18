import nodemailer from "nodemailer";

import logger from "../winston/dev_logger";

interface sendEmail {
  sender_email: string;
  sender_name: string;
  receiver_email: string;
  receiver_name: string;
  subject: string;
  body: string;
}

const NODEMAILER_CONFIG: any = {
  auth: {
    user: process.env.NODEMAILER_AUTH_USER || "",
    pass: process.env.NODEMAILER_AUTH_PASS || "",
  },
  sender_name: process.env.NODEMAILER_SENDER_NAME || "",
  host: process.env.NODEMAILER_HOST || "",
  port: parseInt(process.env.NODEMAILER_PORT || "0"),
  secure: process.env.NODEMAILER_SECURE === "true",
};

const sendEmailByNodemailer = async ({
  sender_email,
  sender_name,
  receiver_email,
  subject,
  body,
}: sendEmail) => {
  try {
    const transporter = nodemailer.createTransport(NODEMAILER_CONFIG);
    const info = transporter.sendMail({
      from: `"${sender_name}" <${sender_email}>`,
      to: `"${receiver_email}`,
      subject: `${subject}`,
      text: `${body}`,
    });

    transporter.close();
    logger.log({
      level: "info",
      message: `Email sent from ${sender_email} to ${receiver_email}`,
      info: {
        from: `${sender_name} <${sender_email}>`,
        to: `${receiver_email}`,
        subject: `${subject}`,
        text: `${body}`,
      },
    });
    return [info, null];
  } catch (error: any) {
    logger.error(`Error sending email: ${error.message}`, error);
    return [null, error.message];
  }
};

export default sendEmailByNodemailer;
