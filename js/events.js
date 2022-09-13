import { createAllMission } from "./missionManger.js";

// let inputName = document.querySelector("#id_name")
// let inputTime = document.querySelector("#id_time") 
export const declareAllEvents =(deleteAll)=>{
    let resetBtn = document.querySelector("#reset_btn")
    resetBtn.addEventListener("click", () =>{
        deleteAll();
    })
 

}