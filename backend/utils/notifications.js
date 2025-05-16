const admin = require("firebase-admin");
admin.initializeApp();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class Notifier {
  // Email via SendGrid
  static async sendEmail(email, eventId) {
    const msg = {
      to: email,
      from: "momento@example.com",
      subject: "Your Momento photos are ready!",
      text: `Download your photos: https://momento.app/gallery/${eventId}`,
    };
    await sgMail.send(msg);
  }

  // Push via Firebase Cloud Messaging
  static async sendPush(token, eventId) {
    await admin.messaging().send({
      token,
      notification: {
        title: "Photos Ready!",
        body: "Your event photos are available for download.",
      },
    });
  }
}

module.exports = Notifier;