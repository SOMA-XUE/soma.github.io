window.Zepto = window.$ = Zepto;

Zepto(function($) {
  window.dispatchEvent(new Event("resize"));

  console.log("Ready to Zepto!");
  $('.signInBtn').on('tap', () => {
    // $('.signInBtn').text(`${1++}`)
    const btn = document.getElementsByClassName('signInBtn')
    // btn.style.
    $('.signInBtn').css('background', 'white')
  })
//   $('.signInBtn').on('touch', () => {
//     $('.signInBtn').text(`${1++}`)
//   })


});