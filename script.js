document.querySelectorAll('.setup-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.1)';
        box.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    });
});

