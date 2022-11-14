function Button({ name, fn }) {
  return (
    <button
      className="absolute text-xl top-[-8%] pl-10 pr-10 pt-3 pb-3 z-10 text-white font-bold bg-gradient-to-br from-[#FF9820ce] hover:from-[#FF9820] hover:to-[#FFD075] to-[#FFD075]  rounded-[100px] shadow-[3px_-3px_0px_1px_rgba(255,208,117,0.8)]"
      onClick={() => fn()}
    >
      {name}
    </button>
  );
}

export default Button;
