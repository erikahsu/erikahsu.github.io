window.onload = function() {
  document.getElementById("describe").style.display = 'none';
};

function toggleabout() {
  let description = document.getElementById("describe");
  if (description.style.display === 'none') {
    description.style.display = 'block';
  }
  else {
    description.style.display= "none";
  }
};

document.getElementById("about").onclick = toggleabout;

new TypeIt("#title", {
  strings: "hello, my name is bu-chan ぶーちゃん!",

  speed: 75,
  loop: false
}).go();

