const Card = ({ children, isRectangle }) => {
  return (
    <div className={`card ${isRectangle ? "rectangle" : ""}`}>
      <div className="card__wrapper">{children}</div>
      <style jsx>{`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          background: var(--color-secondary);
          padding: 1rem;
          border-radius: 10px;
          border-width: thin;
          display: block;
          max-width: 100%;
          outline: none;
          transition-property: box-shadow, opacity;
          position: relative;
          min-width: 150px;
        }

        @media screen and (min-width: 640px) {
          .card__wrapper {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
