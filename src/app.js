import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [{
        name: "Do Laundry",
        isCompleted: false,
        priority: 'High'
      }, {
        name: "Finish Homework",
        isCompleted: true,
        priority: 'Low'
      }],
      newItem: "",
      priority: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          isCompleted: false,
          priority: this.priority});
          this.newItem = "";
          this.priority = "";
        },
        completeItem: function(index) {
          this.items[index].isCompleted = true;
        }
      }
    });
  });
