import "./_header.scss";

function Header() {
  return (
    <header>
      <div className="mask">
        <img
          className="bandeau"
          src="/Bandeau-men-surfing3.jpg"
          alt="bandeau"
        />
      </div>
      <div>
        <h1 className="title">Surf au bon endroit !</h1>
      </div>
      <br />
      <div className="subtitle">
        <p>
          Simple : choisis la date, ton niveau de surf et la ville la plus
          proche de chez toi. LE spot idéal est choisi en suivant !
        </p>
      </div>
    </header>
  );
}

export default Header;