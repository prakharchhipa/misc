


function hit() {
    var url = $('#url').val();
    var count = $('#count').val();
    var settings = {
        "url": "https://iccr4art.herokuapp.com/process_post",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Accept": "*/*",
            "Content-Type": ["application/x-www-form-urlencoded", "application/x-www-form-urlencoded"],
            "Origin": "https://iccr4art.herokuapp.com",
            "Connection": "keep-alive",
            "Referer": "https://iccr4art.herokuapp.com/",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "data": {
            "url": url,
            "count": count
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
    
