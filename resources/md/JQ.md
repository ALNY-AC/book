
# 前端技术手册

## 手册

> 具象：可被详细描述的事物叫具象，具象即对象，对象即具象
>
> 抽象：不可被详细描述的事物叫抽象。
>
> 用脑子想，用眼看，用手记。
>
> 有问题，先找手册，再找所使用的框架的API文档，再找菜鸟教程相对应的技术，最后再找度娘，最最后再找起源计划首席执行官兼起源计划首席技术官。









##HTML&CSS

> Html元素的三大基本：`前后标签` `属性` `内容`
>
> * `标签` 分为：`前标签` 和 `后标签`
> * `属性` 分为：`属性键` 和 `属性值`
> * `内容` 分为：`元素内容` 和 `文本内容`
>
> ----
>
> CSS的三大基本：`类拾取器` `ID拾取器` `元素拾取器`
>
> * `类拾取器`：用 ”.“ 拾取 
> * `ID拾取器`：用 “#” 拾取
> * `元素拾取器`：直接用标签单词拾取
>
> ---
>
> CSS的属性：
>
> * `属性键` ：如 `width` `height` `backgroud-color` 等
> * `属性值` ： 如 `13px` `#FFF` `block` 等
> * CSS属性虽然和HTML属性都是属性键和属性值，但是意思不一样。
>
>

## JQuery

### 用JQ获取页面上的标签元素



> JQ获取标签通过CSS选择器来获取

````javascript
$('.box'); //获取页面上所有 类 为 box 的元素
$('#box'); //获取页面上所有 ID 为 box 的元素
$('div');   //获取页面上所有 div 元素
$('input[text]');//获取页面上所有是 input 并且类型为text的元素
````



---





### 用JQ创建标签元素

> 怎样在html中写标签，就怎样在JQ中创建标签

```javascript
$('<span></span>'); //创建一个 span 标签
$('<h1></h1>'); //创建一个 h1 标签
$('<br/>'); //创建一个 br 标签
var div=$('<div></div>'); //创建一个 div 元素，并且赋值给 div 变量
```



---



### 用JQ对元素进行操作



#### 将一个元素添加到另一个元素中

> 使用 `.append()` 函数添加标签

```javascript
$('.box').append($('<h1></h1>'));// 创建一个 h1 元素并添加到 每个.box中
$('.box').append('<h1></h1>');// 直接以字符串的形式添加
$('.box').append("<h1 class='.box'></h1>");// 直接以字符串的形式添加，并带有样式

//============================================
var div = $('<div></div>'); //创建一个div标签
$('.box').append(div); //将之前创建的div标签追加到类为 box 的元素中
```

---



#### 将一个元素从另一个元素中删除

> 使用 `.empty()` 删除某个元素中的某个元素

---


#### 给一个元素添加Class

> 使用 `.addClass()` 函数给一个元素添加Class
>
> 如果事先声明了一个变量，就不需要再次使用  `$('<div></div>')`  ，再次使用直接调用变量
>
> 

````javascript
var box= $('<div></div>');//创建一个div标签，并且赋值给box变量
box.addClass('panel');//给上面创建的div标签添加一个 panel Class
/*
*如果事先声明了一个变量，就不需要再次使用 $('<div></div>') ，再次使用直接调用变量
*/


//============================================


var A=$('tr');//获取所有的 tr 标签，并且赋值给变量 A
A.addClass('tr-style');//给上面 *拾取* 的所有的 tr  添加 tr-style Class


//============================================


$('#userPwd').addClass('text-color');//给 *拾取* 到的 userPwd 元素添加 text-color Class
````

---


#### 给一个元素添加属性

>使用 `.attr()` 函数给一个元素添加一个属性
>
>`.attr()` 有两个参数 ，分别对应着 `属性键` 和 `属性值` 

````javascript
var box=$('<div></div>');//创建一个div标签，并且赋值给box变量
box.attr('id','userBox');//给上面创建的div标签添加一个属性，属性键是 id ,属性值是 userBox

$('input[text]').attr('id','userID');//拾取 input 并且类型为 text 的元素,并且添加一个属性，属性键是id ,属性值是 userID

$('a').attr('href','http://www.baidu.com');//选择所有的a标签，并且添加一个属性，属性键是href，属性值是 http://www.baidu.com
````

---



#### 给元素单独设置CSS样式

> 使用 `.css()`函数给一个元素添加一个CSS属性
>

````javascript
$('a').css('text-decoration','none');//设置或添加 text-decoration 属性，值为 none
$('p').css('color','#FFF');//选择所有 p 标签，并且添加color属性，值为 #FFF
````



---



#### 设置元素的内容

> 用 `.text()` 函数设置元素的文本内容
>
> 用 `.html()` 函数设置元素的元素内容
>
> 设置内容会覆盖掉元素之前的内容，如果想要追加内容，请使用 `.append()`

````javascript

var box=$('<h1></h1>');//创建一个 h1 标签，并且赋值给变量 box
box.text('title');//设置 box 的文本内容为 title
//============================================

$('a').text('点我跳转'); //设置所有 a 标签的文本内容为 点我跳转
$('div').html('<h1>大标题</h1>'); //设置所有 div 的元素内容为 <h1>大标题</h1> ，此时h1会被解析为html代码
$('div').text('<h1>大标题</h1>'); //设置所有 div 的文本内容为 <h1>大标题</h1> ，此时h1不会被解析为html代码，在页面上会将<h1>显示出来
````





### JQ实例

#### 用JQ创建一个bootstrap的面板

````javascript

var panel=$('<div></div>'); //创建一个div，并且赋值给变量panel
panel.addClass('panel panel-default'); //给 panel 添加 Class

var panelHead=$('<div></div>'); //创建一个div，并且赋值给变量panelHead
panelHead.addClass('panel-heading'); //给 panelHead 添加一个Class
panelHead.text('title'); //设置 panelHead 的 文本内容为 title

var panelBody=$('<div></div>'); //创建一个div，并且赋值给变量panelBody
panelBody.addClass('panel-body'); //给 panelBody 添加一个Class

var panelFooter=$('<div></div>'); //创建一个div，并且赋值给panelFooter
panleFooter.addClass('panel-footer'); //给panelFooter 添加一个Class

panel.append(panelHead); //将 panelHead 添加到 panel 中 
panel.append(panelbody); //将 panelbody 添加到 panel 中 
panel.append(panelFooter); //将 panelFooter 添加到 panel 中 

$('body').append(panel); //在 body 标签内追加 panel 元素。

````

















