// pages/privacy-policy.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  const effectiveDate = 'June 1, 2024'; // Set your effective date here
  const yourName = 'John Doe'; // Set your name here
  const email = 'your.email@example.com'; // Set your contact email here

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Effective Date: {effectiveDate}
        </Typography>
        <Typography variant="body1" paragraph>
          At {yourName}, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your information.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Information Collection
        </Typography>
        <Typography variant="body1" paragraph>
          Personal Information: We collect personal information you provide to us, such as your name, email address, phone number, and billing information.
        </Typography>
        <Typography variant="body1" paragraph>
          Usage Data: We collect information about how you use our website and services, such as your IP address, browser type, and pages visited.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Use of Information
        </Typography>
        <Typography variant="body1" paragraph>
          To provide and maintain our services.
        </Typography>
        <Typography variant="body1" paragraph>
          To communicate with you, including sending updates and marketing materials.
        </Typography>
        <Typography variant="body1" paragraph>
          To process payments and manage your account.
        </Typography>
        <Typography variant="body1" paragraph>
          To improve our services and website performance.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies to enhance your experience on our website. You can control the use of cookies through your browser settings.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Data Sharing
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or rent your personal information to third parties.
        </Typography>
        <Typography variant="body1" paragraph>
          We may share your information with third-party service providers who assist us in operating our business, provided they agree to keep your information confidential.
        </Typography>
        <Typography variant="body1" paragraph>
          We may disclose your information if required by law or to protect our rights.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to access, update, or delete your personal information.
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to opt-out of receiving marketing communications from us.
        </Typography>

        <Typography variant="h5" gutterBottom>
          7. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.
        </Typography>

        <Typography variant="h5" gutterBottom>
          8. Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
        </Typography>

        <Typography variant="h5" gutterBottom>
          9. Changes to This Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
        </Typography>

        <Typography variant="h5" gutterBottom>
          10. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${email}`}>{email}</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
