const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;

    // بستن همه قبل از باز کردن فعلی (مثل آکاردئون واقعی)
    document.querySelectorAll('.accordion-content').forEach((c) => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    // باز یا بسته کردن مورد فعلی
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
