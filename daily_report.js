javascript: 
(function (f) {
    if (window.jQuery && jQuery().jquery > '1.6') {
        f(jQuery)
    } else {
        (function (d, f, s) {
          s = d.createElement('script');
          s.src = '//goo.gl/N6zv6e';
          s.onload = function () {
            f(jQuery.noConflict(1))
          };
          d.body.appendChild(s)
        })(document, f)
    }
})
(function ($) {
    if (!($('#daily_text').size())) {
        var time = [];
        var daily_text = "";
        var lvRow = [];
        $(".lv-row").each(function() {
            if ($(this).hasClass("lv-firstevent")) {
                lvRow.push("first");
            } else if ($(this).hasClass("lv-lastevent")) {
                lvRow.push("last");
            } else {
                lvRow.push("none");
            }
        });

        $(".lv-row .lv-time span").each(function() {
            time.push($(this).text());
        });
        var event = [];
        $(".lv-row .lv-titlecell span").each(function() {
            event.push($(this).text());
        });
        // console.log(time);
        // console.log(event);
        $.each(time, function(index, roop_t) {
            if (lvRow[index] == 'first') {
                daily_text += "■\n";
                daily_text += roop_t + " " + event[index] + "\n";
            } else if (lvRow[index] == 'last') {
                daily_text += roop_t + " " + event[index] + "\n";
                daily_text += "\n";
            } else {
                daily_text += roop_t + " " + event[index] + "\n";
            }
        });

        $('#gridcontainer').before('<textarea id="daily_text" style="width: 100%; height: 500px;">' + daily_text + '</textarea>');
    }
})
