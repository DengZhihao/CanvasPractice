reated by DengZhihao on 2016/11/14.
 */
window.tool = {};
//鼠标位置
//window.tool.captureMouse = function (element) {
//    var mouse = {x: 0, y: 0};
//        element.addEventListener('mousemove', function (event) {
//                var x, y;
//                        if (event.pageX || event.pageY) {
//                                    x = event.pageX;
//                                                y = event.pageY;
//                                                        } else {
//                                                                    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//                                                                                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//                                                                                        }
//                                                                                                x -= element.offsetLeft;
//                                                                                                        y -= element.offsetTop;
//                                                                                                                mouse.x = x;
//                                                                                                                        mouse.y = y;
//                                                                                                                            }, false);
//                                                                                                                                return mouse;
//                                                                                                                                }
//                                                                                                                                window.tool.parseColor = function (color, toNumber) {
//                                                                                                                                    if (toNumber === true) {
//                                                                                                                                            if (typeof color === 'number') {
//                                                                                                                                                        return (color | 0);
//                                                                                                                                                                }
//                                                                                                                                                                        if (typeof color == 'string' && color[0] === '#') {
//                                                                                                                                                                                    color = color.slice(1);
//                                                                                                                                                                                            }
//                                                                                                                                                                                                    return window.parseInt(color, 16);
//                                                                                                                                                                                                        } else {
//                                                                                                                                                                                                                if (typeof color === 'number') {
//                                                                                                                                                                                                                            color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
//                                                                                                                                                                                                                                    }
//                                                                                                                                                                                                                                            return color;
//                                                                                                                                                                                                                                                }
//                                                                                                                                                                                                                                                }
//                                                                                                                                                                                                                                                //动画循环
//                                                                                                                                                                                                                                                if (!window.requestAnimationFrame) {
//                                                                                                                                                                                                                                                    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
//                                                                                                                                                                                                                                                        window.mozRequestAnimationFrame ||
//                                                                                                                                                                                                                                                            window.msRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                window.oRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                    function (callback) {
//                                                                                                                                                                                                                                                                            return window.setTimeout(callback, 1000 / 60);
//                                                                                                                                                                                                                                                                                });
//                                                                                                                                                                                                                                                                                }
//
//                                                                                                                                                                                                                                                                                //动画循环取消
//                                                                                                                                                                                                                                                                                if (!window.cancelAnimationFrame) {
//                                                                                                                                                                                                                                                                                    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                                        window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                                            window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                                                window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                                                    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
//                                                                                                                                                                                                                                                                                                        window.clearTimeout);
//                                                                                                                                                                                                                                                                                                        }
