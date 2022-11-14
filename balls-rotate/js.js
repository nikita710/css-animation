$(document).ready(function () {
  $("body").on("mousemove", function (event) {
    let x = event.pageX - this.offsetLeft;
    let y = event.pageY - this.offsetTop;
    $(".container").css({
      right: x,
      bottom: y,
    });
  });
});
