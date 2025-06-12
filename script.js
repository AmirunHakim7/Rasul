const rasuls = [
    {
        id: 1,
        name: "Nabi Adam A.S.",
        period: "Manusia pertama",
        place: "Diturunkan ke bumi",
        mention: "Disebut 25 kali dalam Al-Quran",
        description: "Nabi Adam adalah manusia pertama yang diciptakan Allah. Beliau diutus untuk mengajarkan manusia tentang tauhid dan kehidupan di bumi setelah diturunkan dari syurga akibat memakan buah khuldi.",
        icon: "A"
    },
    {
        id: 2,
        name: "Nabi Idris A.S.",
        period: "Zaman kuno",
        place: "Dikatakan di Mesir (tidak pasti)",
        mention: "Disebut 2 kali dalam Al-Quran",
        description: "Nabi Idris terkenal dengan kebijaksanaan dan pengetahuannya yang luas. Beliau adalah orang pertama yang menulis dengan pena dan menjahit pakaian. Tempat tinggal disebut dalam riwayat, namun tiada kepastian sahih.",
        icon: "I"
    },
    {
        id: 3,
        name: "Nabi Nuh A.S.",
        period: "950 tahun berdakwah",
        place: "Iraq",
        mention: "Disebut 43 kali dalam Al-Quran",
        description: "Nabi Nuh diutus kepada kaumnya yang menyembah berhala. Beliau membina bahtera besar atas perintah Allah untuk menyelamatkan orang beriman dari banjir besar yang menenggelamkan bumi.",
        icon: "N"
    },
    {
        id: 4,
        name: "Nabi Hud A.S.",
        period: "Zaman kuno",
        place: "Al-Ahqaf, Yaman",
        mention: "Disebut 7 kali dalam Al-Quran",
        description: "Nabi Hud diutus kepada kaum 'Ad yang terkenal dengan kekuatan fizikal. Mereka dihancurkan dengan angin kencang selama tujuh malam lapan hari kerana engkar.",
        icon: "H"
    },
    {
        id: 5,
        name: "Nabi Soleh A.S.",
        period: "Zaman kuno",
        place: "Al-Hijr, Arab Utara",
        mention: "Disebut 9 kali dalam Al-Quran",
        description: "Nabi Soleh diutus kepada kaum Thamud. Mukjizatnya adalah unta betina yang keluar dari batu. Kaum Thamud dibinasakan kerana membunuh unta tersebut.",
        icon: "S"
    },
    {
        id: 6,
        name: "Nabi Ibrahim A.S.",
        period: "Bapa para Nabi",
        place: "Iraq, Palestin",
        mention: "Disebut 69 kali dalam Al-Quran",
        description: "Nabi Ibrahim terkenal sebagai bapa monoteisme. Beliau diuji dengan perintah menyembelih anaknya Ismail, tetapi digantikan dengan kibas. Mendirikan Kaabah bersama anaknya Ismail.",
        icon: "I"
    },
    {
        id: 7,
        name: "Nabi Lut A.S.",
        period: "Zaman Nabi Ibrahim",
        place: "Sodom (Laut Mati)",
        mention: "Disebut 27 kali dalam Al-Quran",
        description: "Nabi Lut diutus kepada kaum Sodom yang melakukan homoseksual. Kaumnya dihancurkan dengan gempa dan hujan batu. Isterinya tidak diselamatkan kerana ingkar.",
        icon: "L"
    },
    {
        id: 8,
        name: "Nabi Ismail A.S.",
        period: "Zaman Nabi Ibrahim",
        place: "Mekah",
        mention: "Disebut 12 kali dalam Al-Quran",
        description: "Anak Nabi Ibrahim yang membantu membina Kaabah. Disebut dalam kisah penyembelihan. Keturunannya melahirkan bangsa Arab dan akhirnya Nabi Muhammad SAW.",
        icon: "I"
    },
    {
        id: 9,
        name: "Nabi Ishak A.S.",
        period: "Zaman Nabi Ibrahim",
        place: "Palestin",
        mention: "Disebut 17 kali dalam Al-Quran",
        description: "Anak Nabi Ibrahim dari Sarah. Ayah kepada Nabi Yaakub. Keturunannya melahirkan Bani Israel.",
        icon: "I"
    },
    {
        id: 10,
        name: "Nabi Yaakub A.S.",
        period: "Zaman Nabi Ishak",
        place: "Palestin, kemudian Mesir",
        mention: "Disebut 16 kali dalam Al-Quran",
        description: "Anak Nabi Ishak, ayah kepada 12 anak lelaki yang menjadi asal Bani Israel. Dikenali juga sebagai Israel. Kisahnya berkait rapat dengan Nabi Yusuf.",
        icon: "Y"
    },
    {
        id: 11,
        name: "Nabi Yusuf A.S.",
        period: "Zaman Nabi Yaakub",
        place: "Mesir",
        mention: "Disebut 27 kali dalam Al-Quran",
        description: "Dikenali dengan ketampanannya. Mampu mentafsirkan mimpi. Dari dianiaya saudaranya hingga menjadi pembesar Mesir. Surah Yusuf meriwayatkan kisahnya dengan indah.",
        icon: "Y"
    },
    {
        id: 12,
        name: "Nabi Ayub A.S.",
        period: "Zaman kuno",
        place: "Syam",
        mention: "Disebut 4 kali dalam Al-Quran",
        description: "Diuji dengan penyakit dan kehilangan harta. Namun, sabar dan redha menjadi ciri utamanya. Disembuhkan oleh Allah setelah bertahun menderita.",
        icon: "A"
    },
    {
        id: 13,
        name: "Nabi Syu'aib A.S.",
        period: "Zaman kuno",
        place: "Madyan",
        mention: "Disebut 11 kali dalam Al-Quran",
        description: "Diutus kepada kaum Madyan yang menipu dalam timbangan. Azab gempa dan petir menimpa mereka kerana tidak menghiraukan dakwahnya.",
        icon: "S"
    },
    {
        id: 14,
        name: "Nabi Musa A.S.",
        period: "1450 SM",
        place: "Mesir",
        mention: "Disebut 136 kali dalam Al-Quran",
        description: "Paling banyak disebut dalam Al-Quran. Diutus kepada Firaun dan Bani Israel. Membelah laut, menerima Taurat dan berbicara dengan Allah di Bukit Sinai.",
        icon: "M"
    },
    {
        id: 15,
        name: "Nabi Harun A.S.",
        period: "Zaman Nabi Musa",
        place: "Mesir, Sinai",
        mention: "Disebut 20 kali dalam Al-Quran",
        description: "Saudara Musa yang fasih berbicara. Membantu Musa menghadapi Firaun dan Bani Israel.",
        icon: "H"
    },
    {
        id: 16,
        name: "Nabi Zulkifli A.S.",
        period: "Zaman kuno",
        place: "Syam",
        mention: "Disebut 2 kali dalam Al-Quran",
        description: "Dikenal sebagai seorang yang sabar, taat dan adil. Tidak banyak kisah disebut tentangnya, namun Allah memuji kesabarannya.",
        icon: "Z"
    },
    {
        id: 17,
        name: "Nabi Daud A.S.",
        period: "1010-970 SM",
        place: "Palestin",
        mention: "Disebut 16 kali dalam Al-Quran",
        description: "Raja dan Nabi yang menerima kitab Zabur. Mengalahkan Jalut, memiliki suara merdu dan bijak memutuskan hukum.",
        icon: "D"
    },
    {
        id: 18,
        name: "Nabi Sulaiman A.S.",
        period: "970-931 SM",
        place: "Palestin",
        mention: "Disebut 17 kali dalam Al-Quran",
        description: "Anak Nabi Daud. Diberi kerajaan besar, memahami bahasa haiwan dan mengawal jin. Memerintah dengan adil dan bijaksana.",
        icon: "S"
    },
    {
        id: 19,
        name: "Nabi Ilyas A.S.",
        period: "Zaman kuno",
        place: "Lebanon",
        mention: "Disebut 3 kali dalam Al-Quran",
        description: "Diutus kepada kaum yang menyembah berhala Ba’al. Doanya menyebabkan kemarau sebagai azab kepada mereka.",
        icon: "I"
    },
    {
        id: 20,
        name: "Nabi Ilyasa A.S.",
        period: "Zaman Nabi Ilyas",
        place: "Jordan",
        mention: "Disebut 2 kali dalam Al-Quran",
        description: "Pengganti Nabi Ilyas. Tidak banyak kisah disebut, namun disebut sebagai hamba yang soleh dan mulia.",
        icon: "E"
    },
    {
        id: 21,
        name: "Nabi Yunus A.S.",
        period: "Zaman kuno",
        place: "Ninawa, Iraq",
        mention: "Disebut 4 kali dalam Al-Quran",
        description: "Meninggalkan kaumnya lalu ditelan ikan besar. Setelah bertaubat, Allah mengampuni dan menyelamatkannya.",
        icon: "Y"
    },
    {
        id: 22,
        name: "Nabi Zakaria A.S.",
        period: "Sebelum Nabi Isa",
        place: "Palestin",
        mention: "Disebut 7 kali dalam Al-Quran",
        description: "Bapa Nabi Yahya. Berdoa kepada Allah untuk mendapat anak di usia tua. Riwayat wafatnya disebut dalam Israiliyyat.",
        icon: "Z"
    },
    {
        id: 23,
        name: "Nabi Yahya A.S.",
        period: "Zaman Nabi Zakaria",
        place: "Palestin",
        mention: "Disebut 5 kali dalam Al-Quran",
        description: "Dilahirkan secara ajaib. Seorang yang suci dan zuhud. Dibunuh oleh penguasa zalim menurut beberapa riwayat bukan sahih.",
        icon: "Y"
    },
    {
        id: 24,
        name: "Nabi Isa A.S.",
        period: "0-33 M",
        place: "Palestin",
        mention: "Disebut 25 kali dalam Al-Quran",
        description: "Dilahirkan tanpa bapa. Menerima kitab Injil. Mukjizat: berbicara ketika bayi, menyembuhkan penyakit, menghidupkan orang mati dengan izin Allah. Diangkat ke langit dan akan kembali sebelum kiamat.",
        icon: "I"
    },
    {
        id: 25,
        name: "Nabi Muhammad S.A.W.",
        period: "571-632 M",
        place: "Mekah & Madinah",
        mention: "Disebut 4 kali dalam Al-Quran",
        description: "Nabi terakhir dan penutup para Nabi. Menerima wahyu Al-Quran. Menyebarkan Islam ke seluruh Jazirah Arab. Wafat pada usia 63 tahun di Madinah.",
        icon: "M"
    }
];


let currentRasulId = 1;

// Fungsi untuk memaparkan senarai rasul dalam grid 5x5
function displayRasuls(rasulArray = rasuls) {
    const gridContainer = document.getElementById('rasulGrid');
    gridContainer.innerHTML = '';
    
    rasulArray.forEach(rasul => {
        const card = document.createElement('div');
        card.className = 'rasul-card';
        card.innerHTML = `
            <div class="number">${rasul.id}</div>
            <div class="rasul-icon">${rasul.icon}</div>
            <div class="rasul-info">
                <h3>${rasul.name}</h3>
                <p>${rasul.name.split(' ').slice(1).join(' ')}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            currentRasulId = rasul.id;
            showRasulDetail(rasul.id);
        });
        gridContainer.appendChild(card);
    });
}

// Fungsi untuk memaparkan detail rasul
function showRasulDetail(rasulId) {
    const rasul = rasuls.find(r => r.id === rasulId);
    const detailContainer = document.getElementById('detailContainer');
    const rasulGrid = document.getElementById('rasulGrid');
    
    if (rasul) {
        currentRasulId = rasulId;
        
        document.getElementById('detailImg').textContent = rasul.icon;
        document.getElementById('detailName').textContent = rasul.name;
        document.getElementById('detailPeriod').textContent = `Period: ${rasul.period}`;
        document.getElementById('detailPlace').textContent = `Tempat: ${rasul.place}`;
        document.getElementById('detailMention').textContent = rasul.mention;
        document.getElementById('detailDescription').textContent = rasul.description;
        
        // Update navigation buttons state
        document.getElementById('prevButton').disabled = rasulId === 1;
        document.getElementById('nextButton').disabled = rasulId === rasul.length;
        
        rasulGrid.style.display = 'none';
        detailContainer.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Fungsi untuk mencari rasul
function searchRasul() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredRasuls = rasuls.filter(rasul => 
        rasul.name.toLowerCase().includes(searchTerm) ||
        rasul.place.toLowerCase().includes(searchTerm) ||
        rasul.period.toLowerCase().includes(searchTerm)
    );
    
    displayRasuls(filteredRasuls);
}

// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayRasuls();
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', searchRasul);
    
    // Back button
    document.getElementById('backButton').addEventListener('click', () => {
        document.getElementById('detailContainer').style.display = 'none';
        document.getElementById('rasulGrid').style.display = 'grid';
        document.getElementById('searchInput').value = '';
        displayRasuls();
    });
    
    // Navigation buttons
    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentRasulId > 1) {
            showRasulDetail(currentRasulId - 1);
        }
    });
    
    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentRasulId < rasuls.length) {
            showRasulDetail(currentRasulId + 1);
        }
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Optimasi untuk mobile - hapus hover effect pada perangkat touch
    if ('ontouchstart' in window) {
        document.querySelectorAll('.rasul-card').forEach(card => {
            card.classList.add('no-hover');
        });
    }
});