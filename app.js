let pronoun = ['my', 'our', 'the'];
let adj = ['power', 'dark', 'awesome'];
let noun = ['monkey', 'dog', 'ghost', 'brother'];
let dom = ['.com', '.org', '.net'];
let text = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dom.length; l++) {
        text += pronoun[i] + adj[j] + noun[k] + dom[l] + "<br>";
      }
    }
  }
}

document.querySelector('#domain').innerHTML = text;
