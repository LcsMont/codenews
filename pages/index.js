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
      <h1 style={styles.heading}>Work in progress</h1>
    </div>
  );
}

export default Home;
