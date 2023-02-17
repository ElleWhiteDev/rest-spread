const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

const removeRandom = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});  

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}