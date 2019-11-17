window.Zepto = window.$ = Zepto;

Zepto(function($) {
  window.dispatchEvent(new Event("resize"));

  // $('.signInBtn').on('tap', () => {
  //   // $('.signInBtn').text(`${1++}`)
  //   const btn = document.getElementsByClassName('signInBtn')
  //   // btn.style.
  //   $('.signInBtn').css('background', 'white')
  // })
  $('.signInBtn').click(() => {
    $('.signInBtn').css('background', 'white')
  })
//   $('.signInBtn').on('touch', () => {
//     $('.signInBtn').text(`${1++}`)
//   })


});