<style>
.checkedbox{
  width: 2.2rem;
  background-color: transparent;
  overflow: auto;
}
.checkeditem{
  font-size: .35rem;
  padding-bottom: .05rem;
  background-color: #eee;
  background: rgba(238, 238, 238, 0.8) none repeat scroll 0 0 !important;
}
.checkeditem .name{
  display: inline-block;
  position: relative;
}
/* 必需 */
.animate-transition {
  transition: all .3s ease;
  padding: 10px;
  overflow: hidden;
}

/* .animate-enter 定义进入的开始状态 */
/* .animate-leave 定义离开的结束状态 */
.animate-enter, .animate-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
.img{
  display: inline-block;
  left:0;
}
.img img{
  width: 16px;
  height: 16px;
}
</style>

<template>

<div id="overflow" class="checkedbox">
	<li  transition="animate" class="checkeditem" v-for="n in data.length">
    <div class="img">
      <img src="img/flower3.png" alt="">
    </div>
    <div class="name">{{ data[n] }}</div> 
  </li>
</div>

</template>

<script>
module.exports = {
	props:{
		data:""
	},
  
  ready:function(){

  },
}
</script>