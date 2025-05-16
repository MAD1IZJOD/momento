#!/bin/bash

# Deploy Firebase functions, Firestore rules, and storage rules
firebase deploy --only functions,firestore,storage

echo "Firebase deployment complete!"