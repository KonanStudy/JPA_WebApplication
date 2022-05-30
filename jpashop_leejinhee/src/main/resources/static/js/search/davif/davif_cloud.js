function getCloud(){
    var ajax={
        type: "GET",
        url: "",
        dataType:"JSON",
        data: "",
        success: {},
        error: {}
    };
    ajax.url = '/api/getDavifData';
    /*ajax.data = $("#kwd").val() !="" ? {"kwd":$("#kwd").val()} : "";*/
    ajax.data = {"kwd":$("#kwd").val(), "type": "Cloud"};
    ajax.success = function(data) {
        console.log(data);
        //var result = JSON.parse(data);
        darwCloud(data);
    };
    ajax.error = function(xhr, ajaxOptions) {
        console.log(ajaxOptions);
    };
    $.ajax(ajax);
}


function darwCloud(data){

    $("#davifCloud").visualization({
        type: "cloud",
        width: "100%",
        height: "100%",
        margin: {
            top: 5,
            right: 0,
            bottom: 20,
            left: 20
        },
        backgroundColor: "",
        font: {
            name: "sans-serif",
            color: "#343434"
        },
        opacityDomain: [0.5,0.8,1],
        text: {
            rotate: 0,
            range: [20,60],
            padding: 3,
            style: {
                cursor: "pointer"
            },
            attr: {

            }
        },
        color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            console.log(d);
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}