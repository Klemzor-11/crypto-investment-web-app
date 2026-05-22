const API_URL = "https://klemzor-api.onrender.com";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Klemzor Investment App</h1>
      <p>Frontend is live 🚀</p>

      <button
        onClick={async () => {
          try {
            const res = await fetch(`${API_URL}/api/healthz`);
            const data = await res.json();
            alert(JSON.stringify(data));
          } catch (err) {
            alert("Backend not connected ❌");
          }
        }}
      >
        Test Backend
      </button>
    </div>
  );
}
