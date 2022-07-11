const complimentBtn = document.getElementById("complimentButton")
const complimentsBtn = document.getElementById("complimentsButton")
const addComplimentBtn = document.getElementById("addComplimentButton")
const allCapsBtn = document.getElementById("putAllCapsButton")
const deleteBtn = document.getElementById("deleteAllButton")
const list = document.getElementById("newList")
const inputField = document.querySelector("input")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            list.innerHTML = data;
    });
};

const getCompliments = () => {
    axios.get("http://localhost:4000/api/compliments/")
        .then(res => {
            const data = res.data;
            list.innerHTML = data;
    });
};

const addCompliment = () => {
    console.log(inputField.value);
    axios.put("http://localhost:4000/api/compliments/", {compliment: inputField.value})
    .then(res => {
        getCompliments();
    })
};

const allCapsify = () => {
    axios.post("http://localhost:4000/api/compliment/", )
    .then(res => {
        getCompliments();
    })
}

const deleteAllList = () => {
    axios.delete("http://localhost:4000/api/compliments/")
    .then(res => {
        getCompliments();
    })
}
complimentBtn.addEventListener('click', getCompliment)
addComplimentBtn.addEventListener('click', addCompliment)
allCapsBtn.addEventListener('click', allCapsify)
deleteBtn.addEventListener('click', deleteAllList)
complimentsBtn.addEventListener('click', getCompliments)