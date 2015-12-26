<style>
.item {
    border-bottom: 1px solid rgba(0,0,0,.1);
    background-color: #fff;
    width: 6.2rem;
    transition-duration: .5s;
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    border-radius: .13rem;
    margin-left: .1rem;
    margin-top: .1rem;
}
.item .number{
	display: inline-block;
	width: 24%;
  border-right: 1px solid;
  font-size: 20px;
}
.item .name{
	display: inline-block;
	width: 25%;
  font-size: 20px;
  vertical-align: top;
}
.item .votenum{
	display: inline-block;
	width: 25%;
}
.item .check{
	display: inline-block;
	width: 25%;
  vertical-align: top;
}



.badge {
  min-width: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #A7DB6D;
  border-radius: 10px;
}

input{
	font-size: 18px;
}
/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 50px;
  padding-bottom: 20px;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left:0; top: 2px;
  width: 17px; height: 17px;
  border: 1px solid #aaa;
  background: #f8f8f8;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.3)
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '✔';
  position: absolute;
  top: 3px; left: 4px;
  font-size: 18px;
  line-height: 0.8;
  color: #09ad7e;
  transition: all .2s;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 1px dotted blue;
}

/* hover style just for information */
label:hover:before {
  border: 1px solid #4778d9!important;
}

.img img{
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>

<template>
	<div class="item">
		<div class="number">{{id}}号</div>
		<div class="name">
<!--       <div class="img">
        <img src="img/test.jpg" alt="">
      </div> -->
      {{name}}

    </div>
		<div class="votenum">
			<span class="badge">{{count}}票</span>
		</div>
		<div class="check">
			
      <input type="checkbox" id="check{{id}}" v-on:click="check">
      <label for="check{{id}}"></label>
		</div>
	</div>
</template>

<script>
module.exports = {
  props:['id','name','msg','count'],
  ready:function(){

  },
  methods: {
    check: function () {
    	if(this.msg != this.name){
    		this.msg = this.name;
    		this.$dispatch('child-msg',"add",this.msg,this.id);
    	//console.log("原始"+$("#overflow")[0].scrollTop);

    		 $("#overflow").animate({ scrollTop: $('#overflow').prop("scrollHeight")}, 1000);
    		 
			//	console.log("原始"+$("#overflow")[0].scrollTop);

    	}else{
    		this.msg = "";
    		this.$dispatch('child-msg',"remove",this.name,this.id);
    	}

    	//console.log(this.msg);
    }
  },
  data: function () {
    return {
     
    }
  }
}
</script>