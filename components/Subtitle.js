import Icon from "@mdi/react";
import { mdiLighthouseOn, mdiLightningBolt } from "@mdi/js";

const Subtitle = ({ title, subtitle, isWebVitals = false }) => {
  return (
    <div className="text__title">
      {isWebVitals ? (
        <Icon path={mdiLighthouseOn} size={1} color="green" />
      ) : (
        <Icon path={mdiLightningBolt} size={1} color="green" />
      )}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <style jsx>{`
        .text__title {
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .text__title h3 {
          display: inline-block;
          margin-right: 0.5rem;
        }
        .text__title p {
          display: inline-block;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Subtitle;
