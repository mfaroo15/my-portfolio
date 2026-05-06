export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #f4f4f4, #e8e8e8)",
        padding: "35px 50px",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Muhammad Farooq Ibrahim
        </h1>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "28px",
          }}
        >
          <p style={{ margin: "0 0 12px 0" }}>
            I’m based in Chicago, Illinois, and originally from
            Karachi, Pakistan. Experiencing different cultures has
            helped me develop adaptability, communication skills,
            and a broad perspective toward people and opportunities.
          </p>

          <p style={{ margin: "0 0 12px 0" }}>
            I enjoy spending quality time with family and friends
            and have strong interests in business, politics,
            sports, emerging technologies, and cryptocurrency.
          </p>

          <p style={{ margin: 0 }}>
            I’m naturally curious, growth-oriented, and always eager
            to learn from new ideas, experiences, and innovation
            shaping the future.
          </p>
        </div>

        <h2
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          Work Experience:
        </h2>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "28px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <strong>– Student Assistant</strong>
            <br />
            DePaul University, Lincoln Park
          </div>

          <div style={{ marginBottom: "16px" }}>
            <strong>– Cybersecurity and Technology Intern</strong>
            <br />
            Enterprise Network Technology
          </div>

          <div style={{ marginBottom: "16px" }}>
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
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "14px",
          }}
        >
          Connect with me:
        </h2>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          <div>
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

          <div>
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
            marginTop: "28px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          FAROOQ
        </p>
      </section>
    </main>
  );
}