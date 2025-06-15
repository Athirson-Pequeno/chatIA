import { useRef } from "react";

export default function TelaCapa() {
  const handleClick = () => {
    localStorage.removeItem("rolarPara");
    window.location.href = "/Inicio";
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.5)",
        }}
      >
        <source src="/FundoPrimario.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em HTML5.
      </video>

      {/* Texto em cima */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: 0, fontWeight: 700, lineHeight: 1.2 }}>
          Rede Licitações
        </h1>
        <p style={{ fontSize: "1.8rem", marginTop: "1rem", maxWidth: "80%", lineHeight: 1.5 }}>
          A primeira IA especialista em recursos e contrarrazões para o mercado público.
        </p>
        <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
          Clique em qualquer lugar para continuar
        </p>
      </div>
    </div>
  );
}
