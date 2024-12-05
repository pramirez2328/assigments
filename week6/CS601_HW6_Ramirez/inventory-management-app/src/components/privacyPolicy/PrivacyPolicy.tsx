import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className='privacy-policy'>
      <div className='privacy-policy-container'>
        <h1>Privacy Policy</h1>
        <p>
          At <strong>TechSphere</strong>, your privacy is important to us. This Privacy Policy outlines how we collect,
          use, and protect your information when you use our services or interact with our website.
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identification information (e.g., name, email address, phone number).</li>
          <li>Technical data (e.g., IP address, browser type, device type).</li>
          <li>Usage data (e.g., pages visited, time spent on the site).</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>The information we collect is used to:</p>
        <ul>
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve and personalize your experience.</li>
          <li>Communicate with you about updates, promotions, or support.</li>
        </ul>
        <h2>How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures to ensure the safety of your personal information. These measures
          include encryption, firewalls, and access controls to secure your data.
        </p>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. To exercise these rights, please
          contact us at <strong>support@techsphere.com</strong>.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, so please review
          it periodically.
        </p>
        <p>Thank you for trusting TechSphere. Your privacy is our priority.</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
