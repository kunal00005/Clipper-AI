import { useState, useRef } from "react";

const COLORS = {
  bg: "#0A0A0F",
  surface: "#13131A",
  surfaceHover: "#1C1C26",
  border: "#2A2A3A",
  accent: "#FF3B5C",
  accentGlow: "rgba(255,59,92,0.18)",
  accentSoft: "rgba(255,59,92,0.08)",
  text: "#F0F0FF",
  muted: "#8888AA",
  success: "#00E5A0",
  gold: "#FFD166",
};

const styles = {
  app: {
    minHeight: "100vh",
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 16px 60px",
  },
  header: {
    width: "100%",
    maxWidth: 720,
    paddingTop: 48,
    paddingBottom: 32,
    textAlign: "center",
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },
  logoIcon: {
    width: 36,
    height: 36,
    background: COLORS.accent,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    boxShadow: `0 0 20px ${COLORS.accentGlow}`,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    color: COLORS.text,
  },
  headline: {
    fontSize: 38,
    fontWeight: 800,
    letterSpacing: "-1.5px",
    lineHeight: 1.1,
    margin: "0 0 12px",
    background: `linear-gradient(135deg, ${COLORS.text} 40%, ${COLORS.accent})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  sub: {
    fontSize: 15,
    color: COLORS.muted,
    lineHeight: 1.6,
    maxWidth: 480,
    margin: "0 auto",
  },
  card: {
    width: "100%",
    maxWidth: 720,
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 18,
    padding: 28,
    marginBottom: 20,
  },
  inputRow: {
    display: "flex",
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    background: COLORS.bg,
    border: `1.5px solid ${COLORS.border}`,
    borderRadius: 12,
    padding: "14px 18px",
    color: COLORS.text,
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
  },
  btn: {
    background: COLORS.accent,
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "14px 24px",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s, transform 0.1s",
    boxShadow: `0 4px 20px ${COLORS.accentGlow}`,
  },
  btnDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.muted,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 10,
    display: "block",
  },
  optionRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  chip: {
    padding: "7px 16px",
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    border: `1.5px solid ${COLORS.border}`,
    background: "transparent",
    color: COLORS.muted,
    transition: "all 0.15s",
  },
  chipActive: {
    background: COLORS.accentSoft,
    border: `1.5px solid ${COLORS.accent}`,
    color: COLORS.accent,
  },
  statusBox: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 20px",
    background: COLORS.accentSoft,
    borderRadius: 12,
    border: `1px solid rgba(255,59,92,0.2)`,
    fontSize: 14,
    color: COLORS.text,
  },
  spinner: {
    width: 18,
    height: 18,
    border: `2.5px solid rgba(255,59,92,0.2)`,
    borderTop: `2.5px solid ${COLORS.accent}`,
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    flexShrink: 0,
  },
  clipsGrid: {
    width: "100%",
    maxWidth: 720,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  clipCard: {
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 16,
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  clipHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: "18px 20px 14px",
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 800,
    flexShrink: 0,
    marginTop: 2,
  },
  clipTitle: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 4,
    color: COLORS.text,
  },
  clipMeta: {
    fontSize: 12,
    color: COLORS.muted,
    display: "flex",
    gap: 14,
    alignItems: "center",
  },
  clipDesc: {
    fontSize: 13,
    color: COLORS.muted,
    lineHeight: 1.5,
    padding: "0 20px 16px",
    borderBottom: `1px solid ${COLORS.border}`,
  },
  clipFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    gap: 10,
    flexWrap: "wrap",
  },
  scoreBar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  barTrack: {
    flex: 1,
    height: 4,
    background: COLORS.border,
    borderRadius: 10,
    overflow: "hidden",
    minWidth: 60,
  },
  barFill: {
    height: "100%",
    borderRadius: 10,
    transition: "width 0.6s ease",
  },
  copyBtn: {
    background: "transparent",
    border: `1.5px solid ${COLORS.border}`,
    borderRadius: 8,
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.15s",
  },
  timeTag: {
    background: COLORS.bg,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 6,
    padding: "3px 9px",
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.gold,
    fontVariantNumeric: "tabular-nums",
  },
  emptyState: {
    textAlign: "center",
    padding: "48px 24px",
    color: COLORS.muted,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: COLORS.muted,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: COLORS.success,
    boxShadow: `0 0 8px ${COLORS.success}`,
  },
};

function parseVideoId(url) {
  try {
    const u = new URL(url.trim());
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("?")[0];
    return u.searchParams.get("v");
  } catch {
    const m = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
}

function formatTime(seconds) {
  const s = Math.round(seconds);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function getRankStyle(i) {
  if (i === 0) return { background: "rgba(255,209,102,0.15)", color: COLORS.gold };
  if (i === 1) return { background: "rgba(200,200,220,0.1)", color: "#C0C0D0" };
  if (i === 2) return { background: "rgba(180,120,60,0.12)", color: "#C87C3C" };
  return { background: COLORS.surfaceHover, color: COLORS.muted };
}

const CLIP_COUNTS = [3, 5, 8, 10];
const CLIP_LENGTHS = ["30s", "60s", "90s", "Custom"];

export default function App() {
  const [url, setUrl] = useState("");
  const [clipCount, setClipCount] = useState(5);
  const [clipLength, setClipLength] = useState("60s");
  const [status, setStatus] = useState(null); // null | "loading" | "done" | "error"
  const [statusMsg, setStatusMsg] = useState("");
  const [clips, setClips] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");
  const [copied, setCopied] = useState(null);
  const [debugRaw, setDebugRaw] = useState(null);
  const inputRef = useRef();

  async function analyzeVideo() {
    const videoId = parseVideoId(url);
    const transcriptResponse = await fetch(
    `http://127.0.0.1:8000/transcript/${videoId}`
    );

const transcriptData =
  await transcriptResponse.json();
  if (!transcriptData.success) {
  setStatus("error");
  setStatusMsg(
    "This video does not have captions/transcripts available."
  );
  return;
}
  console.log(
  transcriptData.transcript.substring(0, 500)
  );
    if (!videoId) {
      setStatus("error");
      setStatusMsg("Couldn't find a valid YouTube video ID in that URL. Try pasting the full link.");
      return;
    }

    setStatus("loading");
    setStatusMsg("Analyzing video for highlight moments...");
    setClips([]);
    setVideoTitle("");

    const lengthSec = clipLength === "30s" ? 30 : clipLength === "60s" ? 60 : clipLength === "90s" ? 90 : 60;

    const prompt = `You are a viral content strategist who specializes in identifying the most engaging, shareable moments from YouTube videos.

Given the YouTube video ID: ${videoId}
URL: https://www.youtube.com/watch?v=${videoId}

Your task: identify ${clipCount} clips from this video that would be the most popular, engaging, or shareable moments — the kind content creators clip for Shorts, TikTok, or highlights reels.

Each clip should be approximately ${lengthSec} seconds long.

For this video, based on what you know about popular YouTube content patterns and the video ID/URL, generate realistic and compelling clip suggestions. If you know this specific video,
 use that knowledge. Otherwise, infer from the topic and generate plausible, highly specific clip moments.

Return ONLY valid JSON (no markdown fences) in this exact shape:
{
  "videoTitle": "The title of the video",
  "videoTopic": "Brief topic description",
  "clips": [
    {
      "rank": 1,
      "title": "Short punchy clip title",
      "startTime": 142,
      "endTime": 202,
      "popularityScore": 94,
      "reason": "Why this moment is likely to go viral or get the most engagement",
      "clipType": "reaction | explanation | reveal | debate | tutorial | story | joke | insight"
    }
  ]
}

Rules:
- popularityScore is 0-100 (be realistic, not everything is 95+)
- startTime and endTime are in seconds
- endTime - startTime should be roughly ${lengthSec} seconds (±10s is fine)
- Sort clips by popularityScore descending
- Titles should be punchy, like real YouTube clip titles
- reasons should be specific and insightful
- Spread clips across different parts of the video (don't cluster them all together)`;

    try {
  const response = await fetch(
  "http://127.0.0.1:8000/analyze",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      transcript: transcriptData.transcript,
    }),
  }
);


  const data = await response.json();
  setDebugRaw(JSON.stringify(data, null, 2));
      if (!response.ok) throw new Error(data.error?.message || `API error ${response.status}`);

      const raw =data.content;

      if (!raw) {
        throw new Error("No content returned from Groq");
      }

      const start = raw.indexOf("{");
      const end = raw.lastIndexOf("}");
      if (start === -1 || end === -1) {
        throw new Error("No JSON found in response");
      }
      const parsed = JSON.parse(raw.slice(start, end + 1));

      if (!parsed.clips || !Array.isArray(parsed.clips)) {
        throw new Error("Missing clips array");
      }

      setVideoTitle(parsed.videoTitle || `Video ${videoId}`);
      setClips(parsed.clips);
      setStatus("done");
      setStatusMsg(`Found ${parsed.clips.length} highlight clips`);
    } catch (err) {
      setStatus("error");
      setStatusMsg("Error: " + err.message);
      console.error("ClipAI error:", err);
    }
  }
  function downloadResults() {
  const content = clips
    .map(
      (clip, index) =>
        `Clip ${index + 1}\n` +
        JSON.stringify(clip, null, 2)
    )
    .join("\n\n====================\n\n");

  const blob = new Blob(
    [content],
    { type: "text/plain" }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "clip-results.txt";
  link.click();
}

  function copyTimestamp(clip) {
    const text = `https://www.youtube.com/watch?v=${parseVideoId(url)}&t=${clip.startTime}s`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(clip.rank);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  const isLoading = status === "loading";

  return (
    <div style={styles.app}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${COLORS.bg}; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .clip-card:hover { border-color: ${COLORS.accent} !important; }
        .copy-btn:hover { border-color: ${COLORS.accent} !important; color: ${COLORS.accent} !important; }
        input:focus { border-color: ${COLORS.accent} !important; }
        .clip-animate { animation: fadeIn 0.35s ease both; }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>✂️</div>
          <span style={styles.logoText}>ClipAI</span>
        </div>
        <h1 style={styles.headline}>Find Every Viral Moment</h1>
        <p style={styles.sub}>
          Paste any YouTube URL. AI scans the video and surfaces the clips most likely to blow up — ranked by viral potential.
        </p>
      </div>

      {/* Input Card */}
      <div style={styles.card}>
        <div style={styles.inputRow}>
          <input
            ref={inputRef}
            style={styles.input}
            placeholder="https://youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isLoading && url && analyzeVideo()}
            disabled={isLoading}
          />
          <button
  style={{ ...styles.btn, ...(isLoading || !url ? styles.btnDisabled : {}) }}
  onClick={analyzeVideo}
  disabled={isLoading || !url}
>
  {isLoading ? "Analyzing…" : "Find Clips"}
</button>

<button
  style={styles.btn}
  onClick={downloadResults}
  disabled={!clips.length}
>
  Download Results
</button>
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div>
            <span style={styles.label}>Number of clips</span>
            <div style={styles.optionRow}>
              {CLIP_COUNTS.map((n) => (
                <button
                  key={n}
                  style={{ ...styles.chip, ...(clipCount === n ? styles.chipActive : {}) }}
                  onClick={() => setClipCount(n)}
                >
                  {n} clips
                </button>
              ))}
            </div>
          </div>
          <div>
            <span style={styles.label}>Clip length</span>
            <div style={styles.optionRow}>
              {CLIP_LENGTHS.map((l) => (
                <button
                  key={l}
                  style={{ ...styles.chip, ...(clipLength === l ? styles.chipActive : {}) }}
                  onClick={() => setClipLength(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      {status === "loading" && (
        <div style={{ ...styles.card, padding: "18px 24px" }}>
          <div style={styles.statusBox}>
            <div style={styles.spinner} />
            <span>{statusMsg}</span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div style={{ ...styles.card, padding: "18px 24px", borderColor: "rgba(255,59,92,0.3)" }}>
          <div style={{ ...styles.statusBox, background: "rgba(255,59,92,0.06)" }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <span style={{ color: COLORS.accent }}>{statusMsg}</span>
          </div>
        </div>
      )}

      {/* Results */}
      {status === "done" && clips.length > 0 && (
        <div style={styles.clipsGrid}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div style={styles.sectionTitle}>
              <div style={styles.dot} />
              {clips.length} Clips Found — {videoTitle}
            </div>
          </div>

          {clips.map((clip, i) => {
            const rankStyle = getRankStyle(i);
            const barColor = clip.popularityScore >= 85 ? COLORS.accent : clip.popularityScore >= 65 ? COLORS.gold : COLORS.success;
            return (
              <div
                key={clip.rank}
                style={styles.clipCard}
                className="clip-card clip-animate"
                style={{
                  ...styles.clipCard,
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <div style={styles.clipHeader}>
                  <div style={{ ...styles.rankBadge, ...rankStyle }}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={styles.clipTitle}>{clip.title}</div>
                    <div style={styles.clipMeta}>
                      <span style={styles.timeTag}>{formatTime(clip.startTime)} → {formatTime(clip.endTime)}</span>
                      <span style={{ fontSize: 11, background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 4, textTransform: "capitalize" }}>
                        {clip.clipType}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={styles.clipDesc}>{clip.reason}</div>

                <div style={styles.clipFooter}>
                  <div style={styles.scoreBar}>
                    <span style={{ fontSize: 11, color: COLORS.muted, whiteSpace: "nowrap" }}>Viral score</span>
                    <div style={styles.barTrack}>
                      <div style={{ ...styles.barFill, width: `${clip.popularityScore}%`, background: barColor }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: barColor, minWidth: 32 }}>{clip.popularityScore}</span>
                  </div>
                  <button
                    className="copy-btn"
                    style={styles.copyBtn}
                    onClick={() => copyTimestamp(clip)}
                  >
                    {copied === clip.rank ? "✓ Copied!" : "⎘ Copy Link"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {status === "done" && clips.length === 0 && (
        <div style={{ ...styles.card, ...styles.emptyState }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>🎬</div>
          <p>No clips were identified. Try a different video or adjust your settings.</p>
        </div>
      )}

      {debugRaw && (
        <div style={{ width: "100%", maxWidth: 720, marginTop: 16 }}>
          <details>
            <summary style={{ cursor: "pointer", fontSize: 12, color: "#8888AA", marginBottom: 8 }}>
              🔍 Debug: Raw API Response
            </summary>
            <pre style={{
              background: "#0d0d14",
              border: "1px solid #2A2A3A",
              borderRadius: 10,
              padding: 16,
              fontSize: 11,
              color: "#8888AA",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              maxHeight: 300,
              overflowY: "auto",
            }}>{debugRaw}</pre>
          </details>
        </div>
      )}
      <footer
  style={{
    marginTop: 60,
    padding: "24px 0",
    textAlign: "center",
    color: "#888",
    fontSize: "14px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  }}
>
  Built with ❤️ by Kunal Sharma • ClipAI Beta 2026
</footer>
    </div>
  );
}