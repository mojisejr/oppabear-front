import Item from "./Item";

function Inventory({ imageData, desc, fn }) {
  let images = imageData || [];
  return (
    <div
      id="nft-inventory-main"
      className="border-white border-dashed first:border-r-2 last:border-l-2 "
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
        <div>{desc}</div>
      )}
    </div>
  );
}

export default Inventory;
