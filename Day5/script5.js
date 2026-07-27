// ดึงปุ่มจาก HTML
const btn = document.querySelector("button");

// เพิ่ม event ให้กับปุ่ม
btn.addEventListener("click", function(){
    // ดึงค่าจาก input
    const pname = document.getElementById("pname");   
    // สร้าง li 
    const list = document.createElement("li");
    // ดึง ul
    const ul = document.getElementById("productList");
    // เพิ่มค่าใน li
    list.textContent = pname.value;
    // เพิ่ม li เข้าไปใน ul
    ul.appendChild(list);
    // ล้างค่าใน input
    pname.value = "";

})


