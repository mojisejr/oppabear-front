import Image from "next/image";
function ImageBox({ sign, desc, imageSrc }) {
  return (
    <div
      id="image-box-container"
      className="w-[280px] h-[300px] bg-gradient-to-br from-[#0E2645] to-[#4C5D7F] rounded-xl border-dashed border-slate-300 border-[2px] flex flex-col items-center justify-center 
      shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.8)] text-white overflow-hidden"
    >
      {imageSrc == undefined ? (
        <NoImage sign={sign} desc={desc} />
      ) : (
        <ShowImage src={imageSrc} />
      )}
    </div>
  );
}

function NoImage({ sign, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div
        id="image-box-sign"
        className="text-[180px] text-[#FFD233] font-extrabold leading-[70%]"
      >
        {sign}
      </div>
      <div
        id="image-box-description"
        className="text-[20px] pl-10 pr-10 text-center"
      >
        {desc}
      </div>
    </div>
  );
}

function ShowImage({ src, tokenId }) {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden shadow-xl mb-2">
        <Image src={src} width={250} height={250} alt="nft image" />
      </div>
      <div className="text-center">TokenID : {!tokenId ? "0" : "1"}</div>
    </div>
  );
}
export default ImageBox;
