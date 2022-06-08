function getMap(){
    var ajax={
        type: "GET",
        dataType:"JSON",
        url: "",
        data: "",
        success: {},
        error: {}
    };
    ajax.url = '/api/getDavifData';
    /*ajax.data = $("#kwd").val() !="" ? {"kwd":$("#kwd").val()} : "";*/
    ajax.data = {"kwd":$("#kwd").val(), "region":$("#clickCity").val(), "type":"Map"};
    ajax.success = function(data) {
        drawMap(data);
    };
    ajax.error = function(xhr, ajaxOptions) {
        console.log(ajaxOptions);
    };
    $.ajax(ajax);
}

function drawMap(data){
    $("#davifMap").visualization({
        type: "map",
        data: data,
        width: "100%",
        height: "100%",
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        backgroundColor: "",
        font: {
            name: "sans-serif",
            color: "#343434"
        },
        map: {
            area: "전국",
            x:1,
            y:0
        },
        text: {
            enabled: true,
            mouseover: false
        },
        tooltip: {
            enabled: true
        },
        /*clicked: /!*{
            /!*data: {
                url: "../resources/map_municipalities_data.json",
                params: function(d) {
                },
                parser: function(data, d) {
                    return data;
                }
            }*!/
        },*!/*/
        color: ["#D4F4FA","#B4E7FF","#90C3FF","#6C9FFF","#487BE1","#2457BD","#002187"],
        click: function(d) {
            $("#clickCity").val(d.properties.name);

            $("#historyForm").submit();
        }
    });
}


function areaClick(){
    $("#clickCity").val('');

    $("#historyForm").submit();
}