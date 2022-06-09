//$colorList1:green, $colorList2:blue, $colorList3:red, $colorList4:yellow
var $colorList1 = ["#a9dcbc","#b7d2c0","#c3c8c4","#cebdc7","#d9b2cb","#e2a7ce","#eb9ad2","#eb9ad2"];
var $colorList2 = ["#8bd1fa","#a4cee9","#b8cbd9","#c9c8c8","#d7c4b7","#e4c1a7","#e4c1a7","#e4c1a7"];
var $colorList3 = ["#8d192b","#89373e","#824c51","#785e65","#696f7a","#4f8090","#0090a6","#0090a6"];
var $colorList4 = ["#ffd400","#efd64e","#ddd876","#c6da9a","#a9dcbc","#7edfdd","#00e1ff","#00e1ff"];

function getCloud(p_target){
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
    ajax.data = {"kwd":$("#kwd").val(), "foodType":$("#foodType").val(), "type": "Cloud"};
    ajax.success = function(data) {
    if(p_target=="한식"){drawCloud_ko(data);}
    else if(p_target=="일식"){drawCloud_jp(data);}
    else if(p_target=="중식"){drawCloud_ch(data);}
    else if(p_target=="양식"){drawCloud_ws(data);}
    else{drawCloud(data)}
    };
    ajax.error = function(xhr, ajaxOptions) {
        console.log(ajaxOptions);
    };
    $.ajax(ajax);
}


function drawCloud(data){
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
        color: $colorList1,
        //color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            $('#kwd').val(d.name);
            $('#page').val(1);
            $('#historyForm').submit();
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}

function drawCloud_ko(data){
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
        color: $colorList1,
        //color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            $('#kwd').val(d.name);
            $('#page').val(1);
            $('#historyForm').submit();
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}

function drawCloud_jp(data){
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
        color: $colorList2,
        //color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            $('#kwd').val(d.name);
            $('#page').val(1);
            $('#historyForm').submit();
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}

function drawCloud_ch(data){
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
        color: $colorList3,
        //color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            $('#kwd').val(d.name);
            $('#page').val(1);
            $('#historyForm').submit();
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}

function drawCloud_ws(data){
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
        color: $colorList4,
        //color: ["#00274a","#003b64","#09558a","#1685be","#52b8e8","#81d5fc","#baecfd","#dbf2fa"],
        click: function(d) {
            $('#kwd').val(d.name);
            $('#page').val(1);
            $('#historyForm').submit();
        },
        cloud: {
            spiral: "rectangular"
        },
        data: data
    });
}