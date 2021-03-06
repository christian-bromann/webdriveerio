var wd = require('webdriveerio');

var options = { desiredCapabilities: { browserName: 'chrome' } };

var driver = wd.remote(options);


// EXAMPLE:
// we will clck only checkboxes with an amount of things between 5 and 12;


driver
    .init()
    .url('file:///' + __dirname + '/checkbox_list.html') 
    .query('form input', function(err, $inputs, $) { 
        // you could add a pause between actions calling "query" like this:
        // .query('form input', 500, function(err, $inputs, $) { 
        // 500 = milliseconds of pause between actions ("click" action in this example)
        
        $inputs.each(function(i,e){
        	
        	var $field = $(e);
            var amount = parseInt($field.next().text().split(' ')[0]);

            if (amount >= 5 && amount <= 12 ) {
                
                // just call click over the element and driver will click the element in the real browser
                $field.click(); 
            
            }
        });
    }) 
    .pause(10000, function(){})
    .end();

