// وظيفة لتبديل حالة القائمة المنسدلة
function toggleDropdown(dropdownId) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var buttons = document.getElementsByClassName("dropdown-btn");
    
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var button = buttons[i];
        if (openDropdown.classList.contains('show') && openDropdown.id !== "dropdown-content-" + dropdownId) {
            openDropdown.classList.remove('show');
            button.classList.remove('active');
        }
    }

    var dropdownContent = document.getElementById("dropdown-content-" + dropdownId);
    var dropdownButton = document.querySelector(`[onclick="toggleDropdown(${dropdownId})"]`);
    
    if (dropdownContent) {
        dropdownContent.classList.toggle("show");
        dropdownButton.classList.toggle("active");
    } else {
        console.error('Dropdown content not found for ID:', dropdownId);
    }
}
