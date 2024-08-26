import React from 'react';
import { useState } from "react"
import TypingEffect from "./TypingEffect"
import { Cursor } from './Cursor';
// import { useKonamiCode } from "../lib/konami"; 


// const API_URL = 'https://dummyjson.com/todos';


export default function Main() {
    
    let storyBoardContent = "You wake up in the woods and have no idea how you got there.  There is a path due North in front of you.  What direction would you like to go?"
    let instructions = "You can type 'help' for instructions on how to play!"
    let goNorth = "You're going North and see a BEAR!!! its pretty overwhelming and you lose"
    let helpScreen = "You have to type a command to proceed.  At this time 'north' or 'inventory' are your only options.  You can also 'use' an item from your inventory, if you have anything other than lint. To use an inventory item type 'use (item)'."
    
    let [state, setState] = useState(storyBoardContent)
    const [instructPlayer, setInstruction] = useState(instructions)
    const [selfAware, setSelfAware] = useState(false)
    const [inventory, setInventory] = useState(["an old lighter"])
    const [forthWall, setForthWall] = useState(false)

    const [startSecondTyping, setStartSecondTyping] = useState(false)

    const [inputValue, setInputValue] = useState('')

    // const [todoContent, setTodoContent] = useState("")
    // async function updateTodo() {
    //     let todoRes = await fetch(API_URL);
    //     let todoJson = await todoRes.json();
    //     let todoContent = todoJson.todos[Math.round(Math.random() *  (todoJson?.todos?.length ?? 0)  )].todo;
    //     // console.log('🪵 | toDos | todoContent:', todoContent);
    //     setTodoContent(todoContent);
    // }

    // const [isCodeActive] = useKonamiCode()
    // React.useEffect(function() {
    //     if (isCodeActive) {
    //         setState("🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚🗿🥚")
    //     }
    // }, [isCodeActive])

    // React.useEffect(() => {
    // }, [])

    function handleClick() {
        if (state === storyBoardContent) {
            setState("You clicked the INPUT BOX!!! Now type 'help', 'inventory' or 'north'") 
            setInstruction("=)");
        } else {setState(storyBoardContent)}
    }
    
    function handleInputChange(e) {
        console.log(e.target.value)
        setInputValue(e.target.value)
        if (e.key === 'Enter' && forthWall && e.target.value === "north") {
            setState("maybe do nothing?")
            setInputValue("");
            setInstruction("whoops")
            setSelfAware("oh...the bear is gone...uhhh...maybe just don't do anything...I haven't planned this far ahead yet")
        }
        if (e.key === 'Enter' && e.target.value === "help") {
            setState(helpScreen)
            setInputValue("");
            setInstruction("") 
            setSelfAware("") 
        } if (e.key === 'Enter' && e.target.value === "north") {
            setState(goNorth)
            setInputValue(""); 
            setInstruction("GAME OVER " + "type 'restart' to try again")
            setSelfAware("")
        } if (e.key === 'Enter' && e.target.value === "inventory") {
            setInputValue("");
            setInstruction(`you check your pockets and find: ${inventory}`)
            setSelfAware("")
        } if (e.key === 'Enter' && e.target.value === "restart") {
            setState(storyBoardContent);
            setInputValue("");
            setInstruction("")
            setSelfAware("Hey there...Welcome back to the land of the living...what will you do differently this time I wonder...");
            setForthWall(true);
            setInventory(["an old lighter"])
            } if (e.key === 'Enter' && e.target.value === "use old lighter") {
            setState("You attempt to spark the lighter but it crumbles apart in your hand...almost as if it never even existed...")
            setInputValue("");
            setInstruction("way to go...now we have NOTHING")
            setInventory (["nothing but lint"])
        } if (e.key === 'Enter' && e.target.value === "do nothing") {
            setState("YOU WON!!!!")
            setInputValue("you lazy jerk ಠ_ಠ")
            setInstruction("🎈🎈🎈🎈🎈🎈")
            setSelfAware("oh...okay...cool...you do you")
        } if (e.key === 'Enter' && e.target.value === "use lint") {
            setState("You can't do that");
            setSelfAware("Come on now...");
            setInstruction("That's what you're trying to do?")
            setInputValue("seriously???")
        }
    }



    return (
    <div className="full-container">
        <div className="first-container">
            <p className="story-board-aware">{selfAware}</p>
            <div>

            <TypingEffect text={state} speed={30} width={50} onComplete={() => setStartSecondTyping(true)}/>
            </div>
            <div style={{paddingTop: 50}}>

            <TypingEffect text={instructPlayer} speed={30} width={50} beginTyping={startSecondTyping}/>
            </div>
            {/* <div> 
            <p className="story-board">{state}</p>
            <p className="inventory"></p>
            {
            typeof todoContent === 'string' && <p className="inventory">{todoContent}</p>
            }
            {
                todoContent?.todos?.length && todoContent?.todos.map((todoItem) => (
                <p className="inventory">{todoItem.todo}</p>
            ))
            }
            </div> */}
        </div>
        <div className="cursor">
        <input value={inputValue} type="text" onKeyDown={handleInputChange} onChange={handleInputChange} onClick={handleClick} className="user-text-input" />
        <i className="cursor-container" style={{marginLeft: 21 * inputValue?.length

        }}>
        <Cursor width={20} height={36}/>
        </i>
     </div>
     </div>
     
    )

}

// hey...so some of this is working and some of it isnt...the blinking cursor issue is all but fixed but not everything is typing out with the TypingEffect yet...which makes sense because I havent updated everything with it yet...so that should probably be the next focus...also, we keep getting errors with they "TypingEffect" line 110...

// next things to change
// -have the input bar clear out properly after hitting enter (this was working before)
// -change the handleClick so it wont display the same two messages...or any message at all(maybe)
// -start the cursor in the actual input box... 
// -make a settings option where you can change the color of the text
// -do the selfAware text in a different color (THIS MUST CHANGE WHEN THE USER CHANGES COLOR...or just have it as a different color that they cannot select)
// -more storyBoardContent...i mean theres legit one option at the moment...this has to change
// -gabby wants pictures...idk why she wants pictures so badly...but its not a horrible idea... 