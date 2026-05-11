export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #f4f4f4, #e8e8e8)",
        fontFamily: "Arial, sans-serif",
        color: "#111",
        padding: "28px 46px",
        boxSizing: "border-box",
      }}
    >
      <section style={{ maxWidth: "850px" }}>
        <h1
          style={{
            fontSize: "38px",
            fontWeight: 800,
            margin: "0 0 18px 0",
            lineHeight: "1.05",
          }}
        >
          Muhammad Farooq Ibrahim
        </h1>

        <div
          style={{
            fontSize: "12.5px",
            lineHeight: "1.45",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0 0 8px 0" }}>
            I’m based in Chicago, Illinois, and originally from Karachi, Pakistan.
            Experiencing different cultures has helped me develop adaptability,
            communication skills, and a broad perspective toward people and
            opportunities.
          </p>

          <p style={{ margin: "0 0 8px 0" }}>
            I enjoy spending quality time with family and friends and have strong
            interests in business, politics, sports, emerging technologies, and
            cryptocurrency.
          </p>

          <p style={{ margin: 0 }}>
            I’m naturally curious, growth-oriented, and always eager to learn from
            new ideas, experiences, and innovation shaping the future.
          </p>
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: 800,
            margin: "0 0 12px 0",
          }}
        >
          Work Experience:
        </h2>

        <div
          style={{
            fontSize: "12.5px",
            lineHeight: "1.35",
            marginBottom: "18px",
          }}
        >
          <div style={{ marginBottom: "9px" }}>
            <strong>– Student Assistant</strong>
            <br />
            DePaul University, Lincoln Park
          </div>

          <div style={{ marginBottom: "9px" }}>
            <strong>– Cybersecurity and Technology Intern</strong>
            <br />
            Enterprise Network Technology
          </div>

          <div style={{ marginBottom: "9px" }}>
            <strong>– Technology Intern</strong>
            <br />
            PBS Distribution
          </div>

          <div>
            <strong>– President of DePaul Crypto Club</strong>
            <br />
            Co-founder and President, DePaul Crypto Club
          </div>
        </div>

        <h2
          style={{
            fontSize: "20px",
            fontWeight: 800,
            margin: "0 0 8px 0",
          }}
        >
          Connect with me:
        </h2>

        <div style={{ fontSize: "12.5px", lineHeight: "1.45" }}>
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

        <p style={{ margin: "14px 0 0 0", fontSize: "12.5px" }}>
          FAROOQ
        </p>
      </section>
    </main>
  );
}