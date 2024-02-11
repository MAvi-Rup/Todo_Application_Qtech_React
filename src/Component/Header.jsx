const Header = () => {
  return (
    <div>
      <form className="flex items-center bg-slate-200 px-5 py-5 rounded-md">
        <img className=" h-8" src="./images/notes.png" alt="" />
        <input
          type="text"
          className="w-full mx-4 text-lg px-5 py-2 border-none outline-none rounded text-black-400"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain`}
        ></button>
      </form>
    </div>
  );
};

export default Header;
