/**
 * Created by Administrator on 2016/8/16.
 * 展示动画
 */
//用动画的形式跳出一个数字
function showNumberWithAnimation( i , j , randNumber ){

    var numberCell = $('#number-cell-' + i + "-" + j );

    numberCell.css('background-color',getNumberBackgroundColor( randNumber ) );//根据随机数改变一小格的背景颜色
    numberCell.css('color',getNumberColor( randNumber ) );//根据产生的随机数改变数字的颜色
    numberCell.text( randNumber );//设置text：数字
	//数字格
    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop( i , j ),
        left:getPosLeft( i , j )
    },50);
}
//动画的形式显示移动过程
function showMoveAnimation( fromx , fromy , tox , toy ){
    var numberCell = $('#number-cell-' + fromx + "-" + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },200);
}
//更新分数
function updateScore() {
    $("#score").text( score );
}