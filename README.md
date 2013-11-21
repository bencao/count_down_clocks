count_down_clocks
=================

high efficient count downs in one page

See [Demo in Jsfiddle](http://jsfiddle.net/benb88/BxPVk/).

## Usage Sample
```javascript
var cs = new CountDownClock.Scheduler();

$('#clocks .clock').each(function() {
    // add clocks to scheduler
    var $this = $(this);
    var c = new CountDownClock.Clock();
    c.setHourContainer($this.find('span.h').get(0));
    c.setMinuteContainer($this.find('span.m').get(0));
    c.setSecondContainer($this.find('span.s').get(0));
    // random a remain seconds
    c.init(parseInt(Math.random() * 100000));
    cs.add(c);
});

cs.start();
```
