const Metric = ({ value, unit, type }) => {
  return (
    <div className="center">
      <p className="text__value">
        {value} <span className="text__unit">{unit}</span>
      </p>
      <p className="text__type">{type}</p>
      <style jsx>{`
        .text__value {
          color: var(--color-green);
          font-size: 2.5rem;
          display: block;
          margin: 0;
        }
        .text__unit {
          font-size: 1.5rem;
          margin-left: 0.5rem;
          color: white;
        }
        .text__type {
          text-transform: uppercase;
          opacity: 0.5;
          font-size: 0.8rem;
        }
        .center {
          text-align: center;
        }
        @media screen and (min-width: 640px) {
          .text__value {
            font-size: 2rem;
          }
          .text__type {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Metric;
