import styles from "../../styles/particle.module.css";
function ParticlePage() {
  return (
    <div className="bg-black w-screen h-screen">
      <div
        id="box"
        className={
          (`
        box
        relative 
        w-[400px] 
        h-[400px] 
        text-white 
        text-[50px] 
        bg-transparent`,
          styles.box)
        }
      >
        Welcome Back
      </div>
    </div>
  );
}

export default ParticlePage;
