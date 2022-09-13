// import Missions from "./mission.js";
import {declareAllEvents} from "./events.js"
import {deleteSingleMission, createAllMission , deleteAll} from "./missionManger.js"

const init = () =>{
    createAllMission();
    declareAllEvents(deleteAll);
}
init();

