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

        <div style={{ fontSize: "15px", lineHeight: "1.75", marginBottom: "30px" }}>
          <p style={{ margin: "0 0 18px 0" }}>
            I’m currently based in Chicago, Illinois, and originally from Karachi,
            Pakistan, a city known for its energy, diversity, and entrepreneurial
            spirit, which has deeply shaped my personality and perspective. Living
            in two very different parts of the world has given me the ability to
            connect with people from diverse backgrounds and adapt quickly to new
            environments and opportunities.
          </p>

          <p style={{ margin: "0 0 18px 0" }}>
            Outside of academics and technology, I genuinely value spending
            quality time with family and friends, building meaningful
            relationships, and creating experiences that matter.
          </p>

          <p style={{ margin: "0 0 18px 0" }}>
            I have a strong interest in business, global politics, sports,
            emerging technologies, and cryptocurrency. I’m especially fascinated
            by how technology is transforming industries, financial systems, and
            the way people connect and build communities around the world. I enjoy
            staying informed about market trends, innovative ideas, and
            developments that are shaping the future.
          </p>

          <p style={{ margin: 0 }}>
            I’m naturally curious, growth-oriented, and always eager to learn
            from people, ideas, and experiences that inspire progress and create
            a lasting impact.
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
