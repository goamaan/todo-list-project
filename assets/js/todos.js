$("li").click(function() {
  $(this).toggleClass("completed");
});

$("span").click(function(event) {
  $(this)
    .parent()
    .fadeOut(function() {
      $(this).remove();
    });
  even.stopPropogation();
});
