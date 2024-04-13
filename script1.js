document.getElementById("colorButton2").addEventListener("click", function() {
    // Get all elements with class "item"
    var items = document.querySelectorAll(".item");
    // Loop through each element and change its background color
    items.forEach(function(item) {
      // Generate a random color (you can replace this with any logic you want)
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      item.style.backgroundColor = randomColor;
    });
  });