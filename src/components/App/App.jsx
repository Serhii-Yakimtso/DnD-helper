import "./App.module.css";
import { CommonInfo } from "../CommonInfo/CommonInfo";
import { Inventory } from "../Inventory/Inventory";
import { CharterInfo } from "../CharterInfo/CharterInfo";
import { Characteristics } from "../Characteristics/Characteristics";
import { SavingThrows } from "../SavingThrows/SavingThrows";
import { Features } from "../Features/Features";
import { Magic } from "../Magic/Magic";
import { OtherInfo } from "../OtherInfo/OtherInfo";
import { Attacs } from "../Attacs/Attacs";
import { CharacterDiscriptions } from "../CharacterDiscriptions/CharacterDiscriptions";
import { Proficiencis } from "../Proficiencis/Proficiencis";
import css from "./App.module.css";

function App() {
  return (
    <div className={`${css.container} ${css.flexContainer}`}>
      <div className={css.LeftPart}>
        <CharterInfo />
        <Inventory />
      </div>
      <div className={css.middlePart}>
        <div className={css.flexContainer}>
          <div>
            <Characteristics />
            <SavingThrows />
          </div>
          <CommonInfo />
        </div>
        <div className={css.flexContainer}>
          <Features />
          <Magic />
        </div>
      </div>
      <div className={css.rightPart}>
        <div className={css.flexContainer}>
          <OtherInfo />
          <div>
            <CharacterDiscriptions />
            <Proficiencis />
          </div>
        </div>
        <Attacs />
      </div>
    </div>
  );
}

export default App;
