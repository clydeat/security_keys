/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
* ------------------------------------------------------------------------*/

$(document).ready(function(a) {
        a(".cssmenu").prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
        var b = a(".cssmenu>ul>li:first");
        a(".cssmenu>ul>li").each(function() {
            a(this).hasClass("active") && (b = a(this))
        });
        var c = b.position().left
          , d = b.width();
        c = c + d / 2 - 6,
        b.hasClass("has-sub") && (c -= 6),
        a(".cssmenu #pIndicator").css("left", c);
        var e, f;
        a(".cssmenu pIndicator"),
        a(".cssmenu>ul>li").hover(function() {
            e = a(this);
            var b = e.width();
            f = a(this).hasClass("has-sub") ? e.position().left + b / 2 - 12 : e.position().left + b / 2 - 6,
            a(".cssmenu #pIndicator").css("left", f)
        }, function() {
            a(".cssmenu #pIndicator").css("left", c)
        }),
        a(".cssmenu>ul").prepend('<li id="menu-button"><a>MENU</a></li>'),
        a("#menu-button").click(function() {
            a(this).parent().hasClass("open") ? a(this).parent().removeClass("open") : a(this).parent().addClass("open")
        })
    });
