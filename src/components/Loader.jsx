export default function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{
        width: "48px",
        height: "48px",
        border: "4px solid #30363d",
        borderTop: "4px solid #1f6feb",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "0 auto 16px"
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ color: "#8b949e", fontSize: "16px" }}>🤖 AI is analyzing the repository...</p>
    </div>
  );
}