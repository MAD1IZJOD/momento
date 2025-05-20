# Momento 📸

A disposable camera-inspired app for group events. Organizers create events with QR codes, participants snap photos (up to 50), and all photos auto-share via Google Drive after 24 hours.

 Features
- 🎟️ **QR Code Event Creation**: Generate unique QR codes for events
- 📸 **Photo Limits**: 50 photos/event, 24-hour delay before sharing
- ☁️ **Auto-Delete & Share**: Photos deleted from temp storage after sharing
- 🔒 **Secure**: Firebase Auth + Google Drive integration

## Setup

### Prerequisites
- Node.js v18+
- Java JDK 11
- Firebase CLI
- Android Studio (for mobile app)

### Installation
1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/momento.git
   cd momento

   Install Dependencies

bash
# Mobile App
cd mobile-app && npm install

# Firebase Backend
cd ../backend/functions && npm install

# Storage Service
cd ../../storage-service && npm install
Firebase Setup

bash
npm install -g firebase-tools
firebase login
firebase init
Select: Firestore, Functions, Storage, Emulators

Use existing project: momento-bb994

Configure Environment Variables

Create .env files using .env.example templates

Add Firebase config to mobile-app/src/config/firebase.js

Usage
Start Services

bash
# Firebase Emulators
firebase emulators:start

# Storage Service (new terminal)
cd storage-service && npm start

# Mobile App (new terminal)
cd mobile-app && npm run android
Event Flow

Organizer: Create event → Share QR code

Participant: Scan QR → Take photos (max 50)

After 24h: Photos auto-shared via Google Drive

Tech Stack
Mobile App: React Native, Expo Camera, QR Code Generator

Backend: Firebase (Firestore, Cloud Functions, Storage)

Storage: Google Drive API

Emulators: Firebase Local Emulator Suite

Folder Structure
/momento
├── mobile-app       # React Native app
├── backend          # Firebase config + Cloud Functions
├── storage-service  # Custom storage logic
├── scripts          # Deployment/init scripts
└── docs             # Architecture/API docs
Configuration
File	Purpose
mobile-app/.env	Firebase API keys
storage-service/config.js	Google Drive OAuth credentials
firebase.json	Firebase project configuration
Troubleshooting
Java Not Found

Confirm JAVA_HOME points to JDK 11

Check C:\Program Files\Java\jdk-11.x.x\bin in system PATH

Firebase Errors

bash
firebase deploy --only functions # Force redeploy
firebase emulators:start --debug # Verbose logging
License
MIT © 2024 [MADHAVAN]

be crazyy MADDDDDDDDDDDDDDDDDDD
