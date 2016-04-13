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

var lab = document.getElementById("lab");
var today = new Date();
var UTCstring = today.toUTCString();
var labText;
labText = document.createTextNode(today.getDay()+"&nbsp");
lab.appendChild(labText);
labText = document.createTextNode(today.getDate()+"<br/>");
lab.appendChild(labText);
labText = document.createTextNode("UTCDate" + today.getUTCDate()+"<br/>");
lab.appendChild(labText);
labText = document.createTextNode("minutes" + today.getMinutes()+"<br/>");
lab.appendChild(labText);

//UTCstring = today.now();


//根据指定 年-月-日（格式：YYYY-MM-DD）生成当月日历
function newCalendar(year, month, date) {
    year = "jfkldjs";


}

//实验：表格内DOM定位
var someDay = dateTable.childNodes[3].childNodes[1];
//alert(typeof someDay);
//var holiday = document.createTextNode("holiday");
//someDay.appendChild(holiday);
