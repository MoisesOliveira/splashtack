// scroll indicator

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// scroll indicator


$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
  });
});

function openSideDrawer() {
  document.getElementById("side-drawer").style.left = "0";
  document.getElementById("side-drawer-void").classList.add("d-block");
  document.getElementById("side-drawer-void").classList.remove("d-none");
}

function closeSideDrawer() {
  document.getElementById("side-drawer").style.left = "-336px";
  document.getElementById("side-drawer-void").classList.add("d-none");
  document.getElementById("side-drawer-void").classList.remove("d-block");
}



//cards

let $cards = $('.card');

//open and close card when clicked on card
$cards.find('.js-expander').click(function () {
  let $thisCard = $(this).closest('.card');

  if ($thisCard.hasClass('is-collapsed')) {
    $cards.not($thisCard).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCard.removeClass('is-collapsed').addClass('is-expanded');

    if ($cards.not($thisCard).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cards.not($thisCard).addClass('is-inactive');
    }

  } else {
    $thisCard.removeClass('is-expanded').addClass('is-collapsed');
    $cards.not($thisCard).removeClass('is-inactive');
  }
});

//close card when click on cross
$cards.find('.js-collapser').click(function () {
  let $thisCard = $(this).closest('.card');

  $thisCard.removeClass('is-expanded').addClass('is-collapsed');
  $cards.not($thisCard).removeClass('is-inactive');
});


//timeline scripts





//timeline scripts