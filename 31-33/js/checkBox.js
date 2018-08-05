// let sourceData = [{
//     product: "手机",
//     region: "华东",
//     sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
// }, {
//     product: "手机",
//     region: "华北",
//     sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
// }, {
//     product: "手机",
//     region: "华南",
//     sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
// }, {
//     product: "笔记本",
//     region: "华东",
//     sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
// }, {
//     product: "笔记本",
//     region: "华北",
//     sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
// }, {
//     product: "笔记本",
//     region: "华南",
//     sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
// }, {
//     product: "智能音箱",
//     region: "华东",
//     sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
// }, {
//     product: "智能音箱",
//     region: "华北",
//     sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
// }, {
//     product: "智能音箱",
//     region: "华南",
//     sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
// }]





var region_radio_select = document.getElementById("region-radio-select");
var product_radio_select = document.getElementById("product-radio-select");



function createCheckBox( checkBoxDiv, checkBoxObj ) {
    var checkBoxAll = document.createElement("input");
    checkBoxAll.setAttribute("type","checkbox");
    checkBoxAll.setAttribute("id","checkAll");
    // checkBoxAll.setAttribute("checked",false);
    checkBoxAll.setAttribute("checkbox-type","all");
    checkBoxDiv.appendChild(checkBoxAll);
    checkBoxDiv.appendChild(document.createTextNode("全选"));
    for(var i in checkBoxObj) {
       var checkBox =  document.createElement("input");
       checkBox.setAttribute("name","checkName");
       checkBox.setAttribute("type","checkbox");
       checkBox.setAttribute("id",i);
       checkBox.setAttribute("name",checkBoxObj[i].text);
    //    checkBox.setAttribute("checked",false);
    //    checkBox.setAttribute("checkbox-type","");
       if(checkBoxObj[i].value){
        checkBox.setAttribute("value",checkBoxObj[i].value); 
       }
       

       checkBoxDiv.appendChild(checkBox);
       checkBoxDiv.appendChild(document.createTextNode(checkBoxObj[i].text));
    }
 
    
     checkBoxDiv.onchange = function(e) {  //此中 e 表示event 事件  e.target则表示产生事件的元素对象

             var a=[];
            // var allCheck = document.getElementsByName("checkName");
           if(e.target.type == "checkbox" ){
            var checkBoxNum=0;
            var oCheckbox = checkBoxDiv.querySelectorAll("input"); //容器下所有的input
               if(e.target.getAttribute("checkbox-type") == "all"){  // 选中的是全选按钮
                   if(e.target.checked == true){        //全选按钮勾选
                        for(var i=1;i<oCheckbox.length;i++){
                            oCheckbox[i].checked = true;
                             a.push(oCheckbox[i].getAttribute("value"));  //将勾选的值放到a[]中
                        }
                        checkBoxNum=3;
                        console.log(a);
                   }else{       //全选按钮不勾选
                       for(var i=1;i<oCheckbox.length;i++){
                           oCheckbox[i].checked = false;
                            if(a !=null){
                                a.splice(i-1,1);
                            }
                       }
                       checkBoxNum=0;
                       console.log(a);
                   }
               }else{   //选中的不是全选按钮
                   for(var i=1;i<oCheckbox.length;i++){
                       if(oCheckbox[i].checked == true){
                        checkBoxNum++;

                       }
                   }
                   if(checkBoxNum == 3){      //如果三个选项全选中，全选按钮勾选
                    checkBoxAll.checked=true;
                   }
                //    if(checkBoxNum <3){
                //        checkBoxAll.checked= false;
                //    }
                   if(checkBoxNum <1){  //最后一个选择框不让取消
                       e.target.checked =true;
                   }
                   if(e.target.checked == false){
                    checkBoxAll.checked= false;
                   }   
               }
           }

           newTable( getData());
           mergeCell(1,0);

           tr = document.querySelectorAll("tr");
           if(tr.length >1){
               for(var i=1;i<tr.length;i++){
                    tr[i].onmouseover = function(){
                        var data=[];
                        var td =this.querySelectorAll("td");
                        // var td =tr[i].querySelectorAll("td");
                        for(var i=2 ;i<td.length;i++){
                            data.push(td[i].firstChild.nodeValue);
                        }
                        barChar.setData(data);
                        line_Chart.setData(data);
                    }
                }    
            
            }
        } 
        
      
}


createCheckBox(region_radio_select, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
},{
    value: 3,
    text: "华北"
}]);
createCheckBox(product_radio_select,[{
    value:1,
    text:"手机"
},{
    value:2,
    text:"笔记本"
},{
    value:3,
    text:"智能音箱"
}]);

function  getData(){
    var  checkbox = document.querySelectorAll(":checked");// checked选择器 此为简写；完整写法为：input:checked
 
    var list=[];    
    var data=[];
    for(var i=0;i<checkbox.length;i++){
        data.push(checkbox[i].getAttribute("name"));
    }
  
    for(var i in sourceData){ 
    if(data.indexOf(sourceData[i].region) !=-1   && data.indexOf(sourceData[i].product) !=-1 ){
        list.push(sourceData[i]);
        }     
    }
 
    return list;
}



