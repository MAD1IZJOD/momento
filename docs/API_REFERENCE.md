# API Reference

### Events
- **POST /createEvent**  
  Creates a new event. Returns `{ eventId, qrCode }`.

### Photos
- **POST /uploadPhoto?eventId={id}**  
  Uploads a photo to an event. Accepts `multipart/form-data`.

### Notifications
- **GET /notify/{eventId}**  
  Sends photos to participants via email/push.