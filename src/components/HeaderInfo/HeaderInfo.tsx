import useLanguage from "../../hook/useLanguage";
import DownloadButton from "../DownloadButton/DownloadButton";
import SocialButton from "../SocialButton/SocialButton";

const HeaderInfo: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();

  return (  // Añade 'return' aquí
    <div className="profile_container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/cv/profile_photo.png`}
        alt="Profile photo"
        className="profile_photo"
      />
      <div className="profile_text">
        <h1>Álvaro Crespi Liut</h1>
        <p>
          <span>
            {isSpanish
              ? "Desarrollador Full-Stack | Ofreciendo soluciones de software de calidad."
              : "Full-Stack Developer | Delivering Quality Software Solutions."}
          </span>
        </p>
        <div>
          <SocialButton
            url="https://www.linkedin.com/in/nito-crespi/"
            name="LinkedIn"
            iconPath="/assets/icons/linkedin.svg"
            backgroundColor="#0077B5"
          />
          <SocialButton
            url="https://github.com/Nito-Crespi"
            name="GitHub"
            iconPath="/assets/icons/github-white.svg"
            backgroundColor="#333"
          />
          <DownloadButton
            name="Curriculum Vitae"
            iconPath="/assets/icons/document-pdf.svg"
            filePath={
              isSpanish
                ? "/assets/files/Alvaro Crespi Liut - Currículum Vitae ES.pdf"
                : "/assets/files/Alvaro Crespi Liut - Currículum Vitae EN.pdf"
            }
            downloadName={
              isSpanish
                ? "Alvaro Crespi Liut - Currículum Vitae ES.pdf"
                : "Alvaro Crespi Liut - Currículum Vitae EN.pdf"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
