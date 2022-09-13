import Missions from "./mission.js"
let missionsArr = (localStorage["missions"])? JSON.parse(localStorage["missions"]): [];
let form = document.querySelector("#id_form")
export const deleteSingleMission = (_idDel) => {
  missionsArr.forEach((item,i) => {
    if(i == _idDel){
      missionsArr.splice(i,1);
    }
  })
  createAllMission();
}
export const createAllMission =(_arr = missionsArr) =>{
  document.querySelector("#id_tr").innerHTML = "";
  localStorage.setItem("missions",JSON.stringify( _arr))
  _arr = _.sortBy(_arr , "time")
  _arr.forEach((item , index) =>{
      let mission = new Missions("#id_tr", item , index, deleteSingleMission)
  } )
}
export const deleteAll =() =>{
  if (confirm("Are you sure you want to delete all?")){
    missionsArr.splice(0 , missionsArr.length);
    console.log(missionsArr)
    createAllMission();
  }
}
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(document.querySelector("#id_name").value.length<=2){
    alert("Too Short")
  }
  let mission = {
      name: document.querySelector("#id_name").value,
      time: document.querySelector("#id_time").value
    }
  console.log(mission)
  missionsArr.push(mission);
  createAllMission(missionsArr)
})

