import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <section id="home">
          <h2>Hi, I'm Hardik Khariwal 👋</h2>
          <p>
            An Electrical Engineering student passionate about AI, full-stack
            development, and embedded systems.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
