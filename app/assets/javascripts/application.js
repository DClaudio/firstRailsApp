// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



var BusTimetable = function(){

    var arrivalsUrl = "bus-timetable/arrivals";

    function updateDomWithArrivals(busArrivals){
        //remove table contents
        $("#arrivals-body").empty()
        //add new content to the table
        var formatedContent = formatContent(busArrivals);
        $("#arrivals-body").append(formatedContent);
    }

    function formatContent(busArrivals){
        var content = "";
        // for each syntax supported only in ES6
        for(var index=0; index < busArrivals.length; index++){
            content += "<tr>";
            content += "<td>"+index+"</td>" +
                    "<td>"+busArrivals[index].route+"</td>" +
                    "<td>"+busArrivals[index].destination+"</td>" +
                    "<td>"+busArrivals[index].timeToStation+"</td>";
            content += "</tr>";
        }
        return content;
    }

    var getArrivalsAndUpdateDom = function(){
        $.get( arrivalsUrl)
            .done(function(jsonData) {
                updateDomWithArrivals(jsonData);
            })
            .fail(function() {
                alert( "Failed to update arrivals" );
            })
    }

    return {updateArrivals: getArrivalsAndUpdateDom};

}();


$( document ).ready(function() {
    $("button#update-arrivals").on( "click", function(){
        BusTimetable.updateArrivals();
    });
});
