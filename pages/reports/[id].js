import Head from "next/head";
import Link from "next/link";
import Error from "next/error";

import Card from "../../components/Card";
import Metric from "../../components/Metric";
import Subtitle from "../../components/Subtitle";
import Footer from "../../components/Footer";

const Report = ({ reports, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
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

        <div className="w100 column">
          <Subtitle title="Performance Metrics" subtitle="in last 7 days" />
          <Card isRectangle>
            <div className="layout row wrap auto">
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="Performance"
                  value={reports.performanceScore.perf}
                  infoSlug="performance"
                />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="PWA"
                  value={reports.performanceScore.pwa}
                  infoSlug="pwa"
                />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="Accessibility"
                  value={reports.performanceScore.accessibility}
                  infoSlug="accessibility"
                />
              </div>
              <div className="flex metric__wrapper column-3">
                <Metric
                  type="SEO"
                  value={reports.performanceScore.seo}
                  infoSlug="fid"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="w100 column">
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
        .main {
          width: 1024px;
        }
        .layout {
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
          flex: 0 1 auto;
        }
        .w100 {
          width: 100%;
        }

        @media screen and (min-width: 640px) {
          .column-3 {
            flex: 1 1 21%;
          }
          .flex.sm4 {
            flex-basis: 33%;
            flex-grow: 0;
          }
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://aurora-api.koalafy.dev/reports/${id}`);
  const reports = await res.json();
  const errorCode = res.status === 200 ? false : res.status;
  return {
    props: {
      reports,
      errorCode,
    },
  };
}

export default Report;
