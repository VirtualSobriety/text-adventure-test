import React from "react";
import { useState } from "react";
import TypingEffect from "./component/TypingEffect";
import { Cursor } from "./component/Cursor";
import {
  stories,
  help,
  directions,
  instructions,
  inventoryItems,
  end,
  noText,
} from "./component/allTextData";

export default function Main() {
  const blank = noText.noText.space;
  const nothing = noText.noText.nothing;

  const [textBoxOne, setTextBoxOne] = useState(blank);
  const [textBoxTwo, setTextBoxTwo] = useState(stories.firstStory.content);
  const [textBoxThree, setTextBoxThree] = useState(
    instructions.firstInstruction.content
  );
  const [fourthWall, setForthWall] = useState(false);
  const [startSecondTyping, setStartSecondTyping] = useState(false);
  const [startThirdTyping, setStartThirdTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inventory, setInventory] = useState(["an old lighter"]);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);

  function handleInputChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
    const targetValue = e.target.value.toLowerCase();
    if (e.key !== "Enter") {
      return;
    }

    if (fourthWall && targetValue === "north") {
      setStartSecondTyping(false);
      setStartThirdTyping(false);
      setTextBoxOne(directions.firstNorthAware.fourthWall);
      setTextBoxTwo(directions.firstNorthAware.content);
      setTextBoxThree(end.endings.good, setImage2(true));
      setImage1("src/images/deadybear.png");
      setImage2("src/images/congratulations.png");
      setInputValue(nothing);
    } else if (targetValue === "help") {
      setTextBoxOne(blank);
      setTextBoxTwo(blank);
      setTextBoxThree(help.helpOne.content);
      setInputValue(nothing);
    } else if (targetValue === "north") {
      setTextBoxOne(blank);
      setTextBoxTwo(directions.firstNorth.content);
      setTextBoxThree(stories.restart.content);
      setInputValue(nothing);
    } else if (targetValue === "inventory") {
      setTextBoxOne(blank);
      setTextBoxTwo(inventoryItems.inventory.text);
      setTextBoxThree(inventory);
      setInputValue(nothing);
    } else if (targetValue === "restart") {
      setStartSecondTyping(false);
      setTextBoxOne(stories.fourthWallOne.content);
      setTextBoxTwo(stories.firstStory.content);
      setTextBoxThree(blank);
      setInputValue(nothing);
      setInventory(["an old lighter", ", ", "maybe a stick or something"]);
      setForthWall(true);
    } else if (targetValue === "use old lighter") {
      setTextBoxOne(blank);
      setTextBoxTwo(inventoryItems.oldLighter.noFix);
      setTextBoxThree(blank);
      setInputValue(nothing);
      setInventory(["nothing but lint"]);
    } else if (targetValue === "do nothing") {
      setTextBoxOne(blank);
      setTextBoxTwo(blank);
      setTextBoxThree(blank);
      setInputValue("play again?");
    } else if (targetValue === "use lint") {
      setTextBoxOne(blank);
      setTextBoxTwo(blank);
      setTextBoxThree(blank);
      setInputValue(nothing);
      setInventory(["literally nothing at all...for real this time"]);
    } else if (targetValue === "south") {
      setTextBoxOne(blank);
      setTextBoxTwo(directions.firstSouth.content);
      setTextBoxThree(directions.firstSouth.contentPt2);
      setInputValue(blank);
    } else if (targetValue === "use comma" && inventory.includes(", ")) {
      setTextBoxOne("you did it");
      setTextBoxTwo("youre a douche!");
      setTextBoxThree("the king all off douches!");
      setInputValue("all hail king douche!");
    }
  }

  return (
    <div className="full-container">
      <div className="first-container">
        <div className="first-text-content">
          <TypingEffect
            text={textBoxOne}
            speed={30}
            width={50}
            onComplete={() => setStartSecondTyping(true)}
          />
        </div>
        <div className="second-text-content">
          <TypingEffect
            text={textBoxTwo}
            speed={30}
            width={50}
            beginTyping={startSecondTyping}
            onComplete={() => setStartThirdTyping(true)}
          />
        </div>
        <div className="third-text-content" style={{ paddingTop: 50 }}>
          <TypingEffect
            text={textBoxThree}
            speed={30}
            width={50}
            beginTyping={startThirdTyping}
          />
        </div>
      </div>
      <div className="cursor">
        <input
          value={inputValue}
          type="text"
          onKeyDown={handleInputChange}
          onChange={handleInputChange}
          className="user-text-input"
          autoFocus
        />
        <i
          className="cursor-container"
          style={{ marginLeft: 21 * inputValue?.length }}
        >
          <Cursor width={20} height={36} />
        </i>
      </div>
      <div>
        <img
          className={`picture-for-gabby1 ${image1 ? "visible" : ""}`}
          src={image1 ? image1 : ""}
        />
        <img
          className={`picture-for-gabby ${image2 ? "visible" : ""}`}
          src={image2 ? image2 : ""}
          alt=""
        />
      </div>
    </div>
  );
}

// next things to change
// -make a settings option where you can change the color of the text
// -do the textBoxOne  text in a different color (THIS MUST CHANGE WHEN THE USER CHANGES COLOR...or just have it as a different color that they cannot select)
// -more textBoxOneContent...i mean theres legit one option at the moment...this has to change
// -gabby wants pictures...idk why she wants pictures so badly...but its not a horrible idea...
// YOU HAVE TO FIX THE INVENTORY ISSUE!

// let directions1 = ["start"] ["north", "north", "south", "north"]
// let directions2= ["east", "east", "north", "house"]

// [...F..H]
// [...N..N]
// [..WPEEE]
// [...S...]
// [...C...]

// const map = [
//   [FART, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// let position = [5, 2];

// if (position[0] === 0 && position[1] === 0) {
//   console.log("HOLY SHIT ITS ALL ZEROES");
// }

// function goEast(pos) {
//   const [x, y] = pos;
//   return [x >= 9 ? 9 : x + 1, y];
// }
// function goWest(pos) {
//   const [x, y] = pos;
//   return [x - 1, y];
// }
// function goNorth(pos) {
//   const [x, y] = pos;
//   return [x, y - 1];
// }
// function goSouth(pos) {
//   const [x, y] = pos;
//   return [x, y + 1];
// }
