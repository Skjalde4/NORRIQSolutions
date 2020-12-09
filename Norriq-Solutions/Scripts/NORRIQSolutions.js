

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
        window.location.href = "https://localhost:44311/Pages/MovingPage.html";
        return false;
    }
    if (solution5.checked) {
        window.location.href = "https://localhost:44311/Pages/FunctionPage.html";
        
        return false;
    }else {
        document.getElementById("websiteMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }
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
        window.location.href = "https://localhost:44311/Pages/MovingPage.html";
       
        return false;
    }else {
        document.getElementById("webshopMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }
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
        window.location.href = "https://localhost:44311/Pages/MovingPage.html";

        return false;
    } else {
        document.getElementById("appMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }
    
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
    }else {
        document.getElementById("appTypeMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }
    
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
    }else {
        document.getElementById("functionMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }
}


function WhichMovingSolutionIsChecked() {
    var solution1 = document.getElementById("MovingSolution1");
    var solution2 = document.getElementById("MovingSolution2");
    var solution3 = document.getElementById("MovingSolution3");

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
    }else {
        document.getElementById("movingMsg").innerHTML = "Vælg venligst en løsning";
        return true;
    }

}

function WishALocalPartner() {
    var answer1 = document.getElementById("AnswerYes");
    var answer2 = document.getElementById("AnswerNo");
    var city = document.getElementById("City");

    if (answer1.checked) {
        city.style.display = "block";
    }
    if (answer2.checked) {
        answer1.checked = false;
        city.style.display = "none";
    }

}

function HaveAnyDesignIdeas() {
    var design1 = document.getElementById("DesignYes");
    var design2 = document.getElementById("DesignNo");
    var idea = document.getElementById("Idea");

    if (design1.checked) {
        idea.style.display = "block";
        
    }
    if (design2.checked) {
        idea.style.display = "none";
        design1.checked = false;
    }
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

function selectOnlyThisMovingSolution(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("MovingSolution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function CheckIfBusinessIsEmpty() {
    var business = document.getElementById("BusinessSelection");
    if (business.value === "") {
        document.getElementById("BusinessNotSelected").innerHTML = "Dette felt skal udfyldes.";
    } else {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
    }
}

function CheckIfLocalPartnerIsFilledOut() {
    var answer1 = document.getElementById("AnswerYes");
    var answer2 = document.getElementById("AnswerNo");
    var city = document.getElementById("City");
    var isEmpty = true;

    if (city.value !== "") {
        isEmpty = false;
    } else {
        document.getElementById("CityNotSelected").innerHTML = "Dette felt skal udfyldes.";
        isEmpty = true;
    }
    if (answer1.checked && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
    }

    if (answer2.checked) {
        window.location.href = "https://localhost:44311/Pages/LanguagePage.html";
    }
}

function CheckIfDesignIdeasIsFilledOut() {
    var design1 = document.getElementById("DesignYes");
    var design2 = document.getElementById("DesignNo");
    var inputIdea = document.getElementById("InputIdea");
    var isEmpty = true;

    if (inputIdea.value !== "") {
        isEmpty = false;
    } else {
        document.getElementById("IdeasNotInserted").innerHTML = "Venligst udfyld feltet med dine ideer";
        isEmpty = true;
    }
    if (design1.checked && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/CreateUserPage.html";
    }
    if (design2.checked) {
        window.location.href = "https://localhost:44311/Pages/CreateUserPage.html";
    }
}

function CheckIfCreateUserIsFilledOut() {
    var cvrNo = document.getElementById("CVRNo");
    var companyName = document.getElementById("CompanyName");
    var contactPerson = document.getElementById("ContactPerson");
    var email = document.getElementById("Email");
    var phoneNo = document.getElementById("PhoneNo");
    var isEmpty = true;

    if (cvrNo.value === "" && companyName.value === "" && contactPerson.value === "" && email.value === "" && phoneNo.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld alle felterne";
        isEmpty = true;
        return;
    }
    if (cvrNo.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld dit cvr nummer";
        isEmpty = true;
        return;
    }
    if (companyName.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld din virksomheds navn";
        isEmpty = true;
        return;
    }
    if (contactPerson.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld dit navn";
        isEmpty = true;
       return;
    }
    if (email.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld din email";
        isEmpty = true;
        return;
    }
    if (phoneNo.value === "") {
        document.getElementById("createMsg").innerHTML = "Venligst udfyld dit telefonnummer";
        isEmpty = true;
        return;
    }
    
    if (cvrNo.value !== "" && companyName.value !== "" && contactPerson.value !== "" && email.value !== "" && phoneNo.value !== "") {
        isEmpty = false;
        window.location.href  = "https://localhost:44311/Pages/ConfirmationPage.html";
    }


}

function WhichLanguageIsSelected() {
    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    var lang4 = document.getElementById("lang4");
    var lang5 = document.getElementById("lang5");
    var lang6 = document.getElementById("lang6");
    var lang = document.getElementById("lang");
    var isEmpty = true;

    if (lang.value !== "") {
        isEmpty = false;
    } else {
        document.getElementById("langNotSelected").innerHTML = "Der skal vælges et sprog";
        isEmpty = true;
    }
    if (lang2.value == "Dansk" && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LocalPartnerPage.html";
        isEmpty = false;
    }
    if (lang3.value == "Engelsk" && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LocalPartnerPage.html";
        isEmpty = false;
    }
    if (lang4.value == "Norsk" && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LocalPartnerPage.html";
        isEmpty = false;
    }
    if (lang5.value == "Svensk" && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LocalPartnerPage.html";
        isEmpty = false;
    }
    if (lang6.value == "Tysk" && isEmpty === false) {
        window.location.href = "https://localhost:44311/Pages/LocalPartnerPage.html";
        isEmpty = false;
    }
    

}

function goBack() {
    window.history.back();
}
