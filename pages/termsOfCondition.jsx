// pages/terms-of-service.js
import Layout from '../components/layout';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService = () => {
  const effectiveDate = 'June 1, 2024'; // Set your effective date here
  const yourName = 'Jisoo An'; // Set your name here
  const depositPercentage = 50; // Set your deposit percentage here
  const revisionNumber = 1; // Set your number of included revisions here
  const governingLaw = 'Sydney, Australia'; // Set your governing law state/country here
  const email = 'seosydneyweb@gmail.com'; // Set your contact email here

  return (
    <Layout>
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Effective Date: {effectiveDate}
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to {yourName}'s Freelance Web Development and Design services. These Terms of Service ("Terms") govern your use of our services. By using our services, you agree to these Terms.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Services Provided
        </Typography>
        <Typography variant="body1" paragraph>
          Web Development: Custom website creation, including front-end and back-end development.
        </Typography>
        <Typography variant="body1" paragraph>
          Web Design: Custom website design, including UX/UI design.
        </Typography>
        <Typography variant="body1" paragraph>
          Maintenance and Support: Ongoing website maintenance and support services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Client Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          Provide accurate and complete information required for project completion.
        </Typography>
        <Typography variant="body1" paragraph>
          Respond to requests for feedback and approval in a timely manner.
        </Typography>
        <Typography variant="body1" paragraph>
          Ensure all content provided is legal and does not infringe on the rights of third parties.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Payments
        </Typography>
        <Typography variant="body1" paragraph>
          A deposit of {depositPercentage}% is required before project commencement.
        </Typography>
        <Typography variant="body1" paragraph>
          Final payment is due upon project completion and before the website is transferred to the client's server.
        </Typography>
        <Typography variant="body1" paragraph>
          Additional costs for third-party services (e.g., hosting, domain registration) are the responsibility of the client.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Revisions
        </Typography>
        <Typography variant="body1" paragraph>
          Up to {revisionNumber} revisions are included per project phase.
        </Typography>
        <Typography variant="body1" paragraph>
          Additional revisions may incur extra charges.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Cancellation and Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          Cancellations must be made in writing.
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds of deposits are not provided for cancellations made after project commencement.
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds are not provided for completed work.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          Upon full payment, the client is granted full ownership of the completed website.
        </Typography>
        <Typography variant="body1" paragraph>
          {yourName} retains the right to display the completed work in a portfolio.
        </Typography>

        <Typography variant="h5" gutterBottom>
          7. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          {yourName} is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          8. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms are governed by the laws of {governingLaw}.
        </Typography>

        <Typography variant="h5" gutterBottom>
          9. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions about these Terms, please contact us at <a href={`mailto:${email}`}>{email}</a>.
        </Typography>
      </Box>
    </Container>
    </Layout>
  );
};

export default TermsOfService;
