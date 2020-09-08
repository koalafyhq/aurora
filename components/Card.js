const Card = ({ children, isRectangle }) => {
  return (
    <div className={`card auto ${isRectangle ? "rectangle" : ""}`}>
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
          width: 250px;
          min-width: 150px;
        }
        .rectangle {
          width: 370px;
        }
        .card__wrapper {
          padding: 0.5rem;
        }

        @media screen and (min-width: 640px) {
          .card {
            width: 300px;
          }
          .card__wrapper {
            padding: 1rem;
          }
          .rectangle {
            width: 800px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
