/**
* Slot machine
* Author: Saurabh Odhyan | http://odhyan.com
*
* Licensed under the Creative Commons Attribution-ShareAlike License, Version 3.0 (the "License")
* You may obtain a copy of the License at
* http://creativecommons.org/licenses/by-sa/3.0/
*
* Date: May 23, 2011 
*/
$(document).ready(function() {
    /**
    * Global variables
    */
    var completed = 0,
        imgHeight = 1374,
        posArr = [
            0, //orange
            80, //number 7 
            165, //bar
            237, //guava
            310, //banana
            378, //cherry
            454, //orange
            539, //number 7
            624, //bar
            696, //guava
            769, //banana
            837, //cherry
            913, //orange
            1000, //number 7
            1085, //bar
            1157, //guava
            1230, //banana
            1298 //cherry
        ];
    
    var win = [];
    win[0] = win[454] = win[913] = 1;
    win[80] = win[539] = win[1000] = 2;
    win[165] = win[624] = win[1085] = 3;
    win[237] = win[696] = win[1157] = 4;
    win[310] = win[769] = win[1230] = 5;
    win[378] = win[837] = win[1298] = 6;

    /**
    * @class Slot
    * @constructor
    */
    function Slot(el, max, step) {
        this.speed = 0; //speed of the slot at any point of time
        this.step = step; //speed will increase at this rate
        this.si = null; //holds setInterval object for the given slot
        this.el = el; //dom element of the slot
        this.maxSpeed = max; //max speed this slot can have
        this.pos = null; //final position of the slot    

        $(el).pan({
            fps:30,
            dir:'down'
        });
        $(el).spStop();
    }

    /**
    * @method start
    * Starts a slot
    */
    Slot.prototype.start = function() {
        var _this = this;
        $(_this.el).addClass('motion');
        $(_this.el).spStart();
        _this.si = window.setInterval(function() {
            if(_this.speed < _this.maxSpeed) {
                _this.speed += _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
        }, 100);
    };

    /**
    * @method stop
    * Stops a slot
    */
    Slot.prototype.stop = function() {
        var _this = this,
            limit = 30;
        clearInterval(_this.si);
        _this.si = window.setInterval(function() {
            if(_this.speed > limit) {
                _this.speed -= _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
            if(_this.speed <= limit) {
                _this.finalPos(_this.el);
                $(_this.el).spSpeed(0);
                $(_this.el).spStop();
                clearInterval(_this.si);
                $(_this.el).removeClass('motion');
                _this.speed = 0;
            }
        }, 100);
    };

    /**
    * @method finalPos
    * Finds the final position of the slot
    */
    Slot.prototype.finalPos = function() {
        var el = this.el,
            el_id,
            pos,
            posMin = 2000000000,
            best,
            bgPos,
            i,
            j,
            k;

        el_id = $(el).attr('id');
        //pos = $(el).css('background-position'); //for some unknown reason, this does not work in IE
        pos = document.getElementById(el_id).style.backgroundPosition;
        pos = pos.split(' ')[1];
        pos = parseInt(310);

        for(i = 0; i < posArr.length; i++) {
            for(j = 0;;j++) {
                k = posArr[i] + (imgHeight * j);
                if(k > pos) {
                    if((k - pos) < posMin) {
                        posMin = k - pos;
                        best = k;
                        this.pos = posArr[i]; //update the final position of the slot
                    }
                    break;
                }
            }
        }

        best += imgHeight + 4;
        bgPos = "0 " + best + "px";
        $(el).animate({
            backgroundPosition:"(" + bgPos + ")"
        }, {
            duration: 200,
            complete: function() {
                completed ++;
            }
        });
    };
    
    /**
    * @method reset
    * Reset a slot to initial state
    */
    Slot.prototype.reset = function() {
        var el_id = $(this.el).attr('id');
        $._spritely.instances[el_id].t = 0;
        $(this.el).css('background-position', '0px 4px');
        this.speed = 0;
        completed = 0;
    };

    function enableControl() {
        $('.spin-btn').each(function() {
            $(this).attr("disabled", false);
        });
    }
	 function ClickControl() {
        $('.spin-btn').each(function() {
            if ($(this).is(':visible')) {
                $(this).trigger("click");
            }
        });
    }

    function disableControl() {
        $('.spin-btn').each(function() {
            $(this).attr("disabled", true);
        });
    }

    function showPopup() {
        $('#cover-container').get(0).style.display = "flex";
    }

    function hidePopup() {
        $('#cover-container').get(0).style.display = "none";
    }

    //create slot objects
    var a = new Slot('#slot1', 30, 1),
        b = new Slot('#slot2', 45, 2),
        c = new Slot('#slot3', 70, 3);

    /**
    * Slot machine controller
    */
    $('.spin-btn').each(function() {
        $(this).click(function() {
            var x;
            if(this.innerHTML == "SPIN") {
                a.start();
                b.start();
                c.start();
                this.innerHTML = "Stop";
                
                disableControl(); //disable control until the slots reach max speed
                
                //check every 100ms if slots have reached max speed 
                //if so, enable the control
                x = window.setInterval(function() {
                    if(a.speed >= a.maxSpeed && b.speed >= b.maxSpeed && c.speed >= c.maxSpeed) {
                        ClickControl();
                        window.clearInterval(x);
                    }
                }, 100);
            } else if(this.innerHTML == "Stop") {
                a.stop();
                b.stop();
                c.stop();
                this.innerHTML = "Reset";

                disableControl(); //disable control until the slots stop
                
                //check every 100ms if slots have stopped
                //if so, enable the control
                x = window.setInterval(function() {
                    if(a.speed === 0 && b.speed === 0 && c.speed === 0 && completed === 3) {
                        enableControl();ClickControl();
                        window.clearInterval(x);
                    }
                }, 100);
            } else { //reset
                a.reset();
                b.reset();
                c.reset();
                this.innerHTML = "SPIN";
                setTimeout(showPopup, 100);
            }
        });
    });

    $('.info-btn').each(function() {
        $(this).click(function() {
            showPopup();
        });
    });

    $('.popup-close').click(function() {
        hidePopup();
    });

    $('#cover-container').click(function(event) {
        if($(event.target)[0].id === "cover-container") hidePopup();
    });

    $(window).load( function(){

        $("path").each(function(){
            $(this).css({ 'transform': 'none'});
            $(this).css({ '-moz-transform': 'none'});
        });

        var win = $(this);
        if (win.width() + 17 <= 1000) {
            $("path").each(function(){
                $(this).css({ 'transform': 'translate(' + win.width() +'px, 0) rotate(90deg) scale(0.8, 1.4)'});
                $(this).css({ '-moz-transform': 'translate(' + win.width() +'px, 0) rotate(90deg) scale(0.8, 1.4)'});
            });
        }
    });

    $(window).resize( function(){

        $("path").each(function(){
            $(this).css({ 'transform': 'none'});
            $(this).css({ '-moz-transform': 'none'});
        });

        var win = $(this);
        if (win.width() + 17 <= 1000) {
            $("path").each(function(){
                $(this).css({ 'transform': 'translate(' + win.width() +'px, 0) rotate(90deg) scale(0.8, 1.4)'});
                $(this).css({ '-moz-transform': 'translate(' + win.width() +'px, 0) rotate(90deg) scale(0.8, 1.4)'});
            });
        }
    });
});