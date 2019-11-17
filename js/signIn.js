window.Zepto = window.$ = Zepto;

Zepto(function ($) {
  window.dispatchEvent(new Event("resize"));

  // $('.signInBtn').on('tap', () => {
  //   // $('.signInBtn').text(`${1++}`)
  //   const btn = document.getElementsByClassName('signInBtn')
  //   // btn.style.
  //   $('.signInBtn').css('background', 'white')
  // })
  $('.signInBtn').tap(() => {
    $('.signInBtn').css('background', 'white')
  })
  //   $('.signInBtn').on('touch', () => {
  //     $('.signInBtn').text(`${1++}`)
  //   })

  // 发送ajax请求, 进行登录
  $.ajax({
    type: "post",
    url: "/user/login",
    data: {
      username: username,
      password: password
    },
    dataType: "json",
    success: function (info) {
      console.log(info);
      // 用户名或者密码错误
      if (info.error) {
        mui.toast("用户名或者密码错误");
        return;
      }
      // 登录成功
      if (info.success) {
        if (location.search.indexOf("retUrl") > -1) {
          // (1) 传了地址, 就跳转到对应页面
          var retUrl = location.search.replace("?retUrl=", "");
          location.href = retUrl;
        }
        else {
          // (2) 没传地址, 跳转到个人中心页
          location.href = "user.html";
        }
      }
    },
    error: function() {
      console.log('erro ajax')
    }
  })

});