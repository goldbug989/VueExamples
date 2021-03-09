var vm1 = new Vue({
  el:"#app1",

  data:{
    title:"vue-app-1"
  },

  methods:{

  },
  computed:{
    greet: function(){
      return 'hello from app1 computed property';
    }
  }
});

var vm2 = new Vue({
  el:"#app2",

  data:{
    title:"vue-app-2"
  },

  methods:{
    changeTitle: function(){
      vm1.title="app-one";
    }
  },
  computed:{
    greet: function(){
      return 'hello from app2 computed property';
    }
  }
});

//change vue data outside all vue instances
vm2.title="app-two";