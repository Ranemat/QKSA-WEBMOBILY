// وظيفة لتبديل حالة القائمة المنسدلة
function toggleDropdown(dropdownId) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && openDropdown.id !== "dropdown-content-" + dropdownId) {
            openDropdown.classList.remove('show');
        }
    }

    var dropdownContent = document.getElementById("dropdown-content-" + dropdownId);
    if (dropdownContent) {
        dropdownContent.classList.toggle("show");
    } else {
        console.error('Dropdown content not found for ID:', dropdownId);
    }
}

// جلب البيانات من ملف JSON المحلي وإضافتها إلى القوائم المنسدلة
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownContainer = document.querySelector(".dropdown-container");

    fetch('restaurants.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'dropdown';

                div.innerHTML = `
                    <button class="dropdown-btn" onclick="toggleDropdown(${item.id})" style="color: black;">${item.name}</button>
                    <div id="dropdown-content-${item.id}" class="dropdown-content">
                        <p style="font-weight: bolder; color: brown;">${item.name}</p>
                        <p class="Description" style="color: brown;">${item.description}</p>
                        <p>
                            <a href="${item.location}" style="text-decoration: underline; color: blue;">Find the location by clicking here</a>
                        </p>
                    </div>
                `;
                dropdownContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching the data:', error));
});

// إغلاق القوائم المنسدلة عند النقر خارجها
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

// تغيير لون الرقم عند تغيير قيمة الإدخال
/*
var inputNumber = document.getElementById("inputNumber");
if (inputNumber) {
    inputNumber.addEventListener("input", function() {
        var number = parseInt(inputNumber.value);
        if (number > 1000) {
            inputNumber.style.color = "green";
        } else if (number > 200) {
            inputNumber.style.color = "orange";
        } else {
            inputNumber.style.color = "pink";
        }
    });
} else {
    console.error('Input element with ID "inputNumber" not found.');
}
*/
