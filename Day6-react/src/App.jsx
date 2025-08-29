import React from "react";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: "10px" }}>
        🚀 Welcome to React Day 6!
      </h1>
      <h2 style={{ color: "#fff" }}>Profile Card Example</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            borderRadius: "16px",
            padding: "25px",
            width: "260px",
            background: "linear-gradient(135deg, #f093fb, #f5576c)",
            color: "white",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
          }}
        >
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Rick"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "3px solid white",
              marginBottom: "15px",
            }}
          />
          <h2>Rick</h2>
          <h4>📘 Course: MongoDB</h4>
          <p>I love backend development and databases.</p>
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              background: "#fff",
              color: "#f5576c",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#222") &
              (e.currentTarget.style.color = "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#fff") &
              (e.currentTarget.style.color = "#f5576c")
            }
          >
            Connect 🤝
          </button>
        </div>

        {/* Card 2 */}
        <div
          style={{
            borderRadius: "16px",
            padding: "25px",
            width: "260px",
            background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
            color: "white",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
          }}
        >
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Jessica"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "3px solid white",
              marginBottom: "15px",
            }}
          />
          <h2>Jessica</h2>
          <h4>📘 Course: React</h4>
          <p>Frontend enthusiast, learning UI design.</p>
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              background: "#fff",
              color: "#5b86e5",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#222") &
              (e.currentTarget.style.color = "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#fff") &
              (e.currentTarget.style.color = "#5b86e5")
            }
          >
            Connect 🤝
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
