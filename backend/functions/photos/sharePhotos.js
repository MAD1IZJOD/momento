const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Notifier = require("../../utils/notifications");
admin.initializeApp();

exports.sharePhotos = functions.firestore.document("events/{eventId}")
  .onUpdate(async (change, context) => {
    const eventId = context.params.eventId;
    const eventData = change.after.data();

    // If timer expired, notify participants
    if (eventData.expiresAt.toDate() <= new Date()) {
      const participants = eventData.participants; // Array of user IDs/emails
      await Promise.all(
        participants.map((user) => Notifier.sendEmail(user.email, eventId))
      );
      await change.after.ref.delete(); // Cleanup
    }
  });