

function WhichSolutionIsChecked() {
    var solution1 = document.getElementById("Solution1");
    var solution2 = document.getElementById("Solution2");
    var solution3 = document.getElementById("Solution3");

    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/NORRIQSolutionsWebsite.html";
        return false;
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/NORRIQSolutionsWebshop.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/NORRIQSolutionsApplication.html";
        return false;
    }
    return true;
}


function WhichSolutionIsCheckedWebsite() {
    var solution1 = document.getElementById("WebsiteSolution1");
    var solution2 = document.getElementById("WebsiteSolution2");
    var solution3 = document.getElementById("WebsiteSolution3");
    var solution4 = document.getElementById("WebsiteSolution4");
    var solution5 = document.getElementById("WebsiteSolution5");


    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    if (solution4.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    if (solution5.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        //Flytte løsningerne skal henvise til en anden side
        return false;
    }
    return true;
}

function WhichSolutionIsCheckedWebshop() {
    var solution1 = document.getElementById("WebshopSolution1");
    var solution2 = document.getElementById("WebshopSolution2");
    var solution3 = document.getElementById("Webshopsolution3");

    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/BusinessPage.html";
        return false;
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/BusinessPage.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/BusinessPage.html";
        //Flytte løsningerne skal henvise til en anden side
        return false;
    }
    return true;
}

function WhichSolutionIsCheckedApplication() {
    var solution1 = document.getElementById("ApplicationSolution1");
    var solution2 = document.getElementById("ApplicationSolution2");
    var solution3 = document.getElementById("ApplicationSolution3");

    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/ApplicationTypePage.html";
        return false;
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/ApplicationTypePage.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/ApplicationTypePage.html";
        //Flytte løsningerne skal henvise til en anden side
        return false;
    }
    return true;
}


function WhichApplicationTypeIsChecked() {
    var solution1 = document.getElementById("ApplicationSolution1");
    var solution2 = document.getElementById("ApplicationSolution2");
    var solution3 = document.getElementById("ApplicationSolution3");

    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
        
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        return false;
    }
    return true;
    
}

function WhichFunctionIsChecked() {
    var solution1 = document.getElementById("FunctionSolution1");
    var solution2 = document.getElementById("FunctionSolution2");
    var solution3 = document.getElementById("FunctionSolution3");
    var solution4 = document.getElementById("FunctionSolution4");

    if (solution1.checked) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
        return false;
    }
    if (solution2.checked) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
        return false;
    }
    if (solution3.checked) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
        return false;
    }
    if (solution4.checked) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
        return false;
    }
    return true;
}

function selectOnlyThis(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("Solution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisWebsite(id) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("WebsiteSolution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisWebshop(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("WebshopSolution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisApplication(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("ApplicationSolution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisFunction(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("FunctionSolution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function goBack() {
    window.history.back();
}
