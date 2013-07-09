var longBoneSelections = document.getElementById("longBoneSelections");
var histology = document.getElementById("histology");
var menus = document.getElementsByName("optionMenu");
//gender, race, age
var age = document.getElementById("age");


var STorBone =  document.getElementById("STorBone")
var axialOrappendicular = document.getElementById("axialOrappendicular");

var axialSelected = document.getElementById("axialSelected");
var appendicularLocation = document.getElementById("appendicularLocation");

var specificLocation = document.getElementsByName("longBoneMenu");
var locationTumor = document.getElementById("locationTumor");

var longBoneMenu = document.getElementsByName("longBoneMenu");
//humerous, proximal, cortical

var radiology = document .getElementById("radiology")
var shortBoneAffected = document.getElementById("shortBoneAffected");

var grossDescription = document.getElementById("grossDescription");
var histology = document.getElementById("histology");

var cohesiveness = document.getElementById("cohesiveness");
var mitoticRate = document.getElementById("mitoticRate");

var confirm = document.getElementById("confirmEntry");


//var LC = locationTumor.options[locationTumor.selectedIndex].value;

var tumor;



var ewing = {
    
    name: "Ewing's Sarcoma",
    positiveStains: ["CD99 - 99%", "Vimentin - 84%", "FLI-1 - 77%", "NSE - 37%"],
    negativeStains: ["CD45 - 0%", "Osteocalcin - 0 %"],
    variableStains: ["AE-1/3 - 20%"],
    age: [1, 30],
    race: ["white", "asian", "hispanic"],
    gender: "male",
    tumorLocation: ["longBone", "axial"],
    specificSite: ["femur","humerous", "pelvis", "ribs"],
    boneLocation: ["diaphysis", "metaphysis"],
    cORm : "both",
    radiology: ["onion-skinning", "moth-eaten", "lytic"],
    gross: ["tan-grey", "necrotic"],
    histology: ["fine chromatin", "necrosis", "rosettes"],
    mitoses: "variable",
    cohesiveness: "variable",

    score: 0

    //associated soft tissue involvement
};


var osteosarcoma = {
    
    name: "Osteosarcoma",
    positiveStains: [, "Vimentin - 90%", "Osteocalcin - 80%", "SMA"],
    negativeStains: ["CD45 - 0%"],
    variableStains: ["Cytokeratin - 7%", "CD99 - 20%"],
    age: [10, 30],
    race: ["all"],
    gender: "male",
    tumorLocation: ["longBone"],
    specificSite: ["femur"],
    boneLocation: ["metaphysis", "diaphysis"],
    cORm : "medullary",
    radiology: ["Peri-osteal elevation", "moth-eaten", "lytic"],
    gross: ["tan-grey", "flesh", "cartilagenous", "sclerotic"],
    histology: ["boneForming", "spindleCell", "pleomorphic", "cartilageFormation"],
    mitoses: "highlyMitotic",
    cohesiveness: "variable",

    score: 0
    //account for bimodal age...
}


var langerhansHistiocytosis = {
    
    name: "Langerhans Histiocytosis",
    positiveStains: ["CD1a - 99%", "S100 - 100%", "Langerin", "Vimentin"],
    negativeStains: ["B and T cell markers", "Desmin - 0%", "CD99 - 0%"],
    variableStains: ["CD45", "CD68 - 58%"],
    age: [0, 30],
    race: ["all"],
    gender: "male",
    tumorLocation: ["axial", "longBone"],
    specificSite: ["skull", "rib", "femur", "pelvis"],
    boneLocation: [""],
    cORm : "N/A",
    radiology: ["lytic"],
    gross: ["soft", "red"],
    histology: ["eosinophils", "macrophages", "lymphocytes", "necrosis"],
    mitoses: "variable",
    cohesiveness: "variable",
    score: 0

}

var myeloma = {
    
    name: "Multiple Myeloma",
    positiveStains: ["CD138- 100%", "Kappa/Lambda clone"],
    negativeStains: ["Cytokeratin", "CD19", "CD20 - 6%"],
    variableStains: ["CD56 - 45%", "CD45 - 64%"],

    age: [40, 100],
    race: ["all"],
    gender: "both",
    tumorLocation: ["axial", "longBone"],
    specificSite: ["vertebrae", "rib", "skull", "pelvis", "femur", "clavicle", "scapula"],
    boneLocation: [""],
    cORm : "N/A",
    radiology: ["lytic"],
    gross: ["fleshy", "tan", "grey"],
    histology: ["plasmaCells"],
    mitoses: "rare",
    cohesiveness: "discohesive",
    
    score: 0
}

var lymphoma = {
    
    name: "Lymphoma/Leukemia",
    positiveStains: ["CD45 - lymphoid", "CD33 - myeloid - 96%", "CD20", "CD3"],
    negativeStains: ["Cytokeratin"],
    variableStains: [],
   
    age: ["all"],
    race: ["all"],
    gender: "male",
    tumorLocation: ["longBone","axial"],
    specificSite: ["femur", "vertebrae", "pelvis"],
    boneLocation: ["diaphysis"],
    cORm : "medullary",
    radiology: ["lytic", "sclerotic"],
    gross: ["fleshy"],
    histology: ["lymphocytes", "crushArtifact", "smudgeCells", "plasmaCells", "eosinophils"],
    mitoses: "variable",
    cohesiveness: "discohesive",

    score: 0
}

$(document).ready(function () {
    $('#STorBone').change(function () {
        var orgType = $("#STorBone").val()

        if (orgType == "softTissue") {

            $("#softTissueSelected").show();
            $('#boneSelected').hide();
        }
        else if (orgType == "bone") {
            $("#softTissueSelected").hide();
            $("#boneSelected").show();
        };


    });

    $('#boneSelected').change(function () {
        var boneType = $("#axialOrappendicular").val()


        if (boneType == "axial") {

            $("#axialSelected").show();
            $('#appendicularSelected').hide();
        }
        else if (boneType == "appendicular") {

            $("#axialSelected").hide();
            $("#appendicularSelected").show();
        };


    });

    $("#appendicularLocation").change(function () {
        var tumorSelection = $("#appendicularLocation").val()

        if (tumorSelection == "longBone") {

            $("#longBoneSelections").show();
        }
        else {
            $("#longBoneSelections").hide();
        };

    });

    $("#confirmEntry").click(function () {
        tumor = new newTumor();
        calculateProbabilities(tumor);
       // alert(tumor.age);

    });

});

function newTumor () {
    this.gender = menus[0].value;
    this.race = menus[1].value;
    this.age = age.value;
    //menus[2].value;
    
    //STorBone is current
    //this.boneLocation = menus[3].value;

    this.axialSelected = axialSelected.value;
    this.specificLocation = specificLocation.value;

    this.longBoneAffected = longBoneMenu[0].value;
    this.longSite = longBoneMenu[1].value;
    this.cOrM = longBoneMenu[2].value;

    this.radiology = radiology.value;
    this.histology = histology.value;
    this.cohesiveness = cohesiveness.value;
    this.mitoticRate = mitoticRate.value;
    
    
 

};

//alert (ewing.positiveStains[0])

 var tumorSet = [ewing, osteosarcoma, langerhansHistiocytosis, myeloma, lymphoma]

 var calculateProbabilities = function (tumor) {

     var tumorScore = [0, 0, 0, 0, 0];
     tumorOrder = [];
     // alert(tumorSet[0].name)
     //alert(tumorScore[0]+ 1)
     // tumorSet[i].score = tumorSet[i].score + 1;

     //alert(tumorSet[0].score)
     for (var i = 0; i < tumorSet.length; i++) {
         //console.log(tumorSet[i].gender)
         //console.log(tumorSet[i][gender])


         if (tumor.age != "empty" && tumor.age > tumorSet[i].age[0] && tumor.age < tumorSet[i].age[1]) { tumorSet[i].score = tumorSet[i].score + 1; };
         if (tumor.gender != "empty" && tumorSet[i].gender == "both" || tumor.gender == tumorSet[i].gender ) { tumorSet[i].score = tumorSet[i].score + 1; };
         if (tumor.race != "empty" && tumorSet[i].race == "all" || inArray(tumorSet[i].race, tumor.race)) { tumorSet[i].score = tumorSet[i].score + 1; };
         if (inArray(tumorSet[i].gross, tumor.gross)) { tumorSet[i].score = tumorSet[i].score + 1; };
         //may want to have additional points if number one in list

         if (inArray(tumorSet[i].radiology, tumor.radiology)) { tumorSet[i].score = tumorSet[i].score + 1; };
         

         //need to correct this
         if (inArray(tumorSet[i].specificSite, tumor.specificLocation)) { tumorSet[i].score = tumorSet[i].score + 1; };
         if (inArray(tumorSet[i].specificSite, tumor.longBoneAffected)) { tumorSet[i].score = tumorSet[i].score + 1; };


         if (inArray(tumorSet[i].histology, tumor.histology)) { tumorSet[i].score = tumorSet[i].score + 1; };

         //msort(tumorScore, 0, tumorScore.length);
         //if (tumor.gender == tumorSet[i].gender || tumorSet[i].gender=="both"){tumorScore[i]++;};
         //console.log(tumorScore[i]);
         //alert (tumorScore[i])
         //  console.log(tumorSet[i].name + " "+tumorSet[i].score);

     };
     // console.log(tumorSet[2].score);
     tumorSet.sort(function (a, b) {
         return b.score - a.score;
     });

     // tumorOrder = tumorSet.sort(compare)
     // tumorOrder = tumorSet.sort(dynamicSort("score"));
     //People.sort(dynamicSort("Name"));
     //alert(tumorSet[0].name)
     var totals = totalScore(tumor);
     //alert(totals);
     printIHC(tumorSet, totals);
     // objs.sort(compare);
     // alert(tumor.age);
 };


var inArray = function (myArray, myValue) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === myValue) {
            return true;
            i = myArray.length();
        }
        else {
            return false;
        }

    }

}

var printIHC = function (mySet, totals) {
    var positives = [];
    var negatives = [];
    var variables = [];

    for (var j = 0; j < mySet.length; j++) {

        for (var x = 0; x < mySet[j].positiveStains.length; x++) {
            if (mySet[j].positiveStains[x] == undefined) {
                mySet[j].positiveStains[x] = "N/A";
            }
            positives[x] = mySet[j].positiveStains[x] + " ";

        }
        for (var x = 0; x < mySet[j].negativeStains.length; x++) {
            if (mySet[j].negativeStains[x] == undefined) {
                mySet[j].negativeStains[x] = "N/A";
            }

            negatives[x] = mySet[j].negativeStains[x] + " ";

        }
        for (var x = 0; x < mySet[j].variableStains.length; x++) {
            if (mySet[j].variableStains[x] == undefined) {
                mySet[j].variableStains[x] = "N/A";
            }

            variables[x] = mySet[j].variableStains[x] + " ";

        }
        //  $('#answerTable').append( '<tr><td>' + "oh yeah" + '</td>' '<td>' + "hi" '</td></tr>' );
        //'mySet[0].name'
        $('#answerTable tr:last').after('<tr> <td>' + mySet[j].name + '</td><td>' + positives + ' <td>' + negatives + '</td><td>' + variables + '</td><td>' + mySet[j].score + "/" + totals + '</td></tr>')
        positives = [];
        negatives = [];
        variables = [];
    }

}

var totalScore = function (tumor) {
    var total = 0;
    $.each(tumor, function (key, element) {
        if (element != undefined && element != "none" && element != "empty" && element != "") {
            if (key == histology || key == grossDescription) {
                // alert (key + " " + element)
                for (var i = 0; i < key.length; i++) {
                    total = total + 1;
                } 
            }
            else {
                total = total + 1;
            };

        };
    });
    //alert(total);
    return total;
}


// '{"name":"Ewing", "positiveStains":["CD99, NSE"], "negativeStains":["Vimentin"] },' +
//'{"name":"Lymphoma", "positiveStains":["CD45"], "negativeStains":["Cytokeratin", "Vimentin"] } '
//'{"name:"Desmoplastic sarcoma", "positiveStains":[], "negativeStains":["CK"]}' +
//'{"name:"Small cell lung cancer", "positiveStain":["Cytokeratin", "Synatophysin", "Chromagranin", "TTF-1"], "negativeStains":["p63"] }'+
//'{"name:"Langerhan Histiocytosis", "positiveStains":[CD1a, S100, langerin, vimentin, CD68, HLA-DR], "negativeStains":["B and T cell markers", "CD30", "CD21", "CD23"]}' +
//'{"name:"Osteosarcoma", "positiveStains":[], "negativeStains":["CK"]}' +
//'{"name:"Multiple myeloma", "positiveStains":["CD38, CD138"], "negativeStains":[]}' +

