function decode(message) {
  const regex = /\(([^()]+)\)/g
  const replacer = (_, group) => [...group].reverse().join("")

  return message
    .replace(regex, replacer)
    .replace(regex, replacer)
}
  
const a = decode('hola (odnum)');
console.log(a); // hola mundo
  
const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!
  
const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus
  