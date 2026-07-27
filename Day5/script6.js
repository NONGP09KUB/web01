// ดึงข้อมูลจากปุ่มและเพิ่มลงในตาราง
const btn = document.querySelector("button");
// ดึงข้อมูลจาก tbody ของตาราง
const tbody = document.getElementById("alltask").querySelector("tbody");

// เพิ่ม event ให้กับปุ่ม
btn.addEventListener("click", function(){
    
    const tr  = document.createElement("tr");
    const td  = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    td3.appendChild(checkbox);
    tr.appendChild(td3);
    tr.appendChild(td2);
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "bin.png";
    deleteBtn.height = "20";
    const binbtn = document.createElement("button");
    binbtn.style.border = "none";   
    binbtn.style.background = "none";   
    binbtn.appendChild(deleteBtn);
    td3.appendChild(binbtn);
    tr.appendChild(td3);

    deleteBtn.addEventListener("click", function(){
        if(confirm("คุณต้องการลบงานนี้หรือไม่?") == true)        
        tr.remove();
    })

    const taskname = document.getElementById("task");   
    const textnode = document.createTextNode(taskname.value);
    td.appendChild(textnode);
    tr.appendChild(td);
    tbody.appendChild(tr);
    taskname.value = "";

  

})


