# JS_Calendar
Calendar written in JavaScript.
所有代码均为手写，[产品文档](/out/index.html)使用JSDoc生成。
具体的完成过程细节：[简书-前端小白如何用JavaScript写一个简单日历](http://www.jianshu.com/p/4fea34254dff)。

###需求分析：
1. 选择年、月，显示此年此月日历（列表选择、上下按钮）
2. 选择日期，显示当日（选择日）信息：
    - year-month-day
	- 星期
	- 农历年月日
	- 星座  
	- 历史上的今天
3. 返回到今天
4. 显示当前时间（实时变化）
5. 日历中显示主要假期
6. 可选择的假期列表，并在日历定位假期区间

###内容 - 对应HTML
根据需求分析中涉及到的内容，提炼出与HTML标签相对应的内容块，写出HTML。

1. Navigate
  - 北京时间
  - 年月选项
  - 回到今天
  - 今年假期
- Calendar
  - 日期排列
  - 农历日期节气
  - 国际节假日标识
- Today
  - 日期：YYYY-MM-DD
  - 星期
  - 日期：DAY
  - 农历日期：生肖-月-初几
  - 天干地支日期：年-月-日
  - 星座
  - 宜&忌
  - 历史上的今天

###设计
![初期界面设计思路](/img/prototype-sketch.png)

###解决思路&完成情况
我的思路是，解决内容的问题后，其次是布局与样式，最后是JavaScript的实现。

以下是我在做任务的过程中逐步列出的细分任务点，问句部分是解决的疑惑。


1. 内容
   - 用div分成3大块
   - 用table还是lists来放calendar部分内容？ - 都试过之后选择了table，结构上可读性较高
   - 如何分块展示不同信息？ - 运用div和CSS作区分

2. CSS实现布局
   - 浮动效果
   - table的宽度：按比例
   - 选定日期的CSS样式
   - 节假日的样式（未完成）
   - 适应手机屏幕的样式（未完成）
   - 找相关背景图片的素材（未完成）

3. JavaScript时间日历生成
   - DOM操作生成table
   - 公历日历算法
   - 用JavaScript实现
   - 农历节气、国际节假日（未完成）
   - 用JavaScript实现
   - 写注释，完善文档
4. 功能细节点
   - 年份、月份切换：上一年/月、下一年/月
   - 日期切换：点击日期，todayInfo变化，CSS样式变化
   - 今年假期：下拉框选择，日历跳转至假期第一天（未完成）

5. 产品文档
   - 写代码的时候写上注释，JSDoc生成
   - 写README.md文档，加入JSDoc
   - 整理绘制流程图，插入README.md
   - 插入简书文章、Github链接


###算法实现
以下是在编写代码的过程中，借助画流程图对主体部分进行思考的记录，具体细节在调试过程中有部分调整。

主体：generateCalendar(), generateToday()
![部分方法的流程图](/img/flow-diagram.png)

##其他
刚接触前端不久，还有很多地方需要提高，之后会继续进行学习，完善这个日历。

在这个任务中，日历生成算法主要受到[The Strange Zen Of JavaScript](http://jszen.blogspot.com/2007_07_01_archive.html)里这篇文章的启发，CSS的知识掌握主要在[学习CSS布局](http://zh.learnlayout.com/position.html)这个网站中得到提高，JavaScript则是通过Coursera上的[HTML, CSS and JavaScript](https://coursera.org/learn/html-css-javascript)课程进行了学习。

同时翻阅的书籍有：

- HTML & CSS
- JavaScript & jQuery交互式Web前端开发
- JavaScript DOM编程艺术
- CSS权威指南
