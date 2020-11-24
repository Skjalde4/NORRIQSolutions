

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

function selectOnlyThis(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("Solution" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

