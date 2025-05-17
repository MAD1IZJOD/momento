const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.uploadPhoto = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;
  const [_, eventId] = filePath.split("/");

  const eventRef = admin.firestore().collection("events").doc(eventId);
  const eventDoc = await eventRef.get();

  if (!eventDoc.exists || eventDoc.data().photoCount >= 50) {
    await admin.storage().bucket().file(filePath).delete();
    return;
  }

  await eventRef.update({
    photoCount: admin.firestore.FieldValue.increment(1),
    participants: admin.firestore.FieldValue.arrayUnion(object.metadata.uploader),
  });
});