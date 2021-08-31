
let listProducts = ["Honda", "Yamaha", "lexus", "nissan", "sumasu", "suzuki", "lambogini" ];
function addProduct() {
  let  newProduct = document.getElementById("input").value;
    if (newProduct!=0){
        listProducts.unshift(newProduct);
    }
    document.getElementById("input").value="";
   disPlay()
}
function disPlay() {
    let table="";
    for (let i = 0; i < listProducts.length; i++) {
        table = table + "<tr>"+ "<td>"+listProducts[i]+"</td>"
            +"<td>"+"<button onclick='editProduct("+i+")'>Edit</button>"+"</td>"
            +"<td>"+"<button onclick='deleteProduct("+i+")'>Delete</button>"+"</td>"+"</tr>"
    }
    table = table + "</table>"
    document.getElementById("products").innerHTML=table;
    document.getElementById("sumOfProduct").innerText = listProducts.length + "sản phẩm";
}
function deleteProduct(index) {
  listProducts.splice(index,1)
    disPlay()
}
function editProduct(index) {
    let product = prompt("Tên sản phẩm thay thế" , listProducts[index]);
    listProducts[index] = product;
    disPlay()
}