export default function Home() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .main-container {
            padding: 18px 16px !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-y: auto !important;
          }

          .main-title {
            font-size: 24px !important;
            line-height: 1.02 !important;
            margin-bottom: 14px !important;
            max-width: 230px !important;
          }

          .bismillah {
            position: absolute !important;
            top: 16px !important;
            right: 14px !important;
            width: 155px !important;
            text-align: center !important;
            z-index: 9999 !important;
          }

          .bismillah-arabic {
            font-size: 14px !important;
            line-height: 1 !important;
            white-space: nowrap !important;
            margin-bottom: 4px !important;
          }

          .bismillah-english {
            font-size: 7px !important;
            line-height: 1.15 !important;
            font-style: italic !important;
          }

          .bottom-grid {
            display: block !important;
          }

          .signature {
            font-family: Arial, sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 18px !important;
          }

          .intro-text,
          .project-text,
          .work-text,
          .connect-text {
            font-size: 11px !important;
          }

          .section-heading {
            font-size: 17px !important;
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
        <section style={{ maxWidth: "1100px", width: "100%" }}>
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
            style={{
              position: "absolute",
              top: "26px",
              right: "60px",
              textAlign: "center",
              maxWidth: "230px",
              zIndex: 9999,
            }}
          >
            <div
              className="bismillah-arabic"
              style={{
                fontSize: "32px",
                fontFamily: "serif",
                lineHeight: "1.1",
                marginBottom: "6px",
                whiteSpace: "nowrap",
              }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>

            <div
              className="bismillah-english"
              style={{
                fontSize: "11px",
                fontStyle: "italic",
                lineHeight: "1.35",
              }}
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
              maxWidth: "760px",
            }}
          >
            <p style={{ margin: "0 0 7px 0" }}>
              I’m based in Chicago, Illinois, and I’m a proud Pakistani.
              Experiencing different cultures has helped me develop adaptability,
              communication skills, and a global perspective toward people and
              opportunities.
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

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #999",
              margin: "7px 0",
              maxWidth: "760px",
            }}
          />

          <div
            style={{
              borderLeft: "3px solid #1f4f9a",
              paddingLeft: "10px",
              margin: "9px 0 10px 0",
              fontSize: "11.5px",
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: "1.25",
              maxWidth: "760px",
            }}
          >
            Building AI-powered workspace systems for productivity,
            cybersecurity, documentation, and workflow automation.
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #999",
              margin: "7px 0",
              maxWidth: "760px",
            }}
          />

          <h2
            className="section-heading"
            style={{
              fontSize: "17px",
              margin: "0 0 5px 0",
              fontWeight: 900,
            }}
          >
            MFI Nexus AI
          </h2>

          <div
            className="project-text"
            style={{
              fontSize: "10.5px",
              lineHeight: "1.25",
              maxWidth: "900px",
            }}
          >
            <p style={{ margin: "0 0 8px 0" }}>
              A custom-built AI workspace platform designed for productivity,
              cybersecurity workflows, professional documentation, meetings,
              research, and workplace support. MFI Nexus AI combines cloud-based
              large language models (LLMs), voice transcription, intelligent
              automation workflows, and contextual document processing to assist
              with professional and technical tasks in a unified workspace
              environment.
            </p>

            <p style={{ margin: "0 0 8px 0" }}>
              The platform currently supports AI-powered conversation, PDF and
              Word document analysis, meeting transcription and summarization,
              professional email drafting, cybersecurity documentation, IT
              documentation, IT audit support, research assistance, and workflow
              automation.
            </p>

            <p style={{ margin: 0 }}>
              MFI Nexus AI currently runs through my local system and is
              available for limited testing access when the system is active. If
              you’re interested in trying it, feel free to request access by
              email.
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #999",
              margin: "10px 0",
              maxWidth: "760px",
            }}
          />

          <div
            className="bottom-grid"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px",
              maxWidth: "900px",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                className="section-heading"
                style={{
                  fontSize: "18px",
                  margin: "0 0 5px 0",
                  fontWeight: 900,
                }}
              >
                Work Experience:
              </h2>

              <div
                className="work-text"
                style={{
                  fontSize: "10.5px",
                  lineHeight: "1.18",
                }}
              >
                <div style={{ marginBottom: "4px" }}>
                  <strong>— Student Assistant</strong>
                  <br />
                  DePaul University, Lincoln Park
                </div>

                <div style={{ marginBottom: "4px" }}>
                  <strong>— Cybersecurity and Technology Intern</strong>
                  <br />
                  Enterprise Network Technology
                </div>

                <div style={{ marginBottom: "4px" }}>
                  <strong>— Technology Analyst</strong>
                  <br />
                  PBS Distribution
                </div>

                <div>
                  <strong>— President of DePaul Crypto Club</strong>
                  <br />
                  Co-founder and President, DePaul Crypto Club
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <h2
                className="section-heading"
                style={{
                  fontSize: "18px",
                  margin: "0 0 5px 0",
                  fontWeight: 900,
                }}
              >
                Connect with me:
              </h2>

              <div
                className="connect-text"
                style={{
                  fontSize: "10.5px",
                  lineHeight: "1.4",
                }}
              >
                <div>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://linkedin.com/in/m-farooq15"
                    target="_blank"
                    style={{ color: "#1a4fb8" }}
                  >
                    linkedin.com/in/m-farooq15
                  </a>
                </div>

                <div>
                  <strong>Twitter:</strong>{" "}
                  <a
                    href="https://twitter.com/imfarooqibrahim"
                    target="_blank"
                    style={{ color: "#1a4fb8" }}
                  >
                    twitter.com/imfarooqibrahim
                  </a>
                </div>

                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:thefarooqibrahim@gmail.com"
                    style={{ color: "#1a4fb8" }}
                  >
                    thefarooqibrahim@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="signature"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  marginTop: "14px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Farooq
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}