import "./App.css";
import Color from "./components/Color";
const colorData = [
  {
    name: "Absolute Zero",
    hex: "#0048BA",
  },
  {
    name: "Acid Green",
    hex: "#B0BF1A",
  },
  {
    name: "Aero",
    hex: "#7CB9E8",
  },
  {
    name: "Chinese Red",
    hex: "#AA381E",
  },
  {
    name: "Eggplant",
    hex: "#614051",
  },
  {
    name: "Fiery Rose",
    hex: "#FF5470",
  },
  {
    name: "Gamboge",
    hex: "#E49B0F",
  },
  {
    name: "Harlequin",
    hex: "#3FFF00",
  },
  {
    name: "Dark Byzantium",
    hex: "#5D3954",
  },
  {
    name: "Zomp",
    hex: "#39A78E",
  } ,
  {
    "name": "Laser Lemon",
    "hex": "#FFFF66"
  },
  {
    "name": "Laurel Green",
    "hex": "#A9BA9D"
  },
  {
    "name": "Lava",
    "hex": "#CF1020"
  },
  {
    "name": "Lavender (Floral)",
    "hex": "#B57EDC"
  },
  {
    "name": "Lavender (Web)",
    "hex": "#E6E6FA"
  },
  {
    "name": "Lavender Blue",
    "hex": "#CCCCFF"
  },
  {
    "name": "Lavender Blush",
    "hex": "#FFF0F5"
  },
  {
    "name": "Lavender Gray",
    "hex": "#C4C3D0"
  },
  {
    "name": "Lavender Indigo",
    "hex": "#9457EB"
  },
  {
    "name": "Lavender Magenta",
    "hex": "#EE82EE"
  },
  {
    "name": "Lavender Mist",
    "hex": "#E6E6FA"
  },
  {
    "name": "Lavender Pink",
    "hex": "#FBAED2"
  },
  {
    "name": "Lavender Purple",
    "hex": "#967BB6"
  },
  {
    "name": "Lavender Rose",
    "hex": "#FBA0E3"
  }
];

function App() {
  return (
    <>
      <h1>Color Codes</h1>
      <div id="mainContainer">
        {colorData.map((ele, ind) => {
          return <Color key={ind} colorCode={ele.hex} colorName={ele.name} />;
        })}
      </div>
    </>
  );
}

export default App;
