document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const backBtn = document.getElementById("back-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentPage = 0;

    const updatePageDisplay = () => {
        pages.forEach((page, index) => {
            page.classList.toggle("active", index === currentPage);
        });

        // Disable buttons if necessary
        backBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;
    };

    backBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updatePageDisplay();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePageDisplay();
        }
    });

    // Initialize display
    updatePageDisplay();
});
