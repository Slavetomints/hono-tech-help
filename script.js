function openNav() {
  document.getElementById("mysidepanel").style.width = "25%";
}
function closeNav() {
  document.getElementById("mysidepanel").style.width = "0";
};
  // Get references to the button and link
var followbutton = document.getElementById('followbutton');
var closebutton = document.querySelector('.closebutton');
     

  // Add click event listener to followbutton
followbutton.addEventListener('click', function() {
  followbutton.classList.add('hidden');
});

  // Add click event listener to closebutton
closebutton.addEventListener('click', function() {
  followbutton.classList.remove('hidden');
});