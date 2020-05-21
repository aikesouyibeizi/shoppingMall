var oTxt = byClassName('txt')[0];
var oBtn = byClassName('btn')[0];
var oList = byClassName('list')[0];
oTxt.onpropertychange = oTxt.oninput  = function(){
//    先创建一个script标签,引入接口
    var oScript = document.createElement('script');
    oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+ this.value+'&_ksTS=1519875402602_594&callback=callback';
//    将script标签添加到页面中
    document.body.appendChild(oScript);
//    移除标签
    document.body.removeChild(oScript);
}
//创建回调函数接收数据
function callback(data){
    oList.innerHTML = '';
    data.result.forEach( v => {
        var oLi = document.createElement('li');
        oLi.innerHTML = v;
        oList.appendChild(oLi);
        oLi.onclick = function(){
            oTxt.value = oLi.innerHTML;
            oList.innerHTML = '';
        }
    });
}