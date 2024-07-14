import "./App.css";
import {
  Group,
  play,
  Logo,
  search,
  arrow,
  global,
  comfirst,
  comsecond,
  comthird,
  comfourth,
  comfives,
  Vevey,
  Skadar,
  Raja,
  Labuan,
  viewaAll,
} from "./assets";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="" className="logo">
            <img src={Logo} alt="" />
          </a>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <img className="search-img" src={search} alt="" />
                <input
                  type="text"
                  className="search"
                  placeholder="Cari apapun disini..."
                />
              </li>
              <li className="nav-item">
                <img src={global} alt="" /> Bahasa Indonesia
                <img src={arrow} alt="" />
              </li>
              <li className="nav-item">
                <img src="" alt="" />
                <p>Indonesia, Yogyakarta</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <mian className="main">
        <div className="container">
          {" "}
          <nav className="main__nav">
            <ul className="main-nav-list">
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Gunung</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Pantai</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Kuliner</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Outbond</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Sejarah</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Edukasi</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Romantis</option> <img src="" alt="" />
                </select>
              </li>
              <li className="main-nav-item">
                <select name="" id="" className="nav-select">
                  <option value="">Alam</option> <img src="" alt="" />
                </select>
              </li>
            </ul>
            <button className="main-nav-btn"></button>
            <button className="main-nav-btn"></button>
          </nav>
          <div className="main-descrption">
            <div className="descrption">
              <img src="" alt="" className="description-img" />
              <h1 className="descrption-h1">
                Liburan & nikmati <br />
                <span>tempat baru</span> di <br />
                indonesia ️🏝
              </h1>
              <p className="descrption-p">
                Destinize membuat kamu selalu update terkait tempat liburan{" "}
                <br /> baru di Indonesia dengan mengikuti perkembangan para{" "}
                <br /> influencer di sosial media ✨
              </p>
              <div className="btns">
                <button className="descrption-btn1">Mulai sekarang →</button>
                <button className="descrption-btn2">
                  <img src={play} alt="" /> Putar Demo
                </button>
              </div>
            </div>
            <img className="main-descrption-img" src={Group} alt="" />
          </div>
          <ul className="main__companies-list">
            <li className="main-companies-item">
              <img src={comfirst} alt="" />
            </li>
            <li className="main-companies-item">
              <img src={comsecond} alt="" />
            </li>
            <li className="main-companies-item">
              <img src={comthird} alt="" />
            </li>
            <li className="main-companies-item">
              <img src={comfourth} alt="" />
            </li>
            <li className="main-companies-item">
              <img src={comfives} alt="" />
            </li>
          </ul>
          <div className="main-images__block">
            <p className="images-block-heading-p">DESTINASI FAVORIT</p>
            <h1 className="images-block-heading-h1">
              ✈ • Temukan Destinasi Favoritmu <img src={viewaAll} alt="" />
            </h1>
            <ul className="img-list">
              <li className="img-list-item">
                <img src={Raja} alt="" />
                <p className="img-block-descript">
                  Labuan Bajo
                  <br /> <span>NTT</span>
                </p>
              </li>
              <li className="img-list-item">
                <img src={Labuan} alt="" />
              </li>
              <li className="img-list-item">
                <img src={Skadar} alt="" />
              </li>
              <li className="img-list-item">
                <img src={Vevey} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </mian>
    </>
  );
}

export default App;
