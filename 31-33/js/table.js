
//生成表格(不需要改变)
function newTable(data) {
    var td1 =  region_radio_select.querySelectorAll("input[type=checkbox]:checked"); //地区勾选的数量
    var td2 =  product_radio_select.querySelectorAll("input[type=checkbox]:checked"); //商品勾选的数量
    // console.log(td1,length);

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
    

    for(var i in data) {
        var tr = document.createElement("tr");
        var productTd =  document.createElement("td");  
        var regionTd  =  document.createElement("td");
        var product =  data[i].product;
        var region = data[i].region;
        (productTd.innerText != undefined) ? (productTd.innerHTML = product) :(productTd.textContent = product);
        (regionTd.innerText != undefined) ? (regionTd.innerHTML = region) :(regionTd.textContent = region);
        //  当商品选择了一个，地区选择了多个的时候 或者 当商品和地区都只选择一个的情况下  商品在前
        if((td2.length==1 && td1.length > 1) || (td2.length==1 && td1.length ==1) ||(td2.length >1 && td1.length >1 )){
            tr.appendChild(productTd);
            tr.appendChild(regionTd);
            
        }
        if(td1.length == 1 && td2.length >1){
            tr.appendChild(regionTd);
            tr.appendChild(productTd);
            // console.log(2);
        }

       
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

//抄的的 没看懂
/**
 * 
 * @param {*} startRow 起始行
 * @param {*} col 单元格号
 */
function mergeCell(startRow,col){
    var tb = document.getElementsByTagName("table")[0];
    for(var i=startRow;i<tb.rows.length-1;i++){                
        if(tb.rows[startRow].cells[col].innerHTML == tb.rows[i+1].cells[col].innerHTML ){
            tb.rows[i+1].cells[col].style.display="none";  //隐去被合并单元格原先的内容
            tb.rows[startRow].cells[col].rowSpan +=1;       //rowspan 属性规定单元格可横跨的行数。
        }else{
            mergeCell(i+1,0);
        }
    }

}
