import Head from "next/head";

import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Measure the right metrics.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="home__wrapper">
          <div className="left">
            <h2 className="home__title">Measure the right metrics.</h2>
            <p className="home__description">
              Get important metrics of your website from Web Vitals, SSL
              Ceritifcate expiration, server uptime & latencies—right in your
              browser
            </p>
            <div className="home__button">
              <Button href="/contact">Contact</Button>
              <Button
                filled={true}
                href="/reports/28f55853-241d-46c7-9b60-9d4ff911bb00"
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="right">
            <img src="/analysis.png" alt="Measure the right metrics" />
          </div>
        </div>
      </main>

      <Footer isHome={true} />

      <style jsx>{`
        .container {
          background: linear-gradient(
            0.93deg,
            #be03fd -20.56%,
            rgba(48, 0, 205, 0.51) 104.42%,
            rgba(190, 3, 253, 0) 104.43%
          );
          padding: 2rem;
        }
        .main {
          width: var(--breakpoint-xl);
          padding-top: 3rem;
        }
        img {
          margin: auto;
          display: block;
          max-width: 100%;
        }
        .home__wrapper {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .home__title {
          font-weight: bold;
          font-size: 3rem;
          color: var(--color-yellow);
          text-align: center;
        }
        .home__description {
          font-size: 1rem;
          margin-top: 1rem;
          line-height: 1.7rem;
          color: var(--color-yellow);
          text-align: center;
        }
        .home__button {
          text-align: center;
        }
        .home__button a {
          margin-right: 0;
        }
        .home__wrapper > div {
          flex: 1;
        }
        .right {
          display: none;
        }

        @media (min-width: 600px) {
          .home__wrapper {
            flex-direction: row;
          }
          .home__title {
            font-size: 4rem;
            text-align: left;
          }
          .home__description {
            font-size: 1.3rem;
            text-align: left;
          }
          .home__button {
            text-align: left;
          }
          .home__button a {
            margin-right: 0;
          }
          .home__wrapper > div {
            flex: 1;
          }
          .right {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

//Still wait for the backend
// export async function getStaticProps() {

//   const res = await fetch("https://.../posts");
//   const reports = await res.json();

//   return {
//     props: {
//       reports,
//     },
//   };
// }

export default Home;
