export default class Missions{
    constructor(_parent, _item , _id , _deleteSingleMission){
        this.parent = _parent;
        this.name = _item.name;
        this.time = _item.time;
        this.id = _id;
        this.deleteSingleMission = _deleteSingleMission
        this.render();
    }
    render(){
        let tr = document.createElement("tr");
        document.querySelector("#id_tr").append(tr);
        tr.innerHTML += `
        <tr>
        <td>${this.name}</td>
        <td>${this.time}</td> 
        <td><button class="btn btn-danger badge delete">X</button></td> 
      </tr>
        `
        let delBtn = tr.querySelector(".delete");
        delBtn.addEventListener("click", ()=>{
            if(confirm("Are you sure you want to delete this mission?")){

                this.deleteSingleMission(this.id)
            }
        
        })
    }
}