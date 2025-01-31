import * as React from "react";
import styled from "styled-components";

const termsData = [
  {
    title: "Information We Collect",
    content: [
      "Personal details such as your name, email address, phone number, and address.",
      "Payment details for transactions, handled securely through trusted payment gateways.",
      "Information about your preferences or inquiries to better serve your needs.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To process orders, inquiries, or service requests.",
      "To improve our website and services based on user feedback.",
      "To send promotional emails about new products, special offers, or updates (you can opt-out anytime).",
      "To maintain records for legal and regulatory purposes.",
    ],
  },
  {
    title: "Data Security",
    content: [
      <>
        We implement strict security measures to protect your personal
        information from unauthorized access, misuse, or disclosure. Your data
        is stored securely, and sensitive details such as payment information
        are encrypted during transmission.
        <br />
        <br />
        We regularly update our security protocols to stay ahead of potential
        threats and vulnerabilities. Our team is trained to handle your
        information with the utmost care, ensuring that only authorized
        personnel have access to sensitive data. Additionally, we conduct
        frequent audits and vulnerability assessments to identify and address
        any weaknesses in our systems. You can trust that we are committed to
        maintaining your privacy and safeguarding your information at all times.
        Rest assured, we are dedicated to providing a secure environment for
        your interactions with us, prioritizing your trust and confidence above
        all else.
      </>,
    ],
  },
  {
    title: "Third-Party Sharing",
    content: [
      <>
        We do not sell, rent, or share your personal information with third
        parties except as required by law or to provide essential services
        (e.g., delivery or payment processing).
        <br />
        <br />
        We are committed to safeguarding your privacy and ensuring that your
        data is handled responsibly. We implement strict security measures to
        protect your information from unauthorized access, loss, or misuse. In
        instances where we may collaborate with trusted service providers to
        enhance your experience, we ensure that these partners uphold the same
        level of data protection and confidentiality as we do. Your trust is
        paramount, and we strive to be transparent about how your information is
        used, providing you with choices whenever possible. If you have any
        questions or concerns regarding our privacy practices, feel free to
        reach out to us. We are here to assist you and help you understand how
        we protect your personal information.
      </>,
    ],
  },
  {
    title: "Cookies",
    content: [
      <>
        Our website uses cookies to enhance your browsing experience. Cookies
        help us analyze web traffic and improve site functionality. You can
        choose to disable cookies through your browser settings. We value your
        privacy and want to ensure you are informed about how we utilize
        cookies. By using our site, you consent to the use of cookies in
        accordance with our privacy policy. If you prefer not to have cookies
        stored on your device, you can manage your cookie preferences directly
        in your browser's settings.
        <br />
        <br />
        Please note that disabling cookies may affect your experience on our
        website, including limiting certain features and functionalities. We
        appreciate your understanding as we strive to provide a seamless and
        enjoyable browsing experience. If you have any questions or need further
        assistance regarding cookies or our privacy practices, feel free to
        reach out to our support team.
      </>,
    ],
  },
  {
    title: "Your Rights",
    content: (
      <>
        You have the right to:
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Opt out of marketing communications at any time.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    content: [
      <>
        We may update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. Any updates will be posted on this
        page. We encourage you to review this Privacy Policy regularly to stay
        informed about our information practices and the ways you can help
        protect your privacy. Your continued use of our services after such
        changes indicates your acceptance of the new terms.
        <br />
        <br />
        If we make significant changes that affect your rights or our
        obligations, we will provide a more prominent notice, such as a
        notification on our homepage or through a direct communication to you.
        Thank you for taking the time to understand our policies, as your trust
        is important to us.
      </>,
    ],
  },
  {
    title: "Contact Us",
    content: (
      <>
        If you have any questions or concerns about these Terms & Conditions,
        please contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:selvapriyacomputers@gmail.com">
          selvapriyacomputers@gmail.com
        </a>
        <br />
        <strong>Phone:</strong>{" "}
        <a href="tel:+919655926967">+91 - 96559 26967</a>
        <br />
        <br />
        By using our website, you agree to abide by these Terms & Conditions and
        accept them as binding.
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy">
      <PolicyContainer>
        <PolicyHeader />
        <BannerWrapper>
          <BannerImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0120e2174feb954675cf7a0fabf62a49b1b0e287b5969f495ba790c78f83dd1f?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt="Privacy policy illustration"
          />
        </BannerWrapper>
        <ContentContainer>
          {termsData.map((section, index) => (
            <ContentBlock key={index}>
              <BlockTitle>{section.title}</BlockTitle>
              <BlockContent>{section.content}</BlockContent>
            </ContentBlock>
          ))}
        </ContentContainer>
      </PolicyContainer>
    </main>
  );
}

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px; /* Adjust height */
  overflow: hidden; /* Prevents extra spacing */
  margin-top: -180px; /* Moves it up to overlap HeaderSection */
  @media (max-width: 991px) {
    height: 250px;
    margin-top: -60px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px; /* Adjust based on spacing */
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;
const ContentBlock = styled.article`
  margin-bottom: 40px;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const BlockTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
  margin-bottom: 16px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const BlockContent = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const PolicyHeader = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <HeaderTitle>Privacy Policy</HeaderTitle>
      <HeaderDescription>
        At Selvapriya Computers, we are committed to protecting your privacy and
        ensuring your personal information is handled with care. This Privacy
        Policy outlines how we collect, use, and safeguard the data you provide
        when using our website and services.
      </HeaderDescription>
    </HeaderWrapper>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: rgba(207, 230, 242, 1);
  align-self: center;
  z-index: 10;
  display: flex;
  width: 100%;
  max-width: 1239px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 86px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1009px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  align-self: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const HeaderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 36px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

// const PolicySection = ({ title, content }) => (
//   <SectionContainer>
//     <SectionTitle>{title}</SectionTitle>
//     <SectionContent>
//       {content.map((item, index) => (
//         <React.Fragment key={index}>
//           {index === 0 && <br />}
//           {item}
//           <br />
//         </React.Fragment>
//       ))}
//     </SectionContent>
//   </SectionContainer>
// );

// const SectionContainer = styled.article`
//   width: 100%;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 36px;
// `;

// const SectionContent = styled.p`
//   font-size: 20px;
//   font-weight: 400;
//   margin-bottom: 64px;
//   @media (max-width: 991px) {
//     margin-bottom: 40px;
//   }
// `;
