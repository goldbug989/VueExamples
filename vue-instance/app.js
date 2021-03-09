
//vue instances attach to element
var vm = new Vue({
  el: "#vue-app",
  data: {
    x: 0,
    y: 0,
    age: 25,
    firstname: "David",
    lastname: "",
    job: 'ninja',
    available: false,
    nearby:false,
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com">google</a>'
  },
  computed:{
    z: function() {
      return this.x + this.y
    },
    computedClass: function() {
        return{
          available: this.available,
          nearby: this.nearby
        }
    }
  },
   
  methods: {
    greet: function (time) {
      var date = new Date()
      return 'Good ' + time + ' ' + this.firstname + ' today is ' + date.toLocaleDateString();
    },

    add: function () {
      this.age++;
    },

    subtract: function () {
      this.age--;
    },
    //log event to console to see what it contains
    updateXY: function(event){
       //console.log(event);
       this.x = event.offsetX;
       this.y = event.offsetY;
    },
    //on keyboard event v-on:keyup.enter="logname"
    logName: function(){
      console.log("you entered your last name");
    }


  }
})