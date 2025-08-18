// Select all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const toggleBtn = dropdown.querySelector('.dropdown-toggle');

  // Toggle only this dropdown
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Close other dropdowns first
    dropdowns.forEach(d => {
      if (d !== dropdown) d.classList.remove('active');
    });

    // Toggle the one clicked
    dropdown.classList.toggle('active');
  });
});

// Close all dropdowns if clicked outside
document.addEventListener('click', () => {
  dropdowns.forEach(d => d.classList.remove('active'));
});