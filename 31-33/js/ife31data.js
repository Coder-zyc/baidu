let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]





var region_select = document.getElementById("region-select");
var product_select = document.getElementById("product-select");
var table_wrapper = document.getElementById("table-wrapper");

var region_radio_select = document.getElementById("region-radio-select");
var product_radio_select = document.getElementById("product-radio-select");
var tr;


// function createCheckBox( checkBoxDiv, checkBoxObj ) {
//     var checkBoxAll = document.createElement("input");
//     checkBoxAll.setAttribute("type","checkbox");
//     checkBoxAll.setAttribute("id","checkAll");
//     // checkBoxAll.setAttribute("checked",false);
//     // checkBoxAll.setAttribute("checkbox-type","all");
//     checkBoxDiv.appendChild(checkBoxAll);
//     checkBoxDiv.appendChild(document.createTextNode("全选"));
//     for(var i in checkBoxObj) {
//        var checkBox =  document.createElement("input");
//        checkBox.setAttribute("name","checkName");
//        checkBox.setAttribute("type","checkbox");
//        checkBox.setAttribute("id",i);
//     //    checkBox.setAttribute("checked",false);
//     //    checkBox.setAttribute("checkbox-type","");
//        if(checkBoxObj[i].value){
//         checkBox.setAttribute("value",checkBoxObj[i].value); 
//        }
       

//        checkBoxDiv.appendChild(checkBox);
//        checkBoxDiv.appendChild(document.createTextNode(checkBoxObj[i].text));
//     }
 
//     for(var j=0;j<checkBoxDiv.children.length;j++){
//         checkBoxDiv.children[j].onclick = function() {

//             var a=[],b=[];
//             var allCheck = document.getElementsByName("checkName");

//             // var checked =checkBoxAll.getAttribute("checked");
//             // console.log(checked);

//             if(checkBoxAll.getAttribute("checked")==true){  
//                     for(var i=0;i<allCheck.length;i++){
//                         allCheck[i].setAttribute("checked",true);
//                         a.push(allCheck[i].getAttribute("value"));
//                     }
//                     console.log(a);
//                 }else{
//                     for(var i=0;i<allCheck.length;i++){
//                         if(allCheck[i].getAttribute("checked")==true){
//                             console.log(1);
//                             b.push(allCheck[i].getAttribute("value"));
//                         }
//                     console.log(b);
//                 }
//             }
//         } 
//     }
      
// }


// createCheckBox(region_radio_select, [{
//     value: 1,
//     text: "华东"
// }, {
//     value: 2,
//     text: "华南"
// },{
//     value: 3,
//     text: "华北"
// }]);
// createCheckBox(product_radio_select,[{
//     value:1,
//     text:"手机"
// },{
//     value:2,
//     text:"笔记本"
// },{
//     value:3,
//     text:"智能音箱"
// }]);




region_select.onchange  = function(){
 
    var  data = selectData();
    console.log(data);
    newTable(data);
    
}


product_select.onchange = function(){
    var  data = selectData();
    console.log(data);
    newTable(data);   

}



//根据select选项获取数据
function selectData() {
    var data_1=[],data_2=[],data_3=[];
    var index = region_select.selectedIndex;//选择索引
    var region_text = region_select.options[index].text;//选择文本
    var product_text = product_select.options[ product_select.selectedIndex].text;
    for(var i in sourceData){ 
        if(sourceData[i].region == region_text && sourceData[i].product == product_text){
            data_1.push(sourceData[i]);
        }
        // if(sourceData[i].region =="华南"){
        //     data_2.push(sourceData[i]);
        // }
        // if(sourceData[i].region == "华北"){
        //     data_3.push(sourceData[i]);
        // }
    
    }
    return data_1;
    // if(region_text == "华东"){
    //     for( var j in date_1){

    //     }
    //     return data_1;
    // }else if(region_text == "华南"){
    //     return data_2;
    // }else{
    //     return data_3;
    // }
 
}

function newTable(data) {
    if(table_wrapper.hasChildNodes){
        table_wrapper.removeChild(table_wrapper.firstChild);
    }
    var table_head = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    var table = document.createElement("table");
    var firstTr = document.createElement("tr");
    for(var i=0;i<table_head.length;i++){
       var th= document.createElement("th");
      
       (th.innerText != undefined) ? (th.innerText = table_head[i]) : (th.textContent = table_head[i]);

       firstTr.appendChild(th);       
    }
    table.appendChild(firstTr);
    // console.log(table);

    for(var i in data) {
        var tr = document.createElement("tr");
        var productTd =  document.createElement("td");  
        var regionTd  =  document.createElement("td");
        var product =  data[i].product;
        var region = data[i].region;
        (productTd.innerText != undefined) ? (productTd.innerHTML = product) :(productTd.textContent = product);
        (regionTd.innerText != undefined) ? (regionTd.innerHTML = region) :(regionTd.textContent = region);
        tr.appendChild(productTd);
        tr.appendChild(regionTd);

        var sale =data[i].sale;
        for(var j=0;j<sale.length;j++){
           var saleTd =  document.createElement("td");
           (saleTd.innerText != undefined) ? (saleTd.innerHTML = sale[j]) :(saleTd.textContent = sale[j]);
           tr.appendChild(saleTd);
        }
        table.appendChild(tr);     
    }
    table_wrapper.appendChild(table);
    
}

