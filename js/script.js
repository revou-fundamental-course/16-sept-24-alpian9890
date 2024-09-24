document.addEventListener('DOMContentLoaded', function() {
    
    // Banner auto-slide
    const bannerImages = document.querySelectorAll('.banner-image');
    let imageSlide = 0;

    function autoNextImage() {
        bannerImages[imageSlide].classList.remove('active');
        imageSlide = (imageSlide + 1) % bannerImages.length;
        bannerImages[imageSlide].classList.add('active');
    }
    // Munculkan gambar
    bannerImages[0].classList.add('active');
    // Ganti gambar setiap 4dtk
    setInterval(autoNextImage, 4000);

    // Form dan table
    const form = document.getElementById('contactForm');
    const table = document.getElementById('submittedData').getElementsByTagName('tbody')[0];
    const editButton = document.getElementById('editButton');
    const deleteButton = document.getElementById('deleteButton');
    const selectAllCheckbox = document.getElementById('selectAll');

    // Form Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
        
        /*
        const sayNama = document.getElementById('hai_nama');
        sayNama.innerHTML = nama; */

        // Add data to table
        hasilFormulir(nama, tanggalLahir, jenisKelamin, pesan);

        // Clear form
        form.reset();
    });
    
    window.addEventListener('load', () => {
    // Popup saat halaman selesai dimuat
    const welcomePopup = document.getElementById('welcome-popup');
    const overlay = document.getElementById('overlay');
    const divMain = document.querySelector('.main-content');
    const mainHeader = document.querySelector('.main-header');
    const sayNama = document.getElementById('hai_nama');
    //check local storage
    const storedName = localStorage.getItem('welcomeName');

    if (storedName) {
        sayNama.textContent = storedName;
        welcomePopup.style.display = 'none';
        overlay.style.display = 'none';
        divMain.style.display = 'grid';
        mainHeader.style.display = 'flex';
    } else {
        welcomePopup.style.display = 'block';
        overlay.style.display = 'block';
        divMain.style.display = 'none';
        mainHeader.style.display = 'none';
    }

    // Pengiriman formulir
    const welcomeForm = document.getElementById('welcome-form');
    welcomeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const welcomeName = document.getElementById('welcome_name').value;

        if (welcomeName) {
            localStorage.setItem('welcomeName', welcomeName);

            sayNama.textContent = welcomeName;

            welcomePopup.style.display = 'none';
            overlay.style.display = 'none';
            divMain.style.display = 'grid';
            mainHeader.style.display = 'flex';
        }
    });
});

const editNama = document.getElementById('editName');
    editNama.addEventListener('click', () => {
      const welcomePopup = document.getElementById('welcome-popup');
    const overlay = document.getElementById('overlay');
    const divMain = document.querySelector('.main-content');
    const mainHeader = document.querySelector('.main-header');
    welcomePopup.style.display = 'block';
    overlay.style.display = 'block';
    divMain.style.display = 'none';
    mainHeader.style.display = 'none';
    
    // Pengiriman formulir
    const welcomeForm = document.getElementById('welcome-form');
    welcomeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const welcomeName = document.getElementById('welcome_name').value;
        const sayNama = document.getElementById('hai_nama');
        sayNama.textContent = welcomeName;

        // Sembunyikan popup setelah submit
        welcomePopup.style.display = 'none';
        overlay.style.display = 'none';
        divMain.style.display = 'grid';
        mainHeader.style.display = 'flex';
    });
});

    // Table hasil
    function hasilFormulir(nama, tanggalLahir, jenisKelamin, pesan) {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td><input type="checkbox" class="row-checkbox"></td>
            <td>${nama}</td>
            <td>${tanggalLahir}</td>
            <td>${jenisKelamin}</td>
            <td>${pesan}</td>
        `;
        cekCheckBox(newRow.querySelector('.row-checkbox'));
    }

    // Checkbox
    function cekCheckBox(checkbox) {
        checkbox.addEventListener('change', upBtn);
    }

    selectAllCheckbox.addEventListener('change', function() {
        const checkboxes = table.querySelectorAll('.row-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = this.checked;
        });
        upBtn();
    });

    // Update btn
    function upBtn() {
        const checkedBoxes = table.querySelectorAll('.row-checkbox:checked');
        editButton.disabled = checkedBoxes.length !== 1;
        deleteButton.disabled = checkedBoxes.length === 0;
    }

    // Edit button functionality
    editButton.addEventListener('click', function() {
        const checkedRow = table.querySelector('.row-checkbox:checked').closest('tr');
        const cells = checkedRow.cells;

        document.getElementById('nama').value = cells[1].textContent;
        document.getElementById('tanggalLahir').value = cells[2].textContent;
        document.querySelector(`input[name="jenisKelamin"][value="${cells[3].textContent}"]`).checked = true;
        document.getElementById('pesan').value = cells[4].textContent;

        // Remove the edited row
        checkedRow.remove();
        upBtn();
    });

    // Delete button functionality
    deleteButton.addEventListener('click', function() {
        const checkedBoxes = table.querySelectorAll('.row-checkbox:checked');
        checkedBoxes.forEach(cb => {
            cb.closest('tr').remove();
        });
        selectAllCheckbox.checked = false;
        upBtn();
    });


//  Sosmed platform anim
const socialMedia = document.querySelector('.socialMedia');
const platforms = ['Instagram', 'Telegram', 'Github'];
let iMedsos = 0;

function changeText() {
  
  socialMedia.classList.add('slide-up-out');

  setTimeout(() => {
    iMedsos = (iMedsos + 1) % platforms.length;
    socialMedia.textContent = platforms[iMedsos];
    
    socialMedia.classList.remove('slide-up-out');
    socialMedia.classList.add('slide-up-in');
  }, 500);
  
  setTimeout(() => {
    socialMedia.classList.remove('slide-up-in');
  }, 1000);
}

// Ulangi setiap 3 detik
setInterval(changeText, 2400);



// bottom-navigation
   const bottomNav = document.querySelector('.bottom-nav');
   
   const atapFooter = document.getElementById('my-footer')
const linksMe = document.querySelector('.links');

const header = document.querySelector('.main-header');
  const topNav = document.getElementById('top_nav');
  
  const fMedsos = document.querySelector('.followMe');


// scroll listener
window.addEventListener('scroll', () => {
  const linkFooterTop = linksMe.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  const checkAtapFooter = atapFooter.getBoundingClientRect().top;
  
  if (checkAtapFooter <= windowHeight) {
    setTimeout(() => {
      fMedsos.classList.remove('slide-up', 'hidden');
    fMedsos.classList.add('slide-down'); 
    fMedsos.style.display = 'flex';
    }, 1000);
  } else {
    
    fMedsos.classList.remove('slide-down'); 
    fMedsos.classList.add('slide-up');
    
    setTimeout(() => {
      fMedsos.classList.add('hidden');
    }, 500);
  }

  if (header.getBoundingClientRect().bottom < 0) {
    topNav.style.display = 'none';
    if (linkFooterTop <= windowHeight) {
    //bottomNav.style.bottom = (windowHeight - linkFooterTop) + 'px';
    bottomNav.style.display = 'none';
    
  } else {
    //bottomNav.style.top = '0';
    bottomNav.style.display = 'flex';
    
  }
  } else {
    topNav.style.display = 'flex';
    bottomNav.style.display = 'none';
  }
  
});



  
 fetch('assets/ig-icon.svg')
  .then(response => response.text())
  .then(svgContent => {
    const instagramLink = document.getElementById('instagram-link');
    instagramLink.innerHTML = svgContent;
  });

  fetch('assets/tg-icon.svg')
  .then(response => response.text())
  .then(svgContent => {
    const twitterLink = document.getElementById('telegram-link');
    twitterLink.innerHTML = svgContent;
  });
  
    fetch('assets/github-icon.svg')
  .then(response => response.text())
  .then(svgContent => {
    const facebookLink = document.getElementById('github-link');
    facebookLink.innerHTML = svgContent;
  });
  
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
