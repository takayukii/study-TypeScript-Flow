// normal this

var a = {
  data: [1,2,3],
  output: function (all) {
    console.log(this);
    return this.data;
  }
};

console.log(a.output());