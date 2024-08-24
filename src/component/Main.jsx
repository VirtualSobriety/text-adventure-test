import { useState } from "react"

export default function Main() {
    
    let storyBoardContent = "You wake up in the woods and have no idea how you got there.  There is a path due North in front of you.  What direction would you like to go?"
    let instructions = "type 'help' for instructions on how to play!"
    let goNorth = "You're going North and see a BEAR!!! its pretty overwhelming and you lose"
    let helpScreen = "You have to type a command to proceed.  At this time 'north' or 'inventory' are your only options.  You can also 'use' an item from your inventory, if you have anything other than lint."

    const [state, setState] = useState(storyBoardContent)
    const [instructPlayer, setInstruction] = useState(instructions)
    const [selfAware, setSelfAware] = useState(false)
    const [inventory, setInventory] = useState(["an old lighter"])
    const [forthWall, setForthWall] = useState(false)

    function handleClick() {
        if (state === storyBoardContent) {
            setState("You clicked the INPUT BOX!!! Now type 'help', 'inventory' or 'north'") 
            setInstruction("=)")
        } else {setState(storyBoardContent)}
    }
    function handleInputChange(e) {
        console.log(e.target.value)
        if (forthWall && e.target.value === "north") {
            setState("maybe do nothing?")
            e.target.value = "";
            setInstruction("whoops")
            setSelfAware("oh...the bear is gone...uhhh...maybe just don't do anything...I haven't planned this far ahead yet")
        }
        if (e.target.value === "help") {
            setState(helpScreen)
            e.target.value = ""; 
            setInstruction("") 
            setSelfAware("") 
        } if (e.target.value === "north") {
            setState(goNorth)
            e.target.value = ""; 
            setInstruction("GAME OVER " + "type 'restart' to try again")
            setSelfAware("")
        } if (e.target.value === "inventory") {
            e.target.value = "";
            setInstruction("you check your pockets and find: " + inventory)
            setSelfAware("")
        } if (e.target.value === "restart") {
            setState(storyBoardContent);
            e.target.value ="";
            setInstruction("")
            setSelfAware("Hey there...Welcome back to the land of the living...what will you do differently this time I wonder...");
            setForthWall(true);
            setInventory(["an old lighter"])
            } if (e.target.value === "use old lighter") {
            setState("You attempt to spark the lighter but it crumbles apart in your hand...almost as if it never even existed...")
            e.target.value ="";
            setInstruction("way to go...now we have NOTHING")
            setInventory (["nothing but lint"])
        } if (e.target.value === "do nothing") {
            setState("YOU WON!!!!")
            e.target.value = "you lazy jerk ಠ_ಠ"
            setInstruction("🎈🎈🎈🎈🎈🎈")
            setSelfAware("oh...okay...cool...you do you")
        } if (e.target.value === "use lint") {
            setState("You can't do that");
            setSelfAware("Come on now...");
            setInstruction("That's what you're trying to do?")
            e.target.value = "seriously???"
        }
    }
    return (
    <div className="full-container">
        <div className="first-container">
            <p className="story-board-aware">{selfAware}</p>
            <p className="story-board">{state}
            </p>
            {/* <p className="inventory"></p> */}
            <p className="instruction">{instructPlayer}</p>
        </div>
        <div className="cursor">
        <input type="text" onChange={handleInputChange} onClick={handleClick} className="user-text-input"/>
        <i></i>
     </div>
     </div>
    )
}