import Image from "next/image";

function Item({ src }) {
  return (
    <div className="bg-red-400 h-[150px] w-[150px] rounded-xl shadow-xl overflow-hidden hover:outline hover:outline-[#F0CC52] hover:outline-[2px] hover:outline-offset-2 hover:cursor-pointer">
      <Image src={src} width={150} height={150} alt="nft item" />
    </div>
  );
}

export default Item;
