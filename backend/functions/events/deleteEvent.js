const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.deleteEvent = functions.firestore.document("events/{eventId}")
  .onDelete(async (snapshot, context) => {
    const eventId = context.params.eventId;
    // Delete all photos in Firebase Storage for this event
    const bucket = admin.storage().bucket();
    await bucket.deleteFiles({ prefix: `events/${eventId}/` });
  });