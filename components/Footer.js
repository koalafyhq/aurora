const { default: Link } = require("next/link");

const Footer = () => {
  return (
    <footer className="footer">
      Powered by ⚡️{" "}
      <Link href="https://koalafyhq.com">
        <a target="_blank">Koalafy</a>
      </Link>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
