function organizeGifts(gifts) {
    const count = {};
    gifts.match(/\d+[a-zA-Z]/g).forEach((item) =>{
      const quantity = parseInt(item);
      const type = item[item.length - 1];
      count[type] = (count[type] || 0) + quantity;
    });

    let result = '';

    for (let type in count){
      const quantity = count[type];
      const pallets = Math.floor(quantity / 50);
      const boxes = Math.floor((quantity % 50) / 10);
      const remaining = quantity % 10;
      result += `[${type}]`.repeat(pallets);
      result += `{${type}}`.repeat(boxes);

      if (remaining > 0 && quantity % 10 !== 0){
        result += '(';
        result += `${type.repeat(remaining)}`;
        result += ')';
      }
    }
    return result;
}
  
  
const inputString = '70b120a4c';
const organizedGifts = organizeGifts(inputString);
console.log(organizedGifts);
  