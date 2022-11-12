function ImageBox({ sign, desc }) {
  return (
    <div
      id="image-box-container"
      className="w-[300px] h-[350px] bg-gradient-to-br from-[#0E2645] to-[#4C5D7F] rounded-xl border-dashed border-slate-300 border-[2px] flex flex-col items-center justify-center 
      shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.8)] text-white"
    >
      <div
        id="image-box-sign"
        className="text-[180px] text-[#FFD233] font-extrabold"
      >
        {sign}
      </div>
      <div id="image-box-description" className="text-[20px] p-10 text-center">
        {desc}
      </div>
    </div>
  );
}

export default ImageBox;
