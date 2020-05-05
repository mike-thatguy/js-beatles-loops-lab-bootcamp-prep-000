// add solution here
function theBeatlesPlay(ppl, instr) {
  let arr = [];
  for (let i = 0; i < ppl.length; i++) {
    arr.push(`${ppl[i]} plays ${instr[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  let newFacts = [];
  while (i < facts.length) {
    newFacts.push `${facts[i]}!!!`;
  }
  return newFacts;
}
