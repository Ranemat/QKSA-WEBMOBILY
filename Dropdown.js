
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById("dropdown-content-" + dropdownId);
    dropdownContent.classList.toggle("show");
}

toggleDropdown(dropdownId)

// إغلاق القوائم السقوطية عند النقر خارجها
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// change color of num 
  // الحصول على عنصر الإدخال
  var inputNumber = document.getElementById("inputNumber");

// تحديث لون الرقم عند تغيير قيمة الإدخال
inputNumber.addEventListener("input", function() {
    // قراءة الرقم من الإدخال
    var number = parseInt(inputNumber.value);

    // تغيير لون الرقم وفقاً للشروط
    if (number > 1000) {
        inputNumber.style.color = "green"; // اللون الأخضر للأرقام أكبر من 1000
    } else if (number > 200) {
        inputNumber.style.color = "orange"; // اللون البرتقالي للأرقام أكبر من 200 وأقل من ألف
    } else {
        inputNumber.style.color = "pink"; // اللون الوردي للأرقام أقل من 200
    }
});