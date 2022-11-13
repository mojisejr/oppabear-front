import Item from "./Item";

function Inventory({ imageData, desc, fn }) {
  let images = imageData || [];
  return (
    <div id="nft-inventory-main" className="">
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
