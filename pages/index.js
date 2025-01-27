import React from "react";

function Home() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
    },
    heading: {
      fontSize: "2rem",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Time de fibra: </h1>
      <h2>
        Niltinho Tech Lead | Bruno Montezadno Soares | Bruninho aprendiz do
        Perez | Lucas tempos Sydle
      </h2>
    </div>
  );
}

export default Home;
