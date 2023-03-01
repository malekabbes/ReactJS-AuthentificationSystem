import "./App.css";
import AppRoutes from "./AppRoutes";
function App() {
  document.title = process.env.REACT_APP_TITLE;

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
