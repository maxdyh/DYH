/**
 * Created by daiyingheng on 16/9/2.
 */
//头部导航栏自动隐藏
$("nav").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }});

//富文本编辑器
$(function () {
  var editor = new wangEditor('div1');
  editor.create();
});