export default function orderByProps(obj, arr) {
  const resultArr = arr.map((el) => ({ key: el, value: obj[el] }));
  const keysArr = [];

  // for (const el in obj) {
  //   if (!arr.includes(el)) {
  //     keysArr.push(el);
  //   }
  // }

  // resultArr.push(...keysArr.sort().map((el) => ({ key: el, value: obj[el] })));

  Object.keys(obj).sort().forEach((sortKey) => {
    if (!arr.includes(sortKey)) {
      resultArr.push({ key: sortKey, value: obj[sortKey] });
    }
  });
  return resultArr;
}
