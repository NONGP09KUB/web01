
const btns = document.querySelectorAll(".coffee-button");
const tbody = document.querySelector("#itemTable tbody");
const total = document.getElementById("total");
let totalPrice = 0;
function getPrice(coffeeD) {
    let price = 0;
    switch(coffeeD) {
        case "Espresso":
            price = 2.50;
            break;
        case "Cappuccino":
            price = 3.50;
            break;
        case "Latte":
            price = 4.00;
            break;
        default:
            price = 0;
    }
    return price;
}

btns.forEach(function(btn) {
    btn.addEventListener("click", ()=>{
        const coffeeD = btn.textContent;
        const price = getPrice(coffeeD);
        const tr  = document.createElement("tr");
        const td1  = document.createElement("td");
        td1.textContent = coffeeD;
        tr.appendChild(td1);
        tbody.appendChild(tr);

        const td2  = document.createElement("td");
        // คำนวนราคาและแสดงผล
        // toFixed(2) เพื่อแสดงทศนิยม 2 ตำแหน่ง
        td2.textContent = price.toFixed(2);
        tr.appendChild(td2);
        tbody.appendChild(tr);

        const td3  = document.createElement("td");
        td3.textContent = "1";
        tr.appendChild(td3);
        tbody.appendChild(tr);

        const td4  = document.createElement("td");
        const sub = price * 1;
        totalPrice += sub;
        total.textContent = totalPrice.toFixed(2);
        td4.textContent = sub.toFixed(2);
        tr.appendChild(td4);
        tbody.appendChild(tr);

        const td5 = document.createElement("td");
        
        const removeBtn = document.createElement("button");
        const deleteBtn = document.createElement("img");
        deleteBtn.src = "bin.png";
        deleteBtn.height = "20";
        removeBtn.style.border = "none";
        removeBtn.style.background = "none";
        removeBtn.appendChild(deleteBtn);
        td5.appendChild(removeBtn);
        tr.appendChild(td5);
        tbody.appendChild(tr);
        
        removeBtn.addEventListener("click", function(){
        //if(confirm("คุณต้องการลบงานนี้หรือไม่?") == true)        
        tr.remove();
        totalPrice -= sub;
        total.textContent = totalPrice.toFixed(2);
       

    })
    })
})
