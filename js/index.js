var lunbo = document.getElementsByClassName('planting');
// 求数组的长度
var a = lunbo.length;
var b = 0;
lunbo[b].classList = 'planting lunboxuanzhong';
function WheelPlanting(){
    
 
    console.log(b+'aaaaa'+a);

    lunbo[b].classList = 'planting lunboxuanzhong';

    if(b==0){
        lunbo[a-1].classList = 'planting';
    }else{
        lunbo[b-1].classList = 'planting';
    }
    b++;
    if(b==a){
        b=0;
    }
}
setInterval('WheelPlanting()',1500);

// 轮播结束