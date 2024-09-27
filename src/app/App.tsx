import { useLoadingStore } from "../hook/useLoadingStore";
import "./App.css";
import Portfolio from "../pages/portfolio/Portfolio";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useEffect } from "react";

const App: React.FC = () => {
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [setLoading]);

  return <div>{isLoading ? <LoadingSpinner /> : <Portfolio />}</div>;
};

export default App;
