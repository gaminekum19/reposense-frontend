import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import AnalysisCard from "./components/AnalysisCard";
import Loader from "./components/Loader";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!repoUrl.trim()) return;
    setLoading(true);
    setError("");
    setAnalysis(null);
    try {
      const res = await axios.post(`${API_URL}/api/repo/analyze`, { repoUrl });
      setAnalysis(res.data.analysis);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      {/* Header */}
      <div style={{
        background: "#161b22",
        borderBottom: "1px solid #30363d",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
        <span style={{ fontSize: "24px" }}>🔍</span>
        <span style={{ fontSize: "20px", fontWeight: "700", color: "#e6edf3" }}>RepoSense</span>
        <span style={{
          fontSize: "12px",
          background: "#1f6feb",
          color: "white",
          padding: "2px 8px",
          borderRadius: "12px",
          marginLeft: "4px"
        }}>AI Powered</span>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 24px 40px" }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#e6edf3",
          marginBottom: "16px",
          lineHeight: 1.2
        }}>
          Understand any GitHub repo<br />
          <span style={{ color: "#1f6feb" }}>in seconds with AI</span>
        </h1>
        <p style={{ color: "#8b949e", fontSize: "18px", marginBottom: "40px" }}>
          Paste a GitHub repository URL and get an instant AI-powered analysis
        </p>
        <SearchBar
          repoUrl={repoUrl}
          setRepoUrl={setRepoUrl}
          handleAnalyze={handleAnalyze}
          loading={loading}
        />
        {error && (
          <div style={{
            marginTop: "16px",
            color: "#f85149",
            background: "#1a0a0a",
            border: "1px solid #f85149",
            borderRadius: "8px",
            padding: "12px 20px",
            display: "inline-block"
          }}>
            ⚠️ {error}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 60px" }}>
        {loading && <Loader />}
        {analysis && <AnalysisCard analysis={analysis} repoUrl={repoUrl} />}
      </div>
    </div>
  );
}