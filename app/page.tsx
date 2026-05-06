export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f3f3f3, #e9e9e9)",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "680px",
          padding: "28px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 24px 0",
            fontWeight: 800,
            letterSpacing: "-0.4px",
          }}
        >
          Muhammad Farooq Ibrahim
        </h1>

        <div style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "28px" }}>
          <p style={{ margin: "0 0 8px 0" }}>
            I am in Chicago, Illinois, originally from Karachi, Pakistan.
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            My interests include spending quality time with family and friends.
          </p>
          <p style={{ margin: 0 }}>
            I am interested in business, politics, sports, and emerging technologies.
          </p>
        </div>

        <h2 style={{ fontSize: "18px", margin: "0 0 16px 0", fontWeight: 800 }}>
          Work Experience:
        </h2>

        <div style={{ fontSize: "15px", lineHeight: "1.45", marginBottom: "24px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
            <span>−</span>
            <div>
              <div style={{ fontWeight: 800 }}>Student Assistant</div>
              <div>DePaul University, Lincoln Park</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
            <span>−</span>
            <div>
              <div style={{ fontWeight: 800 }}>Cybersecurity and Technology Intern</div>
              <div>Enterprise Network Technology</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
            <span>−</span>
            <div>
              <div style={{ fontWeight: 800 }}>Technology Intern</div>
              <div>PBS Distribution</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", marginBottom: "0" }}>
            <span>−</span>
            <div>
              <div style={{ fontWeight: 800 }}>President of DePaul Crypto Club</div>
              <div>Co-founder and President, DePaul Crypto Club</div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "18px" }}>
          <div style={{ fontWeight: 800, marginBottom: "4px" }}>Connect with me:</div>
          <div style={{ marginLeft: "22px" }}>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/m-farooq15"
                target="_blank"
                style={{ color: "#111", textDecoration: "underline" }}
              >
                linkedin.com/in/m-farooq15
              </a>
            </div>
            <div>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/imfarooqibrahim"
                target="_blank"
                style={{ color: "#111", textDecoration: "underline" }}
              >
                twitter.com/imfarooqibrahim
              </a>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "15px", margin: 0, fontWeight: 500 }}>
          FAROOQ
        </p>
      </section>
    </main>
  );
}
