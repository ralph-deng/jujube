const nodeLists = document.querySelectorAll('[event]');
for (let node of nodeLists) {
  console.log(node.getAttribute('event'));
}