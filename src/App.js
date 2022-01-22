import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app",
    entry: "//localhost:3001",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "vue app",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/app-vue",
  },
]);
start();
function App() {
  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}

export default App;
