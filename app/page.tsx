export default function Home() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .main-container {
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            align-items: stretch !important;
            padding: 18px 16px !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-y: auto !important;
          }

          .main-title {
            font-size: 28px !important;
            line-height: 1.05 !important;
            max-width: none !important;
            margin-bottom: 8px !important;
          }

          .bismillah {
            display: block !important;
            position: absolute !important;
            top: 18px !important;
            right: 16px !important;
            width: auto !important;
            max-width: 210px !important;
            text-align: right !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
            border: none !important;
            z-index: 9999 !important;
          }

          .bismillah-arabic {
            font-size: 22px !important;
            line-height: 1.1 !important;
            margin-bottom: 4px !important;
          }

          .bismillah-english {
            font-size: 10px !important;
            line-height: 1.3 !important;
          }

          .content-section {
            max-width: 100% !important;
            width: 100% !important;
          }

          .intro-text,
          .project-text,
          .work-text,
          .connect-text,
          .sign-text {
            font-size: 12px !important;
          }

          .quote-box {
            font-size: 11px !important;
            margin: 10px 0 !important;
          }

          .section-heading {
            font-size: 16px !important;
            margin-bottom: 4px !important;
          }

          .small-line {
            margin-bottom: 4px !important;
          }
        }

        @media (min-width: 769px) {
          .bismillah {
            position: absolute !important;
            top: 26px !important;
            right: 60px !important;
            text-align: center !important;
            max-width: 230px !important;
            z-index: 9999 !important;
          }

          .bismillah-arabic {
            font-size: 32px !important;
            font-family: serif !important;
            line-height: 1.1 !important;
            margin-bottom: 6px !important;
          }

          .bismillah-english {
            font-size: 11px !important;
            font-style: italic !important;
            line-height: 1.35 !important;
          }
        }
      `}</style>

      <main
        className="main-container"
        style={{
          minHeight: "100vh",
          overflowY: "auto",
          background: "linear-gradient(to bottom right, #f4f4f4, #e8e8e8)",
          fontFamily: "Arial, sans-serif",
          color: "#111",
          padding: "16px 52px",
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
        }}
      >
        <section className="content-section" style={{ maxWidth: "760px", width: "100%" }}>
          <h1
            className="main-title"
            style={{
              fontSize: "42px",
              fontWeight: 900,
              lineHeight: "0.95",
              margin: "0 0 12px 0",
              letterSpacing: "-1.5px",
            }}
          >
            Muhammad
            <br />
            Farooq Ibrahim
          </h1>

          <div
            className="bismillah"
          >
            <div
              className="bismillah-arabic"
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>

            <div
              className="bismillah-english"
            >
              In the name of Allah, the Most
              <br />
              Gracious, the Most Merciful
            </div>
          </div>

          <div
            className="intro-text"
            style={{
              fontSize: "11px",
              lineHeight: "1.32",
              marginBottom: "10px",
            }}
          >
            <p style={{ margin: "0 0 7px 0" }}>
              I’m based in Chicago, Illinois, and originally from Karachi,
              Pakistan. Experiencing different cultures has helped me develop
              adaptability, communication skills, and a broad perspective toward
              people and opportunities.
            </p>

            <p style={{ margin: "0 0 7px 0" }}>
              I enjoy spending quality time with family and friends and have
              strong interests in business, politics, sports, emerging
              technologies, and cryptocurrency.
            </p>

            <p style={{ margin: 0 }}>
              I’m naturally curious, growth-oriented, and always eager to learn
              from new ideas, experiences, and innovation shaping the future.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #bbb", margin: "7px 0" }} />

          <div
            className="quote-box"
            style={{
              borderLeft: "3px solid #1f4f9a",
              paddingLeft: "10px",
              margin: "9px 0 10px 0",
              fontSize: "11.5px",
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: "1.25",
            }}
          >
            Building local LLM-powered AI systems for cybersecurity,
            productivity, and workflow automation.
          </div>

          <h2 className="section-heading" style={{ fontSize: "17px", margin: "0 0 3px 0", fontWeight: 900 }}>
            MFI GPT
          </h2>

          <p className="project-text" style={{ fontSize: "10.5px", lineHeight: "1.25", margin: "0 0 5px 0" }}>
            A personalized local AI assistant designed for personal productivity,
            cybersecurity workflows, documentation, meetings, and workplace
            support. Built around open-source LLM systems and continuously
            improved through customized workflows, contextual learning, and
            user-specific requirements.
          </p>

          <p className="project-text" style={{ fontSize: "10.5px", lineHeight: "1.25", margin: "0 0 6px 0" }}>
            MFI GPT currently runs through my local system and is available for
            limited testing access when the system is active. If you’re
            interested in trying it, feel free to request access by email.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #bbb", margin: "7px 0" }} />

          <h2 className="section-heading" style={{ fontSize: "18px", margin: "0 0 5px 0", fontWeight: 900 }}>
            Work Experience:
          </h2>

          <div className="work-text" style={{ fontSize: "10.5px", lineHeight: "1.18", marginBottom: "7px" }}>
            <div className="small-line" style={{ marginBottom: "4px" }}>
              <strong>— Student Assistant</strong>
              <br />
              DePaul University, Lincoln Park
            </div>

            <div className="small-line" style={{ marginBottom: "4px" }}>
              <strong>— Cybersecurity and Technology Intern</strong>
              <br />
              Enterprise Network Technology
            </div>

            <div className="small-line" style={{ marginBottom: "4px" }}>
              <strong>— Technology Intern</strong>
              <br />
              PBS Distribution
            </div>

            <div>
              <strong>— President of DePaul Crypto Club</strong>
              <br />
              Co-founder and President, DePaul Crypto Club
            </div>
          </div>

          <h2 className="section-heading" style={{ fontSize: "17px", margin: "0 0 3px 0", fontWeight: 900 }}>
            Connect with me:
          </h2>

          <div className="connect-text" style={{ fontSize: "10.5px", lineHeight: "1.25" }}>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/m-farooq15" target="_blank" style={{ color: "#153f8f" }}>
                linkedin.com/in/m-farooq15
              </a>
            </div>

            <div>
              <strong>Twitter:</strong>{" "}
              <a href="https://twitter.com/imfarooqibrahim" target="_blank" style={{ color: "#153f8f" }}>
                twitter.com/imfarooqibrahim
              </a>
            </div>

            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:thefarooqibrahim@gmail.com" style={{ color: "#153f8f" }}>
                thefarooqibrahim@gmail.com
              </a>
            </div>
          </div>

          <p className="sign-text" style={{ margin: "5px 0 0 0", fontSize: "10.5px" }}>
            FAROOQ
          </p>
        </section>
      </main>
    </>
  );
}