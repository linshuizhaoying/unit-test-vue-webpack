
describe('Vue单元测试', function() {
 	var myComponent = require('../src/vue/app.vue');  
  it('正向测试,msg参数内容应该为linshi!', function() {
    var defaultData = myComponent.data();
    defaultData.msg.should.be.eql("linshui!");
    //console.log(myComponent);
  });
  it('method 内部函数toggle正向测试', function() {
    var defaultData = myComponent;
    defaultData.methods.toggle().should.be.eql("linshuizhaoying");
    //console.log(myComponent);
  });
});
