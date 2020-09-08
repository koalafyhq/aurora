import Head from "next/head";
import Link from "next/link";

import Card from "../components/Card";
import Metric from "../components/Metric";
import Subtitle from "../components/Subtitle";
import Footer from "../components/Footer";

const Home = () => {
  const reports = {
    id: "28f55853-241d-46c7-9b60-9d4ff911bb00",
    checkedAt: 1599407280277,
    domain: "koalafyhq.com",
    url: "https://koalafyhq.com/",
    performanceScore: {
      perf: 90,
      seo: 90,
      pwa: 90,
      accessibility: 90,
    },
    webVitals: {
      lcp: {
        numericDisplay: 284.5471,
        displayValue: "0.3s",
      },
      cls: {
        numericDisplay: 0.38647217698391845,
        displayValue: "0.386",
      },
      fid: {
        numericDisplay: 284.5471,
        displayValue: "0.3s",
      },
    },
  };

  return (
    <div className="container">
      <Head>
        <title>Koalafy performance status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h2 className="main__title">
          Insights for{" "}
          <Link href={reports.url}>
            <a target="_blank">{reports.domain}</a>
          </Link>
        </h2>

        <div className="auto column">
          <Subtitle title="Performance Metrics" subtitle="in last 7 days" />
          <Card isRectangle>
            <div className="layout row wrap auto">
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="Performance"
                  value={reports.performanceScore.perf}
                />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric type="PWA" value={reports.performanceScore.pwa} />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="Accessibility"
                  value={reports.performanceScore.accessibility}
                />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric type="SEO" value={reports.performanceScore.seo} />
              </div>
            </div>
          </Card>
        </div>

        <div className="auto column">
          <Subtitle
            title="Web Vitals Metrics"
            subtitle="in last 7 days"
            isWebVitals={true}
          />
          <div className="layout row wrap auto">
            <div className="flex sm4">
              <Card>
                <Metric
                  type="Largest Contentful Paint"
                  value={reports.webVitals.lcp.displayValue}
                />
              </Card>
            </div>
            <div className="flex sm4">
              <Card>
                <Metric
                  type="Content Layout Shift"
                  value={reports.webVitals.cls.displayValue}
                />
              </Card>
            </div>
            <div className="flex sm4">
              <Card>
                <Metric
                  type="First Input Delay"
                  value={reports.webVitals.fid.displayValue}
                />
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .layout {
          border-bottom-left-radius: inherit;
          border-bottom-right-radius: inherit;
          align-items: center;
          justify-content: center;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          flex: 1 1 auto;
          margin-right: -12px;
          margin-left: -12px;
        }
        .wrap {
          flex-wrap: wrap;
        }
        .flex {
          flex: 1 1 auto;
          max-width: 100%;
          padding: 1rem;
        }
        .metric__wrapper {
          margin: 0 12px;
          padding: 12px;
        }
        .column {
          padding: 1rem;
        }
        .column-3 {
          width: 40%;
        }

        @media screen and (min-width: 640px) {
          .column-3 {
            width: 21%;
          }
          .flex.sm4 {
            flex-basis: 33.3333333333%;
            flex-grow: 0;
            max-width: 33.3333333333%;
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
