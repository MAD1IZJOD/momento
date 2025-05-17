const functions = require("firebase-functions");
const admin = require("firebase-admin");
const QRCode = require("qrcode");
admin.initializeApp();

exports.createEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated");

  const eventRef = await admin.firestore().collection("events").add({
    organizerId: context.auth.uid,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    expiresAt: new Date(Date.now() + 86400000), // 24h
    photoCount: 0,
    participants: [],
  });

  const qrCode = await QRCode.toDataURL(eventRef.id);
  return { eventId: eventRef.id, qrCode };
});