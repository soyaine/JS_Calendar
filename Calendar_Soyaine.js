/**
 * Created by test on 2016/4/11.
 */

var dateTable = document.getElementById("dateTable"); //获取日历时间部分表格
//循环生成日历主体部分的 6*7 表格
for (var i = 0; i < 6; i++){
    var newRow = document.createElement("tr");
    for(var j = 0; j < 7; j++){
        var newDate = document.createElement("td");
        newDate.innerText = i * 7 + j + 1;
        //实验：嵌套表格
        //var dateNum = "<tr>"+ (i * 7 + j + 1) +"</tr><tr></tr>";
        //var dateNum = " <tr> <td> <table> <tr> <td>1</td><td>1</td> </tr> <tr> <td>1</td><td>1</td> </tr> </table> </td> </tr>";
        //newDate.innerHTML = dateNum;
        newRow.appendChild(newDate);
    }
    dateTable.appendChild(newRow);
}


//实验：表格内DOM定位
var someDay = dateTable.childNodes[3].childNodes[1];
//alert(typeof someDay);
//var holiday = document.createTextNode("holiday");
//someDay.appendChild(holiday);


//实验：DOM操作Node
function insert_new_text(){
    var newText = document.createTextNode("this is an added text");// 新建文本元素
    var textPart = document.getElementById("jfksdj"); //获取节点
    textPart.appendChild(newText); //使newText成为textPart的子节点
}

function insert_new_node(){
    var newItem = document.createElement("td"); //新建元素节点
    var destParent = document.getElementsByTagName("body")[0]; //通过tag获取标签
    destParent.insertBefore(newItem, destParent.firstChild); //在destParent的第一个子节点之前插入newItem
}