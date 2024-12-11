import { CommonInfo } from "../../components/CommonInfo/CommonInfo";
import { Inventory } from "../../components/Inventory/Inventory";
import { CharterInfo } from "../../components/CharterInfo/CharterInfo";
import { Characteristics } from "../../components/Characteristics/Characteristics";
import { SavingThrows } from "../../components/SavingThrows/SavingThrows";
import { Features } from "../../components/Features/Features";
import { Magic } from "../../components/Magic/Magic";
import { OtherInfo } from "../../components/OtherInfo/OtherInfo";
import { Attacs } from "../../components/Attacs/Attacs";
import { CharacterDiscriptions } from "../../components/CharacterDiscriptions/CharacterDiscriptions";
import { Proficiencis } from "../../components/Proficiencis/Proficiencis";

import css from "./CharterSheet.module.css";

export default function CharterSheet() {
  return (
    <div className={css.container}>
      <h1>Лист персонажу</h1>
      <div className={css.flexContainer}>
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
    </div>
  );
}
