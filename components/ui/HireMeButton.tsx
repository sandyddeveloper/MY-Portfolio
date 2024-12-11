import React from "react";

const HireMeButton: React.FC = () => {
  const handleEmailRedirect = () => {
    const email = "santhoshrajk1812@gmail.com";
    const subject = "Hiring Inquiry";
    const body = `Hi Santhoshrajk,

I would like to hire you for...

Here are the details of my project:

[Add project details here]

Best regards,
[Your Name]`;

    // Encode the email parameters
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleEmailRedirect}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
      }}
    >
      Hire Me
    </button>
  );
};

export default HireMeButton;
