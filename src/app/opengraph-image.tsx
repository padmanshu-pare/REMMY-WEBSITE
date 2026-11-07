import { ImageResponse } from "next/og";

export const alt = "REMMY — Save today. Find tomorrow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          backgroundColor: "#151515",
          backgroundImage: "radial-gradient(ellipse at 82% 25%, rgba(39,24,126,0.6), transparent 35%)",
          color: "#f7f7ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fef5e4", fontSize: "24px", fontWeight: 700, letterSpacing: "0.15em" }}>
          <div style={{ width: "16px", height: "23px", border: "2px solid #fef5e4", borderRadius: "3px 3px 0 0" }} />
          REMMY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#d4b8c2", fontSize: "17px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            A personal memory for what you save
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "24px", fontSize: "76px", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 1.08 }}>
            Save today.
            <br />
            <span style={{ color: "#fef5e4" }}>Find tomorrow.</span>
          </div>
        </div>
        <div style={{ color: "rgba(247,247,255,0.6)", fontSize: "17px" }}>
          Search by what you remember, not where you saved it.
        </div>
      </div>
    ),
    size,
  );
}
