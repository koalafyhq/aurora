const { default: Link } = require("next/link");

const Footer = ({ isHome }) => {
  return (
    <footer className="footer">
      {isHome ? (
        "Brought to you by someone who cares"
      ) : (
        <>
          Powered by ⚡️
          <Link href="https://koalafyhq.com">
            <a target="_blank">Koalafy</a>
          </Link>
        </>
      )}
      <style jsx>{`
        .footer {
          height: 50px;
          border-top: ${isHome ? "" : "1px solid #eaeaea"};
          display: flex;
          justify-content: center;
          align-items: ${isHome ? "" : "center"};
          color: ${isHome ? "var(--color-yellow)" : ""};
          width: var(--breakpoint-xl);
          max-width: 100%;
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
