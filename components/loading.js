import styles from "../styles/loading.module.css";

function LoadingPage() {
  return (
    <div className="loading absolute top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-80 backdrop-blur-sm z-[100]">
      <div className="flex justify-center items-center h-screen text-white">
        <div className={styles.ring}></div>
        <span className={styles.text}>Loading...</span>
      </div>
    </div>
  );
}

export default LoadingPage;
