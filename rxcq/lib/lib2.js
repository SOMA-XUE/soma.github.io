$(document).ready(function(){
    $.alerts = {         
        alert: function(title, message, callback) {  
            if( title == null ) title = 'Alert';  
            $.alerts._show(title, message, null, 'alert', function(result) {  
                if( callback ) callback(result);  
            });  
        },  
           
        confirm: function(title, message, callback) {  
            if( title == null ) title = 'Confirm';  
            $.alerts._show(title, message, null, 'confirm', function(result) {  
                if( callback ) callback(result);  
            });  
        },  
               
          
        _show: function(title, msg, value, type, callback) {  
            
                    var _html = "";  
   
                    _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';  
                    _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';  
                      if (type == "alert") {  
                      _html += '<input id="mb_btn_ok" class="mb_btn_ok" type="button" value="确定" />';  
                    }  
                    if (type == "confirm") {  
                      _html += '<input id="mb_btn_no" class="mb_btns_no" type="button" value="取消" />';  
                      _html += '<input id="mb_btn_ok" class="mb_btns_ok" type="button" value="确定" />';  
                    }  
                    _html += '</div></div>';  
                   
                    //必须先将_html添加到body，再设置Css样式  
                    $("body").append(_html); GenerateCss();  
           
            switch( type ) {  
                case 'alert':  
          
                    $("#mb_btn_ok").click( function() {  
                        $.alerts._hide();  
                        callback(true);  
                    });  
                    $("#mb_btn_ok").focus().keypress( function(e) {  
                        if( e.keyCode == 13 || e.keyCode == 27 ) $("#mb_btn_ok").trigger('click');  
                    });  
                break;  
                case 'confirm':  
                     
                    $("#mb_btn_ok").click( function() {  
                        $.alerts._hide();  
                        if( callback ) callback(true);  
                    });  
                    $("#mb_btn_no").click( function() {  
                        $.alerts._hide();  
                        if( callback ) callback(false);  
                    });  
                    $("#mb_btn_no").focus();  
                    $("#mb_btn_ok, #mb_btn_no").keypress( function(e) {  
                        if( e.keyCode == 13 ) $("#mb_btn_ok").trigger('click');  
                        if( e.keyCode == 27 ) $("#mb_btn_no").trigger('click');  
                    });  
                break;
            }  
        },  
        _hide: function() {  
             $("#mb_box,#mb_con").remove();  
        }  
    }  
    // Shortuct functions  
    tipsModal = function(title, message, callback) {  
        $.alerts.alert(title, message, callback);  
    }  
       
    tipsModalConfirm = function(title, message, callback) {  
        $.alerts.confirm(title, message, callback);  
    }; 
    
    getQueryVariable = function(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    };
           
   
      
      //生成Css  
    var GenerateCss = function () {  
   
        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',  
        filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.5'  
        });  
    
        $("#mb_con").css({ zIndex: '999999', width: '82%', position: 'fixed',  
        backgroundColor: 'White',  
        });  
    
        $("#mb_tit").css({ display: 'block', fontSize: '18px', color: '#000', height: '48px', lineHeight: '48px',
        backgroundColor: '#fff', borderRadius: '15px 15px 0 0', textAlign: 'center',
        });  
    
        $("#mb_msg").css({ padding: '8px', lineHeight: '20px', textAlign:'center', 
        fontSize: '14px' ,color:'#000000', borderBottom: '2px solid #dddddd',
        });  
    
        $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',  
        border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',  
        lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'  
        });  
    
        $("#mb_btnbox").css({ height: '50px' });  
        $(".mb_btn_ok").css({ width: '100%', height: '100%', padding: '0', color: '#000000', backgroundColor:'#ffffff', border: 'none', cursor: 'pointer', outline: 'none'});
        $(".mb_btns_ok,.mb_btns_no").css({ width: '50%', height: '100%', padding: '0', float:'left',
        color: '#000000', backgroundColor:'#ffffff', border: 'none', cursor: 'pointer', outline: 'none'});
        $(".mb_btns_no").css({ borderRight: '2px solid #dddddd',});    
    
        var _widht = document.documentElement.clientWidth; //屏幕宽  
        var _height = document.documentElement.clientHeight; //屏幕高  
    
        var boxWidth = $("#mb_con").width();  
        var boxHeight = $("#mb_con").height();  
    
        //让提示框居中  
        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });  
    }
});