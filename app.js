var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,

    
})


function changeLan(lang) {
    var description = document.querySelector("#about_faculty > p");
    var header = document.querySelector("#about_faculty > h2")
    if (lang == "turkish") {
        description.innerHTML = turkishDes;
        header.innerHTML = turkishHeader;
    }
    else {
        description.innerHTML = englishDes;
        header.innerHTML = englishHeader;
    }
}


var turkishHeader = "Fen Fak&#252;ltesi Hakk&#305;nda";
var turkishDes = 
    `Uluslararas&#305; &#246;l&#231;ekte &#252;st d&#252;zeyde e&#287;itim ve ara&#351;t&#305;rma &#231;al&#305;&#351;malar&#305;n&#305;n y&#252;r&#252;t&#252;ld&#252;&#287;&#252; Fen 
            Fak&#252;ltesi, Fizik, Kimya, Matematik
            ile Molek&#252;ler Biyoloji ve Genetik B&#246;l&#252;mleri &#252;lkemizde en yetenekli ve en iyi 
            yeti&#351;mi&#351; &#246;&#287;rencilerin ilgisini &#231;ekmektedir.

            <br>
            <br>

            Fen Fak&#252;ltesi, bilimin s&#305;n&#305;rlar&#305;nda yap&#305;lan ara&#351;t&#305;rmalar ve g&#252;&#231;l&#252; laboratuvar olanaklar&#305; ile temel bilimlere evrensel
            standartlarda &#246;nemli katk&#305;larda bulunmakta, yabanc&#305; ara&#351;t&#305;rma merkezleri ile yo&#287;un bilimsel ili&#351;kilerini s&#252;rd&#252;rmektedir.
            Fak&#252;lte bu i&#351;levini tan&#305;nm&#305;&#351; T&#252;rk ve yabanc&#305; bilim adamlar&#305; ve titizlikle se&#231;ilmi&#351; &#246;&#287;encilerle ger&#231;ekle&#351;tirmektedir. Bu
            ara&#351;t&#305;rmac&#305;lar&#305;m&#305;z k&#305;sa s&#252;rede ortaya &#231;&#305;kard&#305;klar&#305; &#246;zg&#252;n bilimsel ara&#351;t&#305;rma ve yay&#305;nlar&#305; ile de &#252;lkemizde temel
            bilimlerin geli&#351;ip ileri bir d&#252;zeye ula&#351;mas&#305;na &#246;nderlik etmektedir.

            <br>
            <br>

            Fen Fak&#252;ltesi'nin Fizik, Kimya, Matematik ile Molek&#252;ler Biyoloji ve Genetik B&#246;l&#252;mleri'nde lisans, y&#252;ksek lisans ve
            doktora programlar&#305; uygulanmaktad&#305;r. Lisans programlar&#305; &#246;&#287;rencilerin t&#252;m&#252;n&#252; y&#252;ksek lisans ve doktora programlar&#305;na
            haz&#305;rlayacak &#351;ekilde d&#252;zenlenmi&#351;tir. &#304;leri d&#252;zeydeki dersler modern laboratuvar ve bilgisayar olanaklar&#305; ile
            desteklenmektedir.

            <br>
            <br>
            <a href="javascript:void(0);" style="text-decoration:none;" onclick="changeLan('english')">English</a>`


var englishHeader = "About The Faculty of Science";
var englishDes = 
    `The Departments of Chemistry, Mathematics, Molecular Biology and Genetics, and Physics offer both graduate and
    undergraduate programs leading to B.S., M.S. and Ph.D. degrees. In addition, the Faculty contributes to
    interdisciplinary graduate programs that offer M.S. and Ph.D. degrees in the areas of Materials Science and
    Nanotechnology and Neuroscience.
    <br>
    <br>

    At the undergraduate level, the Faculty admits a small number of highly qualified students to each program. The
    undergraduate curricula 15are designed to prepare the students for graduate study by providing a strong background in the
    general area of study with further opportunities of developing a deeper knowledge in various areas of emphasis.
    
    <br>
    <br>

    The graduate programs aim to develop students into scientists who can pursue original and creative research. Graduate
    education in the Faculty is an inseparable part of the research activity which aims to produce significant scientific
    output at the international level.
    
    <br>

    The faculty also offers a number of service courses to students from other faculties.

    <br>
    <br>
    <a href="javascript:void(0);" style="text-decoration:none;" onclick="changeLan('turkish')">T&#252;rk&#231;e</a>`