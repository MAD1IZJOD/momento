# System Architecture

```plaintext
Mobile App (React Native)  
  │  
  └── Firebase (Backend)  
      ├── Firestore (Events/Participants)  
      ├── Cloud Storage (Temp Photos)  
      └── Cloud Functions (Triggers)  
  │  
  └── AWS S3 (Custom Storage)  
      ├── Auto-Deletion Rules  
      └── Photo Compression  