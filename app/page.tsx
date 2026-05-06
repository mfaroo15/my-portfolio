export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(to right, #f3f3f3, #e9e9e9)",
        minHeight: "100vh",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "62px",
            fontWeight: 700,
            marginBottom: "60px",
          }}
        >
          Muhammad Farooq Ibrahim
        </h1>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.8,
            marginBottom: "45px",
          }}
        >
          I am in Chicago, Illinois, originally from Karachi, Pakistan.
        </p>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.8,
            marginBottom: "45px",
          }}
        >
          My interests include spending quality time with family and friends.
        </p>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}
        >
          I am interested in business, politics, sports, and emerging
          technologies.
        </p>

        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            marginBottom: "50px",
          }}
        >
          Work Experience:
        </h2>

        <div style={{ marginBottom: "45px" }}>
          <p style={{ fontSize: "28px", fontWeight: 700 }}>
            — Student Assistant
          </p>

          <p style={{ fontSize: "24px", marginTop: "10px" }}>
            DePaul University, Lincoln Park
          </p>
        </div>

        <div style={{ marginBottom: "45px" }}>
          <p style={{ fontSize: "28px", fontWeight: 700 }}>
            — Cybersecurity and Technology Intern
          </p>

          <p style={{ fontSize: "24px", marginTop: "10px" }}>
            Enterprise Network Technology
          </p>
        </div>

        <div style={{ marginBottom: "45px" }}>
          <p style={{ fontSize: "28px", fontWeight: 700 }}>
            — Technology Intern
          </p>

          <p style={{ fontSize: "24px", marginTop: "10px" }}>
            PBS Distribution
          </p>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <p style={{ fontSize: "28px", fontWeight: 700 }}>
            — President of DePaul Crypto Club
          </p>

          <p style={{ fontSize: "24px", marginTop: "10px" }}>
            Co-founder and President, DePaul Crypto Club
          </p>
        </div>

        <div style={{ marginBottom: "70px" }}>
          <h3
            style={{
              fontSize: "38px",
              fontWeight: 700,
              marginBottom: "30px",
            }}
          >
            Connect with me:
          </h3>

          <div style={{ marginBottom: "18px", fontSize: "24px" }}>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/m-farooq15"
              target="_blank"
              style={{
                color: "#111",
                textDecoration: "underline",
              }}
            >
              linkedin.com/in/m-farooq15
            </a>
          </div>

          <div style={{ fontSize: "24px" }}>
            <strong>Twitter:</strong>{" "}
            <a
              href="https://twitter.com/imfarooqibrahim"
              target="_blank"
              style={{
                color: "#111",
                textDecoration: "underline",
              }}
            >
              twitter.com/imfarooqibrahim
            </a>
          </div>
        </div>

        <p
          style={{
            fontSize: "20px",
            margin: 0,
            fontWeight: 500,
          }}
        >
          FAROOQ
        </p>
      </section>
    </main>
  );
}