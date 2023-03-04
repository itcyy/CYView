/*
*实现代码雨代码
*作者：陈永裕
*时间：2023-3-4 22：47
*利用canvas进行设计
*/

//获取canvas元素
const cvs = document.getElementById('bg')
//获取窗口尺寸
const width = window.innerWidth
const heigth = window.innerHeight

//设置canvas尺寸为窗口尺寸

cvs.width = width
cvs.height = heigth
 
//获取绘制上下文
 const ctx = cvs.getContext('2d')

 //列宽

 const columnWidth = 20

 //列数

 const columnCount = Math.floor(window.innerWidth / columnWidth)

 //记录每列到哪个数字

 const columnNextIndexs = new Array(columnCount);
 columnNextIndexs.fill(1)

 //绘制代码雨的函数

 function draw(){
    ctx.fillStyle = `rgba(240,240,240,0.1)` //设置一个透明的颜色，实现渐变效果
    ctx.fillRect(0,0,width,heigth)

    const fz = 20

    ctx.fillStyle = getRandomColor()
    ctx.font = `${fz}px "Random Mono`;

    for(let i = 0; i < columnCount;i++){

        const x = i * columnWidth

        const y = fz * columnNextIndexs[i]

        ctx.fillText(getRandomChar(),x,y)
        if(y>heigth && Math.random() > 0.99){ //判断是否超过页面高度，并且实现随机性下落
            columnNextIndexs[i] = 0
        }else{
            columnNextIndexs[i]++
        }
        
    }
    
    
 }

 //获得随机颜色
function getRandomColor(){
    const fontColors =[
        "#33B5E5",
        "#09C",     //等价于#0099CC，以下亦然
        "#A6C",
        "#9C0",
        "#C9E",
        "#C00",
        "#F80",
        "#690",
        "#ACC",
        "#580",
        "#365896",
        "#FE54F5"
    ]
    return fontColors[Math.floor(Math.random() * fontColors.length)]    //随机获取数组中的颜色
}

//获得随机文字
function getRandomChar(){
    const str = 'console.log("hello world!)'  //随机文字字符集
    return str[Math.floor(Math.random() * str.length)]  //随机获取字符串中的字符
}

draw()
setInterval(draw,40)