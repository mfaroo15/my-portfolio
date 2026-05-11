export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #f4f4f4, #e8e8e8)",
        fontFamily: "Arial, sans-serif",
        color: "#111",
        padding: "24px 60px",
        boxSizing: "border-box",
      }}
    >
      <section style={{ maxWidth: "760px" }}>
        <h1
          style={{
            fontSize: "54px",
            fontWeight: 900,
            lineHeight: "0.95",
            margin: "0 0 18px 0",
            letterSpacing: "-2px",
          }}
        >
          Muhammad
          <br />
          Farooq Ibrahim
        </h1>

        <div style={{ fontSize: "13px", lineHeight: "1.42", marginBottom: "12px" }}>
          <p style={{ margin: "0 0 8px 0" }}>
            I’m based in Chicago, Illinois, and originally from Karachi, Pakistan.
            Experiencing different cultures has helped me develop adaptability,
            communication skills, and a broad perspective toward people and opportunities.
          </p>

          <p style={{ margin: "0 0 8px 0" }}>
            I enjoy spending quality time with family and friends and have strong
            interests in business, politics, sports, emerging technologies, and cryptocurrency.
          </p>

          <p style={{ margin: 0 }}>
            I’m naturally curious, growth-oriented, and always eager to learn from
            new ideas, experiences, and innovation shaping the future.
          </p>
        </div>

        <div
          style={{
            borderLeft: "4px solid #1f4f9a",
            paddingLeft: "14px",
            margin: "12px 0 14px 0",
            fontSize: "14px",
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: "1.35",
          }}
        >
          Building local LLM-powered AI systems for cybersecurity,
          productivity, and workflow automation.
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #bbb", margin: "10px 0" }} />

        <h2 style={{ fontSize: "22px", margin: "0 0 4px 0", fontWeight: 900 }}>
          MFI GPT
        </h2>

        <p style={{ fontSize: "12.5px", lineHeight: "1.35", margin: "0 0 7px 0" }}>
          A personalized local AI assistant designed for productivity, cybersecurity workflows,
          documentation, meetings, and workplace support. Built around open-source LLM systems
          and improved through customized workflows and contextual learning.
        </p>

        <p style={{ fontSize: "12.5px", lineHeight: "1.35", margin: "0 0 8px 0" }}>
          MFI GPT currently runs through my local system and is available for limited testing
          access when the system is active. Request access by email.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #bbb", margin: "9px 0" }} />

        <h2 style={{ fontSize: "24px", margin: "0 0 7px 0", fontWeight: 900 }}>
          Work Experience:
        </h2>

        <div style={{ fontSize: "12.5px", lineHeight: "1.25", marginBottom: "10px" }}>
          <div style={{ marginBottom: "5px" }}>
            <strong>— Student Assistant</strong>
            <br />
            DePaul University, Lincoln Park
          </div>

          <div style={{ marginBottom: "5px" }}>
            <strong>— Cybersecurity and Technology Intern</strong>
            <br />
            Enterprise Network Technology
          </div>

          <div style={{ marginBottom: "5px" }}>
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

        <h2 style={{ fontSize: "22px", margin: "0 0 5px 0", fontWeight: 900 }}>
          Connect with me:
        </h2>

        <div style={{ fontSize: "12.5px", lineHeight: "1.35" }}>
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

        <p style={{ margin: "8px 0 0 0", fontSize: "12.5px" }}>FAROOQ</p>
      </section>
    </main>
  );
}