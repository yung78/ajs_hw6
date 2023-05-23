export default function orderByProps(obj, arr) {
  const resultArr = arr.map((el) => ({ key: el, value: obj[el] }));

  resultArr.push(...Object.keys(obj).filter((el) => !arr.includes(el)).sort().map((el) => ({ key: el, value: obj[el] })));

  return resultArr;
}
