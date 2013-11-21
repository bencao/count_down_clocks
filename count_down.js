window.CountDownClock = {
    Clock: function() {
        this._seconds = 0;
        
        this._hourContainer = false;
        this._minuteContainer = false;
        this._secondContainer = false;
        
        this.setHourContainer = function (dom) {
            this._hourContainer = dom;
        };
        this.setMinuteContainer = function (dom) {
            this._minuteContainer = dom;
        };
        this.setSecondContainer = function (dom) {
            this._secondContainer = dom;
        };
        
        this.init = function(seconds) {
            this._seconds = seconds;
        };
        
        this.countDown = function() {
            if (this._seconds > 0) {
                this._seconds --;
            }
            return this;
        };
        
        this.render = function() {
            this._displayNum(this._hourContainer, this._getHour());
            this._displayNum(this._minuteContainer, this._getMinute());
            this._displayNum(this._secondContainer, this._getSecond());
            return this;
        };
        
        this._getHour = function() {
            return parseInt(this._seconds / 3600);
        };
        
        this._getMinute = function() {
            return parseInt((this._seconds % 3600) / 60); 
        };
        
        this._getSecond = function() {
            return (this._seconds % 60);
        };
            
        this._displayNum = function(container, num) {
            container.innerHTML = ((num < 10) ? ('0' + num) : new String(num));
        };
    },
        
    Scheduler: function() {
        this._clocks = new Array();
        this.add = function(clock) {
            this._clocks.push(clock);
        };
        this.start = function() {
            var _self = this;
            setInterval(function() {
                for (var i = 0, len = _self._clocks.length; i < len; i ++) {
                    (_self._clocks[i]).countDown().render();
                }
            }, 1000);
        };
    }
};
