const stories = {
  firstStory: {
    content:
      "You wake up in the woods and have no idea how you got there.  There is a path in front of you to the North.  What direction would you like to go?",
    textColor: "yellow",
  },
  doNothing: {
    content: "maybe do nothing?",
    textColor: "blue",
  },
  secondStory: {
    content:
      "You're going North and see a BEAR!!! its pretty overwhelming and you lose",
    textColor: "white",
  },
  fourthWallOne: {
    content: "Hey there, this is the fourth wall break portion of the game",
  },
  restart: {
    content: "Type 'restart' to try again!",
  },
};

const help = {
  helpOne: {
    content:
      "You have to type a command to proceed.  At this time 'north' or 'inventory' are your only options.  You can also 'use' an item from your inventory, if you have anything other than lint. To use an inventory item type 'use (item)'.",
  },
};

const directions = {
  firstNorth: {
    content:
      "You're going North and see a BEAR!!! its pretty overwhelming and you lose",
  },
  firstNorthAware: {
    fourthWall: "Oh...I wonder how that happened",
    content: "the bear is dead...you can now continue...",
  },
  firstSouth: {
    content:
      "Turning around and going South you walk face first into a tree...and bees...there was also a bees nest...and you walked into that too",
    contentPt2:
      "You dont get stung...not once...the bees are actually pretty chill.  But...the bear from the North smelt the honey from the hive and it killed you.  So you're dead now",
  },
};

const instructions = {
  firstInstruction: {
    content: "You can type 'help' for instructions on how to play!",
  },
};

const inventoryItems = {
  inventory: {
    text: "You check your pockets and find",
  },
  oldLighter: {
    noFix:
      "you attempt to spark the lighter but it crumbles in your hand as if it never existed",
  },
  nothing: {
    bad: "that we have NOTHING",
  },
};

const end = {
  endings: {
    good: "CONGRATULATIONS!!!!",
    bad: "oh...you lose...game over",
  },
};

const noText = {
  noText: {
    space: " ",
    nothing: "",
  },
};

export { stories, help, directions, instructions, inventoryItems, end, noText };
