import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const fitHeading = () => {
      heading.style.fontSize = "100px";
      const range = document.createRange();
      range.selectNodeContents(heading);
      const textWidth = range.getBoundingClientRect().width;
      if (textWidth > 0) {
        heading.style.fontSize = `${(heading.clientWidth / textWidth) * 100}px`;
      }
    };

    fitHeading();
    const observer = new ResizeObserver(fitHeading);
    observer.observe(heading.parentElement!);
    let active = true;
    document.fonts.ready.then(() => {
      if (active) fitHeading();
    });
    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const px = isMobile ? 20 : 40;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFEF5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Red accent block */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: isMobile ? "40%" : "min(320px, 30%)",
          height: isMobile ? "20vh" : "min(320px, 35vh)",
          backgroundColor: "#FF3D00",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0)",
          transformOrigin: "top right",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, padding: `24px ${px}px` }} />

      {/* Main hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: `0 ${px}px 40px`,
        }}
      >
        <div style={{ width: "100%", minWidth: 0 }}>
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            <h1
              ref={headingRef}
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "7vw",
                lineHeight: 0.9,
                color: "#000",
                textTransform: "uppercase",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              ВИДЕОПРОДАКШН
            </h1>
          </div>

          <div
            style={{
              marginTop: isMobile ? 28 : 40,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            <button
              onClick={scrollToPortfolio}
              style={{
                padding: isMobile ? "14px 24px" : "16px 36px",
                border: "2px solid #000",
                backgroundColor: "transparent",
                color: "#000",
                fontFamily: FONT_MONO,
                fontSize: isMobile ? 11 : 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Портфолио ↓
            </button>
          </div>
        </div>
      </div>

      {/* Marquee divider */}
      <div
        style={{
          borderTop: "2px solid #000",
          overflow: "hidden",
          padding: "14px 0",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 18s linear infinite",
          }}
        >
          {[...Array(4)].map((_, si) =>
            [
              "ПОДКАСТЫ",
              "РЕПОРТАЖИ",
              "СЪЁМКИ",
              "ИНТЕРВЬЮ",
              "МОНТАЖ",
              "ПРОДЮСИРОВАНИЕ",
            ].map((t, i) => (
              <span
                key={`${si}-${i}`}
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: isMobile ? 18 : 24,
                  color: "rgba(0,0,0,0.62)",
                  letterSpacing: "0.05em",
                  margin: "0 20px",
                }}
              >
                {t}
                <span
                  style={{
                    color: "rgba(255,61,0,0.9)",
                    margin: "0 14px",
                    fontSize: 14,
                  }}
                >
                  ◼
                </span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
