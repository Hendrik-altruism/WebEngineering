export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateAnimation(animation){
    if(animation){
      return "scale";
    }
    const rand = Math.round(Math.random() * (3 - 1)) + 1;
    console.log(rand)
    switch(rand){
      case 1: return "rotate";
      case 2: return "fly-x";
      case 3: return "fly-y";
    }
}