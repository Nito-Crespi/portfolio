import React from "react";
import "./DownloadButton.css";

interface DownloadButtonProps {
  name: string;
  iconPath: string;
  filePath: string;
  downloadName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  name,
  iconPath,
  filePath,
  downloadName,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}${filePath}`;
    link.download = downloadName;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="btn d-inline-flex align-items-center download-button"
      style={{
        background: "#28a745",
        borderColor: "#28a745",
        color: "white",
        marginRight: "5px",
        marginBottom: "5px",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}${iconPath}`}
        alt={name}
        width="24"
        height="24"
        className="me-2"
      />
      {name}
    </button>
  );
};

export default DownloadButton;
