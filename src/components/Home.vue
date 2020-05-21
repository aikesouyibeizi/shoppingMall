<template>
   
    <div class="home">
        <Nav class="nav"></Nav>
        <div class="header">
           <div class="wrapper">
               <!-- <Search placeholder="开学季有礼，好货五折起" @query='getQuery' fake @click.native="goToSearch"/> -->
           		<div class="mallSearch">
           			<form name="searchTop" >
			            <!-- <fieldset> -->
                          	<input type="text" v-model="inputValue" name="searchContent" class="inputSearch" title="请输入搜索文字" placeholder="请输入搜索文字">
	                        <button type="submit">搜索</button>
			             <!-- </fieldset> -->
			         </form>
                     <ul id="list">
                     	<!-- <li>2121</li>
                     	<li>dedwe</li>
                     	<li>erww</li>
                     	<li>dsdad</li>
                     	<li>dsadsd</li> -->
                     </ul>
           		</div>
           </div> 
        </div>
    </div>
</template>
<style>
@import "../common/css/home.css";
</style>

<script>
import Nav from  "./Nav.vue";
// import Search from  "./search/Search.vue";
// import {byClassName} from "../common/js/common.js"
export default {
    name:"Home",
    components:{
        Nav,
        // Search
    },
    data(){
        return {
            inputValue:''
        }
    },
    mounted:function(){
        this.init();
        // this.init2();
        //  console.log("vaule",this.inputValue);
    },
    methods:{
        
        init(){
             //创建回调函数接收数据
           window.callback = function callback(data){
                console.log("data",data);
                oList.innerHTML = '';
                data.result.forEach( v => {
                    var oLi = document.createElement('li');
                    oLi.innerHTML = v[0];
                    oList.appendChild(oLi);
                    oLi.onclick = function(){
                        oTxt.value = oLi.innerHTML;
                        oList.innerHTML = '';
                    }
                });
            }
            console.log("触发init.....   ");

            var oForm = document.forms['searchTop'];
            var oContent = oForm.elements['searchContent'];
            var oList = document.getElementById('list');
            oContent.onpropertychange = oContent.oninput  = function(){
            //    先创建一个script标签,引入接口
                var oScript = document.createElement('script');
                oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+ this.value+'&_ksTS=1519875402602_594&callback=callback';
                console.log("oScript.src",oScript.src);
            //    将script标签添加到页面中
                document.body.appendChild(oScript);
            //    移除标签
                document.body.removeChild(oScript);
            }

           
        },
 
       

        

     
       
        
    }
}

</script>