export default function SearchBar({ repoUrl, setRepoUrl, handleAnalyze, loading }) {
  return (
    <div style={{
      display: "flex",
      gap: "12px",
      maxWidth: "700px",
      margin: "0 auto",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      <input
        type="text"
        placeholder="https://github.com/facebook/react"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "14px 18px",
          borderRadius: "10px",
          border: "1px solid #30363d",
          background: "#161b22",
          color: "#e6edf3",
          fontSize: "15px",
          outline: "none",
        }}
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        style={{
          padding: "14px 28px",
          borderRadius: "10px",
          border: "none",
          background: loading ? "#30363d" : "#1f6feb",
          color: "white",
          fontSize: "15px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.2s"
        }}
      >
        {loading ? "Analyzing..." : "⚡ Analyze"}
      </button>
    </div>
  );
}