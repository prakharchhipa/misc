


function hit() {
    var url = $('#url').val();
    var count = $('#count').val();
    var settings = {
        "url": "https://iccr4art.herokuapp.com/process_post",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        "data": {
            "url": url,
            "count": count
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location = url;
    });
}
    
