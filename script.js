document.getElementById('search-btn').addEventListener('click', function () {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const setups = document.querySelectorAll('.setup-box');

    setups.forEach(setup => {
        const title = setup.querySelector('.setup-title').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            setup.style.display = 'block';
        } else {
            setup.style.display = 'none';
        }
    });
});

// Enable search on pressing Enter
document.getElementById('search').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});
