---
title: "About KI-KL e.V."
description: "Learn about our mission to democratize AI education and empower communities"
keywords: "AI nonprofit, technology education, community empowerment, digital literacy, ethical AI"
---

# About Us

## Our Mission

At KI-KL e.V., we believe that AI education should be accessible to everyone. We're committed to:

- Making technology education accessible and understandable
- Protecting communities through knowledge and skill development
- Creating practical, hands-on learning experiences
- Building an inclusive, supportive learning environment

## Why We Exist

The rapid advancement of AI technology brings both opportunities and challenges. We exist to:

1. **Bridge the Knowledge Gap**
   - Make AI concepts understandable for everyone
   - Provide practical, real-world applications
   - Break down complex topics into digestible pieces

2. **Empower Communities**
   - Help individuals adapt to technological changes
   - Build skills for the future of work
   - Create supportive learning networks

3. **Promote Ethical AI**
   - Advocate for transparent AI development
   - Support ethical technology practices
   - Ensure AI serves the public good

## Our Approach

We focus on practical, hands-on learning:

- Interactive workshops
- Real-world projects
- Community-driven initiatives
- Multilingual resources
- Open-source tools





**
deployment instructions for IONOS:**

Prepare for Deployment
bash
CopyInsert
# Install dependencies
npm install

# Run the deployment script
./deploy.sh
IONOS Deployment Steps
Log in to your IONOS Control Panel
Go to the Hosting section
Select your domain (ki-kl.org)
Upload the generated deploy.tar.gz file
Configure your domain settings:
Point your domain to the IONOS nameservers
Set up SSL certificate (available through IONOS)
Environment Variables Set these in your IONOS Control Panel:
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://ki-kl.org
DNS Configuration Create these DNS records:
Code
CopyInsert
A     @     [IONOS IP]
CNAME www   @
Post-Deployment
Verify the site is accessible at https://ki-kl.org
Test the contact form
Check all language versions
Verify SSL certificate is working
Maintenance To update the site:
Make your changes locally
Test with npm run dev
Run ./deploy.sh
Upload the new deploy.tar.gz to IONOS
Important Notes:

The contact form is ready for integration with an email service
All static assets are optimized for production
The site is configured for German and English, ready for more languages
SSL is mandatory for the contact form to work
