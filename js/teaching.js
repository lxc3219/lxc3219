teaching = {
  init: function() {
      var that = this;
      //这里设置的是刚才的 teachinglist.json 文件路径
      $.getJSON("/teaching/teachinglist.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var title, picture, url, desc, li = "";
      for (var i = 0; i < data.length; i++) {
          title = data[i].title;
          picture = data[i].picture;
          url = data[i].url;
          desc = data[i].desc;
          li += '<div class="teaching-resource-item">'
                + '<div class="teaching-resource-picture">'
                    + '<img src="https://www.viento.cn/images/book.png" referrerpolicy="no-referrer">'
                + '</div>'
                + '<div class="teaching-resource-info">'
                    + '<div class="teaching-resource-title">'
                        + '<a target="_blank" href="' + url + '" rel="external nofollow noreferrer">' + title + '</a>'
                    + '</div>'
                    + '<div class="teaching-resource-meta">' + desc + '</div>'
                + '</div>'
            + '</div>';
      }
      $(".teaching-item").append(li);
  }
}
teaching.init();

