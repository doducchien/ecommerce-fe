const getData = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}


const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return JSON.stringify(getData(key)) == JSON.stringify(value);

}

const removeData = (key) => {
    localStorage.removeItem(key);
    return JSON.parse(getData(key)) == null
}

const clearData = () => {
    localStorage.clear();
    return localStorage.length == 0;
}

export const localSpace = { getData, setData, removeData, clearData }