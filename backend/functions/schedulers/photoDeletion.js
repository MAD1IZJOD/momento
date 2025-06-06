const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.scheduleDeletion = functions.firestore.document("events/{eventId}")
  .onCreate((snap, context) => {
    const eventData = snap.data();
    const eventId = context.params.eventId;
    const delay = eventData.expiresAt.toDate() - Date.now();

    return new Promise((resolve) => {
      setTimeout(async () => {
        // 1. Delete from Firestore
        await admin.firestore().collection("events").doc(eventId).delete();
        // 2. Delete from Storage
        const bucket = admin.storage().bucket();
        await bucket.deleteFiles({ prefix: `events/${eventId}/` });
        resolve();
      }, delay);
    });
  });
