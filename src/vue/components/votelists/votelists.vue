<style>
.votelists{
  margin-top: -.7rem;
}
ul{
  height: 620px;
  overflow: auto;
  margin-top: 0.6rem;
}


</style>

<template>

<div class="votelists">
		<ul>
			<li v-for="item in count">
				<voteitem :id.sync="item.uid" :name.sync="item.name" :count.sync="item.count" ></voteitem>
			</li>
		</ul>
</div>

</template>

<script>
module.exports = {
  data: function () {
    return { 
    	parentmsg: [],
    	parentno:[],
    	count:""
     }
  },
  ready:function(){
  	var data = $("#count").text().trim();
  	this.count = JSON.parse(data);
  	console.log(this.count);
  },
  events: {
    'child-msg': function (action,msg,no) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      var that = this;
      if(action == "add"){
      	that.parentmsg.push(msg);  
      	that.parentno.push(no);
      }else{
      	var index = that.parentmsg.indexOf(msg);
				if (index > -1) {
				    that.parentmsg.splice(index, 1);
				    that.parentno.splice(index, 1);
				}
      }
      //console.log(that.parentmsg);
      this.$parent.$data.alldata = that.parentmsg;
      this.$parent.$data.allno = that.parentno;
     // console.log( this.$parent.$data);
    }
  },
  components: {
    'voteitem': require('./voteitem.vue'),
  }
}
</script>