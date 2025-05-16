#!/bin/bash

# Create S3 bucket
aws s3api create-bucket --bucket momento-photos --region us-east-1

# Set auto-deletion after 24h
aws s3api put-bucket-lifecycle-configuration \
  --bucket momento-photos \
  --lifecycle-configuration '{
    "Rules": [{
      "ID": "DeleteAfter24h",
      "Filter": { "Prefix": "events/" },
      "Status": "Enabled",
      "Expiration": { "Days": 1 }
    }]
  }'

echo "Storage setup complete!"