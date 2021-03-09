Vue.component('greeting',{
  template:'<p>Hey there {{name}}, i am a re usable component.  <button v-on:click="changeName">Change name</button></p>',
  //data must be a function so
  //multiplee instances will not have the same data 
  data:function(){
    return {
      name:'yoshi'
    }
  },
  methods:{
    changeName: function(){
      this.name = "mario"
    }
  }
});

new Vue({
  el:"#app1",

  data:{
  },

  methods:{
  }
});

new Vue({
  el:"#app2",

  data:{
  },

  methods:{
  }
});