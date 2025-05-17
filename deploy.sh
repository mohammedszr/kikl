#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Create a production-ready package
echo "Creating production package..."
rm -rf .next/cache
tar -czf deploy.tar.gz .next package.json package-lock.json public .ionos.yaml

echo "Deployment package created: deploy.tar.gz"
echo "Upload this file to your IONOS deployment panel"
