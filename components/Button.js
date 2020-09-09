import Link from "next/link";

const Button = ({ filled, children, href }) => {
  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          margin-top: 2rem;
          display: inline-block;
          font-family: inherit;
          font-size: 1.3rem;
          font-weight: bold;
          color: ${filled ? "var(--color-purple)" : "var(--color-yellow)"};
          letter-spacing: 1px;
          padding: 15px 20px;
          border-radius: 3px;
          background-color: ${filled ? "var(--color-white)" : "transparent"};
          border: 1px solid var(--color-white);
          box-shadow: ${filled ? "0 4px 8px rgba(0, 0, 0, 0.4)" : ""};
          transition: 0.3s all;
          text-transform: uppercase;
          width: 100%;
        }

        a:hover {
          cursor: pointer;
          transform: translate(0, -3px);
        }

        @media (min-width: 600px) {
          a {
            margin-right: 2rem;
            width: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Button;
