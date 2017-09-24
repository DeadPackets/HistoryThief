//Global array of websites
    var VISITED_WEBSITES = [];
    $('.box').click(function(e) {
      e.preventDefault()
      var test = $(this).attr("selected")
      if (test) {
        $(this).removeAttr("style")
        $(this).removeAttr("selected")
        var i = VISITED_WEBSITES.indexOf(this.href)
        VISITED_WEBSITES.splice(i, 1)
      } else {
        $(this).css("background-color", "green")
        $(this).attr("selected", "yes")
        $(this).css("content", "url(check.png)")
        VISITED_WEBSITES.push(this.href)
      }
    })
    $('.submit').click(function() {
      $('#main_game').hide()
      $('.result').show()
      VISITED_WEBSITES.forEach(function(data, index) {
        var html = '<p style="color: white;">' + data + '</p>'
        $('.websites').append(html)
        console.log("You have visited " + data + " before!")
      })
    })
    $('.start').click(function() {
      $('.modal').hide()
      $('#welcome').hide()
      $('#main_game').show()
    })
