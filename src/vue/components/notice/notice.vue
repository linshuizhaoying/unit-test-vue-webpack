<style>

</style>

<template>
  <button v-on:click="success">Success</button>
  <button v-on:click="warning">Warning</button>
  <button v-on:click="error">Error</button><br>
  <button v-on:click="info">Information</button>
  <button v-on:click="confirm">Confirm</button>
  <button v-on:click="input">Input</button>
</template>

<script>
var notie = require('./notie.js');
module.exports = {

  ready:function(){

  },
  methods: {
  	success:function(){
      notie.alert(1, 'Success!', 2);
  	},
  	warning:function(){
      notie.alert(2, 'Warning<br><b>with</b><br><i>HTML</i><br><u>included.</u>', 2);
  	},
  	error:function(){
      notie.alert(3, 'Error.', 2);
  	},
  	info:function(){
      notie.alert(4, 'Information.', 2);
  	},
  	confirm:function(){
      notie.confirm('Are you sure you want to do that?<br><b>That\'s a bold move...</b>', 'Yes', 'Cancel', function() {
          notie.alert(1, 'Good choice!', 2);
      });
  	},
  	input:function(){
      notie.input('Please enter your email address:', 'Submit', 'Cancel', 'email', 'name@example.com', function(value_entered) {
            notie.alert(1, 'You entered: ' + value_entered, 2);
      });

  	}
  },
  data: function () {
    return {
      
    }
  },

}
</script>