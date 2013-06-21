var longBoneSelections = document.getElementById("longBoneSelections");
var histology = document.getElementById("histology");
var menus = document.getElementsByName("optionMenu");
var specificLocation = document.getElementsByName("specificBoneMenu");

var confirm = document.getElementById("confirmEntry");

var locationTumor = document.getElementById("locationTumor");
var LC = locationTumor.options[locationTumor.selectedIndex].value;

var tumor;






$(document).ready(function () {
    $("#locationTumor").change(function () {
        var tumorSelection = $("#locationTumor").val()
        if (tumorSelection == "longBone") {

            $("#longBoneSelections").show();
        }
        else {
            $("#longBoneSelections").hide();
        }

    });

    $("#confirmEntry").click(function () {
        tumor = new newTumor();
        
    });

});

function newTumor () {
    this.gender = menus[0].value;
    this.race = menus[1].value;
    this.age = menus[2].value;
    this.boneLocation = menus[3].value;
    this.radiology = menus[4].value;
    this.histology = histology[0].value;
    this.specificBone = specificLocation[0].value;
    this.siteBone = specificLocation[1].value;
    this.portionofBone = specificLocation[2].value;

};

var calculateProbabilities = function () {

    
};

