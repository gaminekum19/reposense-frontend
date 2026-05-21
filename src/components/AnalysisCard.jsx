const Badge = ({ text, color = "#1f6feb" }) => (
  <span style={{
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: "20px",
    padding: "4px 12px",
    fontSize: "13px",
    fontWeight: "500"
  }}>{text}</span>
);

const Section = ({ title, children }) => (
  <div style={{
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "16px"
  }}>
    <h3 style={{ color: "#e6edf3", marginBottom: "12px", fontSize: "15px" }}>{title}</h3>
    {children}
  </div>
);

export default function AnalysisCard({ analysis, repoUrl }) {
  const complexityColor = {
    Beginner: "#3fb950",
    Intermediate: "#d29922",
    Advanced: "#f85149"
  }[analysis.complexityLevel] || "#1f6feb";

  return (
    <div>
      {/* Top Summary */}
      <div style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "16px"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
          <div>
            <h2 style={{ color: "#e6edf3", fontSize: "20px", marginBottom: "4px" }}>
              📦 {repoUrl.split("/").slice(-1)[0]}
            </h2>
            <a href={repoUrl} target="_blank" rel="noreferrer"
              style={{ color: "#1f6feb", fontSize: "13px" }}>{repoUrl}</a>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "flex-start" }}>
            <Badge text={analysis.projectType} color="#1f6feb" />
            <Badge text={analysis.complexityLevel} color={complexityColor} />
          </div>
        </div>
        <p style={{ color: "#8b949e", lineHeight: "1.6", fontSize: "15px" }}>{analysis.summary}</p>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

        {/* Tech Stack */}
        <Section title="🛠️ Tech Stack">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {analysis.techStack?.map((t, i) => <Badge key={i} text={t} color="#3fb950" />)}
          </div>
        </Section>

        {/* Target Audience */}
        <Section title="🎯 Target Audience">
          <p style={{ color: "#8b949e", fontSize: "14px", lineHeight: "1.6" }}>{analysis.targetAudience}</p>
        </Section>

        {/* Key Features */}
        <Section title="⭐ Key Features">
          <ul style={{ paddingLeft: "16px", color: "#8b949e", fontSize: "14px", lineHeight: "1.8" }}>
            {analysis.keyFeatures?.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </Section>

        {/* Improvements */}
        <Section title="💡 Suggested Improvements">
          <ul style={{ paddingLeft: "16px", color: "#8b949e", fontSize: "14px", lineHeight: "1.8" }}>
            {analysis.improvements?.map((imp, i) => <li key={i}>{imp}</li>)}
          </ul>
        </Section>
      </div>

      {/* How to Contribute */}
      <Section title="🤝 How to Contribute">
        <p style={{ color: "#8b949e", fontSize: "14px", lineHeight: "1.6" }}>{analysis.howToContribute}</p>
      </Section>
    </div>
  );
}