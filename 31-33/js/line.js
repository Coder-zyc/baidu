// data=[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
// function createLineChart(data) {
    
//    var lineChart =  document.getElementById("lineChart");
//     // 定义好折线图绘制区域的高度，宽度，轴的高度，宽度
//     var canvasHeight = 300, canvasWidth = 900 ;


//     // 定义好每一个数据点的直径，颜色，线的颜色，宽度    
//     var d=5;//数据点直径
//     var color="black";//数据点颜色
//     var lineColor="black";//线的颜色
//     var width = 2; //线的宽度

//     // 定义好没两个数据点之间的横向间隔距离
//     var distance =70;  
    
//     // 拿到折线图中的最大值Max
//     var arry=[];
//     for(var i=0;i<data.length;i++){
//         arry.push(data[i]);
//     }
//     arry.sort(function(a,b){
//         return a-b;
//     });
//     var maxN = arry[data.length-1];
    
//     // 根据Max和你用来绘制折线图图像区域的高度，进行一个数据和像素的折算比例
//     var scale = maxN/canvasHeight;

//     // 绘制横轴及纵轴
//     var canvas = document.createElement("canvas");
//     canvas.setAttribute("width",canvasWidth);
//     canvas.setAttribute("height",canvasHeight);
//     var ctx = canvas.getContext("2d");
//     ctx.beginPath();
//     ctx.moveTo(10,0);
//     ctx.lineTo(10,canvasHeight);
//     ctx.lineTo(canvasWidth,canvasHeight);
//     ctx.lineWidth=4;
//     ctx.stroke();
    
//     lineChart.appendChild(canvas);
//     // for {
//     //     计算将要绘制数据点的坐标
//     //     绘制数据点        
//     //     if 不是第一个点 {
//     //         绘制这个数据点和上一个数据点的连线
//     //     }
//     //     记录下当前数据点的数据用于下一个点时绘制连线
//     // }    
//     var a,b;
//     for(var i=0 ;i<data.length;i++){
//         // console  .log(data[i]);
//         var x =distance*(i+1);
//         var y =canvasHeight-data[i]*scale;
//         console.log(y);

//         ctx.beginPath();
//         ctx.arc(x,y,d,0,Math.PI*2);
        
//         ctx.fill();
        
//         if(i != 0){
//             ctx.beginPath();
//             ctx.moveTo(a,b);
//             ctx.lineTo(x,y);
//             ctx.lineWidth=2;
//             ctx.stroke();
//         }
//         a=x;
//         b=y;

//     }
// }
// createLineChart(data);

var lineChart = document.getElementById("lineChart");
var canvas =  document.getElementById("myCanvas"); 


// function append( father,child){
//     // console.log(child);
//     father.appendChild(child);  
// }
//创建canvas 返回 2d对象
// function createCavas(canvasWidth,canvasHeight){
 
//    canvas.setAttribute("width",canvasWidth);
//    canvas.setAttribute("height",canvasHeight);
// //    var ctx = canvas.getContext("2d");
//    return canvas;
// }

// 返回数组最大值
// function maxN(data){
//     var arry=[];
//     for(var i=0;i<data.length;i++){
//         arry[i]=data[i];
//     }
//     arry.sort(function(a,b){
//         return a-b;
//     });
//     return arry[data.length-1];
// }

/**
 * 
 * @param {*} ctx  canvas 的2d 对象
 * @param {*} x  x轴
 * @param {*} y   y轴
 */
function createLineXY(ctx,x,y){
    ctx.beginPath();
    ctx.moveTo(10,0);
    ctx.lineTo(10,y);
    ctx.lineTo(x,y);
    ctx.lineWidth=4;
    ctx.stroke();
}

/**
 * 
 * @param {*} ctx  canvas 的2d 对象
 * @param {*} data  点的数据
 * @param {*} distance  点到间距
 * @param {*} scale    数据和像素的折算比例
 * @param {*} d     直径
 * @param {*} canvasHeight 
 */
function createSpot(ctx,data, distance,scale,d,canvasHeight){
    var a,b;
    for(var i=0 ;i<data.length;i++){
        // console.log(data[i]);
        var x =distance*(i+1);
        var y =canvasHeight-data[i]*scale;
        // console.log(y);

        ctx.beginPath();
        ctx.arc(x,y,d,0,Math.PI*2);

        ctx.fill();
        
        if(i != 0){
           createLine(ctx,a,b,x,y);
        }
        a=x;
        b=y;

    }
}

/**
 * 
 * @param {*} ctx   canvas 的2d 对象
 * @param {*} x1    点1的x
 * @param {*} y2    点1的y
 * @param {*} x2    点2的x
 * @param {*} y2    点2的y
 */
function createLine(ctx,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=2;
    ctx.stroke();
}


let line_Chart = {
    data:[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270],//数据
    canvasHeight:550,//画布高度
    canvasWidth:900 ,//画布宽度
    d:5,//点直径
    distance :70,//点与点的距离 
    draw : function(data){    
    //   var canvas = createCavas(this.canvasWidth,this.canvasHeight);
    //   lineChart.appendChild(canvas);
      var ctx = canvas.getContext("2d");
      var maxNumber = maxN(data);
      var scale = maxNumber/this.canvasHeight; 
      createLineXY(ctx,this.canvasWidth,this.canvasHeight);
      createSpot(ctx,data,this.distance,scale,this.d,this.canvasHeight);
    },
    setData:function(data){
         var canvas =  document.getElementsByTagName("canvas")[0];
         var ctx = canvas.getContext("2d");
        line_Chart.data=data;
         ctx.clearRect(0,0,900,550);
        line_Chart.draw(data);
    },
    

}

line_Chart.draw(line_Chart.data);

