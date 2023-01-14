import "./App.css";
import card from "./assets/card.png";
import Header from "./components/header";

let data = [
  {
    name: "0th333",
    img: "https://pbs.twimg.com/profile_images/1609172734516281344/EqhTkjB4_400x400.jpg",
  },
  {
    name: "0xbless3d",
    img: "https://pbs.twimg.com/profile_images/1612337677315063808/KEdXEUtY_400x400.jpg",
  },
  {
    name: "0xCyan",
    img: "https://pbs.twimg.com/profile_images/1608966168282386433/YauDeB9M_400x400.jpg",
  },
  {
    name: "0xfrankliu",
    img: "https://pbs.twimg.com/profile_images/1593330717970382849/2-ylAytS_400x400.jpg",
  },
  {
    name: "0xRakz",
    img: "https://pbs.twimg.com/profile_images/1525156143697432577/osfy_AMY_400x400.png",
  },
  {
    name: "0xsld",
    img: "https://pbs.twimg.com/profile_images/1604841609274789890/3RLYzfvd_400x400.jpg",
  },
  {
    name: "0xWillis",
    img: "https://pbs.twimg.com/profile_images/1566159553506394114/u9K0e0jn_400x400.png",
  },
  {
    name: "2ewbie",
    img: "https://pbs.twimg.com/profile_images/1611652474066337795/2RyJoVKF_400x400.jpg",
  },
  {
    name: "9jaboi4real",
    img: "https://pbs.twimg.com/profile_images/1588054915095711745/ZggzFMXh_400x400.jpg",
  },
  {
    name: "_Gamoholic_",
    img: "https://pbs.twimg.com/profile_images/1593416275925016576/iz7R8KEt_400x400.jpg",
  },
  {
    name: "_mofisayo",
    img: "https://pbs.twimg.com/profile_images/1605029008088993792/W8Cq60t2_400x400.jpg",
  },
  {
    name: "A_B_Farmer",
    img: "https://pbs.twimg.com/profile_images/1595908635317530625/mgbrhxDY_400x400.jpg",
  },
  {
    name: "AaronOlogun",
    img: "https://pbs.twimg.com/profile_images/1594041680285638656/lXa9YbpE_400x400.jpg",
  },
  {
    name: "AbdullahAptos",
    img: "https://pbs.twimg.com/profile_images/1605651598822326273/gmLZuaXb_400x400.jpg",
  },
  {
    name: "aboy_nuel",
    img: "https://pbs.twimg.com/profile_images/1612744332628430849/d57wHpif_400x400.jpg",
  },
  {
    name: "AgamemnonEth",
    img: "https://pbs.twimg.com/profile_images/1460001235101229063/z3ccfQPR_400x400.jpg",
  },
  {
    name: "agoespra1981",
    img: "https://pbs.twimg.com/profile_images/1609882626449604608/9vlZEzR6_400x400.jpg",
  },
  {
    name: "akrembg1",
    img: "https://pbs.twimg.com/profile_images/1460294261606428699/gI8jYfUN_400x400.jpg",
  },
  {
    name: "AlphaNexusNFT",
    img: "https://pbs.twimg.com/profile_images/1532369442436313089/0phVMTj-_400x400.jpg",
  },
  {
    name: "andykinskywalkr",
    img: "https://pbs.twimg.com/profile_images/1399957462007095296/qodtHx8Z_400x400.jpg",
  },
  {
    name: "araji__",
    img: "https://pbs.twimg.com/profile_images/1589990421262139393/ITSa6UxB_400x400.jpg",
  },
  {
    name: "arbynoescape",
    img: "https://pbs.twimg.com/profile_images/1610608301905182723/Np6gSNRO_400x400.jpg",
  },
  {
    name: "ArcaneDegen",
    img: "https://pbs.twimg.com/profile_images/1610021778117509121/KmKSlzj7_400x400.jpg",
  },
  {
    name: "Argoleine",
    img: "https://pbs.twimg.com/profile_images/1585061590310813696/lnlhnFHb_400x400.jpg",
  },
  {
    name: "arisalriadhi",
    img: "https://pbs.twimg.com/profile_images/1499762362144145411/YGA921zZ_400x400.jpg",
  },
  {
    name: "art_snitch",
    img: "https://pbs.twimg.com/profile_images/1611129783911579650/QBRW96Ho_400x400.jpg",
  },
  {
    name: "aspanmartin",
    img: "https://pbs.twimg.com/profile_images/1472117665137238017/rzKqAGEB_400x400.jpg",
  },
  {
    name: "AustinS71477447",
    img: "https://pbs.twimg.com/profile_images/1567930387397054465/3FM6Qhdf_400x400.png",
  },
  {
    name: "ayubdiponegoro",
    img: "https://pbs.twimg.com/profile_images/1527675804573847552/yLE4mg55_400x400.jpg",
  },
  {
    name: "babygirljasz",
    img: "https://pbs.twimg.com/profile_images/1600388691331059712/4COG3dJD_400x400.jpg",
  },
  {
    name: "basemenTxnft",
    img: "https://pbs.twimg.com/profile_images/1501806618681364487/qGn5d2nc_400x400.jpg",
  },
  {
    name: "Bebenellz22",
    img: "https://pbs.twimg.com/profile_images/1599354959492939776/ve3XkL0O_400x400.jpg",
  },
  {
    name: "beijingdou",
    img: "https://pbs.twimg.com/profile_images/1602122467002155010/MI7V7cqu_400x400.png",
  },
  {
    name: "BgToph",
    img: "https://pbs.twimg.com/profile_images/1585721065996681216/Dp67NS-q_400x400.jpg",
  },
  {
    name: "biemprima",
    img: "https://pbs.twimg.com/profile_images/1592380688380358656/3Ya7nYzC_400x400.jpg",
  },
  {
    name: "biIIymeister",
    img: "https://pbs.twimg.com/profile_images/1508978081276608513/Tiv6CvNy_400x400.jpg",
  },
  {
    name: "bombay_digital",
    img: "https://pbs.twimg.com/profile_images/1602501252339838976/aBB-teZg_400x400.png",
  },
  {
    name: "BryanWilliam_xx",
    img: "https://pbs.twimg.com/profile_images/1601223998120988672/6xHLMY4j_400x400.jpg",
  },
  {
    name: "BuchochoyCrypto",
    img: "https://pbs.twimg.com/profile_images/1609299772330086400/3egfZmX8_400x400.jpg",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="card-box">
          <img src={card} className="card" />
          <img src={data[1].img} className="user-img" />
          <p className="user-name">{data[1].name}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
