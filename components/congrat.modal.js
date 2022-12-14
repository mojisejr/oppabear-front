import Image from "next/image";
import styles from "../styles/particle.module.css";
import congrat from "../public/1.png";

function CongratModal() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-80 backdrop-blur-sm z-[100]">
      <div className="flex justify-center items-center h-[100%] w-[100%]">
        <div
          id="modal-container"
          className="relative flex flex-col justify-center items-center w-[600px] h-[450px] rounded-xl shadow-2xl bg-gradient-to-b from-[#0E1937] to-[#0E1937cd] gap-2 z-10"
        >
          <div className="text-2xl font-bold text-[#FF9820ce] ">
            Congratulations !
          </div>
          <div className="text-white">
            You have got Oppa Bear Evolution Gen.2
          </div>
          <div
            className={`relative w-[250px] h-[250px] bg-slate-200 rounded-xl ${styles.glow}`}
          >
            <Image src={congrat} alt={"gen 2 image"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CongratModal;
