import React from "react";
import "./SocialButton.css";

interface SocialButtonProps {
  url: string;
  name: string;
  iconPath: string;
  backgroundColor: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  url,
  name,
  iconPath,
  backgroundColor,
}) => {
  return (
    <a
      href={url}
      className="btn d-inline-flex align-items-center social-button"
      style={{
        background: backgroundColor,
        borderColor: backgroundColor,
        color: "#fff",
        marginRight: "5px",
        marginBottom: "5px",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}${iconPath}`}
        alt={name}
        width="24"
        height="24"
        className="me-2"
      />
      {name}
    </a>
  );
};

export default SocialButton;
