
// data=[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
// function createBar(data) {
  
//     // 定义好柱状图绘制区域的高度，宽度，轴的高度，宽度

//    var main = document.getElementById("main");
//     var yLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     yLine.setAttribute("x1","10");
//     yLine.setAttribute("y1","0");
//     yLine.setAttribute("x2","10");
//     yLine.setAttribute("y2","300");
//     yLine.setAttribute("style","stroke:black;stroke-width:4");
//     var xLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     xLine.setAttribute("x1","10");
//     xLine.setAttribute("y1","300");
//     xLine.setAttribute("x2","900");
//     xLine.setAttribute("y2","300");
//     xLine.setAttribute("style","stroke:black;stroke-width:4");
    
//     // 定义好每一个柱子的宽度及柱子的间隔宽度
//     var barWidth = 50;
//     var barSpace = 20;
//     // 定义好柱子颜色，轴的颜色

//     var barColor = "red";

//     // 拿到柱状图中的最大值Max
//     var arry=[];
//     for(var i=0;i<data.length;i++){
//         arry.push(data[i]);
//     }
//     arry.sort(function(a,b){
//         return a-b;
//     });
//     var maxN = arry[data.length-1];

//     // 根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
//     var height =main.getAttribute("height");
//     var scale =height /maxN
//     // 绘制横轴及纵轴
//     main.appendChild(yLine);
//     main.appendChild(xLine);

    
//     // 遍历数据 {
//     //     计算将要绘制柱子的高度和位置
//     //     绘制每一个柱子
//     // }
//     var x=10;    
//     for(var i in data ){
//         var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         rect.setAttribute("width",barWidth);//柱子的宽度
//         rect.setAttribute("height",data[i]*scale);//柱子的高度
//         // console.log(data[i]*scale);
//         rect.setAttribute("fill",barColor);
//         rect.setAttribute("x",x+barSpace);
//         rect.setAttribute("y",300-data[i]*scale);
//         x=x+barSpace+barWidth;
//         main.appendChild(rect);
//     }

// }
// createBar(data);

//绘制xy轴
function createBarXY(obj){
    var yLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yLine.setAttribute("x1","10");
    yLine.setAttribute("y1","0");
    yLine.setAttribute("x2","10");
    yLine.setAttribute("y2","550");
    yLine.setAttribute("style","stroke:black;stroke-width:4");
    var xLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xLine.setAttribute("x1","10");
    xLine.setAttribute("y1","550");
    xLine.setAttribute("x2","900");
    xLine.setAttribute("y2","550");
    xLine.setAttribute("style","stroke:black;stroke-width:4");
    obj.appendChild(yLine);
    obj.appendChild(xLine);
}

//返回数组最大值
function maxN(data){
    var arry=[];
    for(var i=0;i<data.length;i++){
        arry[i]=data[i];
    }
    arry.sort(function(a,b){
        return a-b;
    });
    return arry[data.length-1];
}

function createRect(data,barWidth,scale,barColor,barSpace,obj){
    var x=10;    
    for(var i in data ){
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width",barWidth);//柱子的宽度
        rect.setAttribute("height",data[i]*scale);//柱子的高度
        // console.log(data[i]*scale);
        rect.setAttribute("fill",barColor);
        rect.setAttribute("x",x+barSpace);
        rect.setAttribute("y",550-data[i]*scale);
        x=x+barSpace+barWidth;
        obj.appendChild(rect);
    }
}


var main = document.getElementById("main");
barChar={
    data:[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270],//数据
    barWidth : 50,//柱子间宽度
    barSpace : 20,//柱子间间距
    barColor : "red",//柱子颜色
    x:890, // x轴宽度
    y:300, // y轴宽度
    draw : function(data){
        createBarXY(main);
        var maxNumber = maxN(data);
        var scale = maxNumber/this.y;
        createRect(data,this.barWidth,scale,this.barColor,this.barSpace,main)
    },
    setData:function(data){
        barChar.data=data;
        main.innerHTML="";
        barChar.draw(data);

    }

}
barChar.draw(barChar.data);