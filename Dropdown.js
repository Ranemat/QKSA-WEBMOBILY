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
/*
// جلب البيانات من API على OpenShift وإضافتها إلى القوائم المنسدلة
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownContainer = document.querySelector(".dropdown-container");

    fetch('https://qksa-api-dynamic-experience-test.apps.esale-dev.prod.mobily.lan/restaurants')
        .then(response => response.json())
        .then(data => {
            window.advertisements = data;
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'dropdown';

                const isArabic = /[\u0600-\u06FF]/.test(item.name);
                const locationText = isArabic ? 'تجد الموقع عن النقر هنا' : 'Find the location by clicking here';

                div.innerHTML = `
                    <button class="dropdown-btn" onclick="toggleDropdown(${item.id})" style="color: black;">${item.name}</button>
                    <div id="dropdown-content-${item.id}" class="dropdown-content">
                        <p class="${isArabic ? 'arabic-text' : 'english-text'}" style="font-weight: bolder; color: brown;">${item.name}</p>
                        <p class="Description ${isArabic ? 'arabic-text' : 'english-text'}" style="color: brown;">${item.description}</p>
                        <p class="${isArabic ? 'arabic-text' : 'english-text'}">
                            <a href="${item.location}" style="text-decoration: underline; color: blue;">${locationText}</a>
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

// تحديث وظيفة البحث
function searchFunction() {
    filterSearchResults();
}

function filterSearchResults() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var adList = document.getElementById('search-list');
    var advertisementList = document.querySelector('.dropdown-container');

    adList.innerHTML = '';

    window.advertisements.forEach(function(ad) {
        if (ad.name.toUpperCase().includes(input)) {
            var li = document.createElement('li');
            li.className = 'search-result';
            var a = document.createElement('a');
            a.textContent = ad.name;
            a.href = "#";

            const isArabic = /[\u0600-\u06FF]/.test(ad.name);
            const locationText = isArabic ? 'تجد الموقع عن النقر هنا' : 'Find the location by clicking here';

            a.onclick = function() {
                // Clear previous advertisement
                advertisementList.innerHTML = '';

                var dropdown = document.createElement('div');
                dropdown.className = 'dropdown';

                dropdown.innerHTML = `
                    <button class="dropdown-btn" onclick="toggleDropdown(${ad.id})" style="color: black;">${ad.name}</button>
                    <div id="dropdown-content-${ad.id}" class="dropdown-content">
                        <p class="${isArabic ? 'arabic-text' : 'english-text'}" style="font-weight: bolder; color: brown;">${ad.name}</p>
                        <p class="Description ${isArabic ? 'arabic-text' : 'english-text'}" style="color: brown;">${ad.description}</p>
                        <p class="${isArabic ? 'arabic-text' : 'english-text'}">
                            <a href="${ad.location}" style="text-decoration: underline; color: blue;">${locationText}</a>
                        </p>
                    </div>
                `;
                advertisementList.appendChild(dropdown);

                // إخفاء قائمة البحث عند النقر على نتيجة
                document.getElementById('searchContent').style.display = 'none';
            };
            li.appendChild(a);
            adList.appendChild(li);
        }
    });
}
*/