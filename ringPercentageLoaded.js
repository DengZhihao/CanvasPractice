    window.onload=function(){
        var canvas=document.getElementById('canvas'),
                context=canvas.getContext('2d'),
                centerX=canvas.width/2,
                centerY=canvas.height/2,
                rad=Math.PI*2/100,
                speed=0.1;
                position=0;
        function greenCircle(n){    //绘制绿色圆形
            context.save();         //save配合restore保存图像
            context.strokeStyle='#6c0';
            context.lineWidth=5;
            context.beginPath();
            context.arc(centerX,centerY,100,-Math.PI/2,-Math.PI/2+n*rad,false);     //绘制圆形，参数分别为圆心X，圆心Y，半径，起始角，结束角，顺逆时针
            context.stroke();
            context.closePath();
            context.restore();
        }
        function whiteCircle(){         //绘制白色圆形
            context.save();
            context.strokeStyle='white';
            context.lineWidth=5;
            context.beginPath();
            context.arc(centerX,centerY,100,0,Math.PI*2,false);
            context.stroke();
            context.closePath();
            context.restore();
        }
        function text(n){
            context.save();
            context.strokeStyle='#6c0';
            context.font='40px Arial';
            context.strokeText(n.toFixed(0)+"%", centerX-30, centerY+10);
            context.stroke();
            context.restore();
        }
        (function drawFrame(){
            window.requestAnimationFrame(drawFrame);//类似于setTimeOut，浏览器每次重绘时调用动画
            context.clearRect(0,0,canvas.width,canvas.height);//每次绘制完清除之前的图像
            whiteCircle();
            text(position);
            greenCircle(position);
            if(position>100)position=0;
            position+=speed;
        })()
    }
