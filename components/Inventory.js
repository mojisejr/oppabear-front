import Item from "./Item";

function Inventory({ imageData, desc, fn }) {
  let images = imageData || [];
  return (
    <div
      id="nft-inventory-main"
      className="border-white border-dashed first:border-r-[1px] last:border-l-[1px]"
    >
      {images.length > 0 ? (
        <ul
          id="nft-main"
          className="grid grid-cols-2 gap-x-1 gap-y-3 p-2 justify-items-center"
        >
          {images.map((image, index) => {
            return (
              <li key={index} onClick={() => fn(image)}>
                <Item src={image} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex items-cetner justify-center">
          <h1>{desc}</h1>
        </div>
      )}
    </div>
  );
}

export default Inventory;
