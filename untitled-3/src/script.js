// Her masalda başlık, kategori, tanıtım ve dört paragraf bulunur.
const masallar = [
  {
    ad: "Keloğlan ve Sihirli Taş", tur: "Keloğlan",
    ozet: "Bir iyiliğin ardından gelen beklenmedik bir armağan.",
    metin: [
      "Bir varmış, bir yokmuş. Keloğlan, annesiyle küçük bir köyde yaşarmış. Bir gün odun toplamaya giderken yol kenarında dinlenen yaşlı bir adama rastlamış. Yanındaki ekmeği çıkarıp onunla paylaşmış.",
      "Yaşlı adam ona parlak bir taş vermiş. “Bu taş, ihtiyacı olan için dilekte bulunursan parlar,” demiş. Keloğlan eve dönüp annesi için sıcak bir çorba dilemiş. Bir anda ocakta bir tencere belirmiş.",
      "Haberi duyan varlıklı bir komşu taşı ödünç almış. Odalar dolusu altın istemiş; fakat taşın ışığı sönmüş. Komşu onu işe yaramaz diye Keloğlan’a geri vermiş.",
      "Keloğlan taşla köyün meydanına gitmiş. Kış için yiyeceği kalmayan komşularını düşünerek dilekte bulunmuş. Meydanda çuvallar dolusu un belirmiş. O gün köylüler ekmeklerini birlikte pişirmiş; Keloğlan da taşı küçük bir kesede saklamış."
    ]
  },
  {
    ad: "Keloğlan ve Dev", tur: "Keloğlan",
    ozet: "Bir köy yolunda güç ile zekânın karşılaşması.",
    metin: [
      "Bir varmış, bir yokmuş. Köyün değirmenine giden yolu bir dev kapatmış. Geçmek isteyenlerden bir çuval un istermiş. Köylüler çare ararken Keloğlan ortaya çıkmış.",
      "Cebine bir parça taze peynir koyup devin yanına gitmiş. “Ben taşı sıkar, suyunu çıkarırım,” demiş. Avucundaki peyniri taşmış gibi gösterip sıkmış. Parmaklarından su damlayınca dev şaşkına dönmüş.",
      "Dev yarışmak istemiş. Keloğlan, değirmendeki un çuvallarını köye taşıma yarışı önermiş. Dev bütün çuvalları yüklenmiş. Keloğlan da yol boyunca geride kalanları saymış, köylülerin kapılarını göstermiş.",
      "İş bitince köylüler deve yemek ikram etmiş. Keloğlan, “Yolu kapatacağına değirmende çalışsan her gün böyle karşılanırsın,” demiş. Dev bu fikri beğenmiş. Ertesi sabah yol açılmış; değirmenin de yeni bir çalışanı olmuş."
    ]
  },
  {
    ad: "Sabır Taşı", tur: "Sihirli masallar",
    ozet: "Bir taşın dinlediği sözler ve cesaretle gelen değişim.",
    metin: [
      "Bir varmış, bir yokmuş. Uzak bir şehirde, derdini anlatmaya fırsat bulamayan genç bir kız yaşarmış. Herkes ondan bir iş ister, fakat söylediklerini dinlemek için durmazmış.",
      "Bir gün pazarda yaşlı bir satıcı ona mor bir taş vermiş. “İçinde tuttuklarını buna anlat,” demiş. Kız her akşam pencere önüne oturup yaşadıklarını taşa anlatmış. Taş, her gece biraz daha ağırlaşmış.",
      "Bir akşam taşın üstünde ince bir çatlak belirmiş. Kız ona bakıp “Artık yalnız sana anlatmak istemiyorum,” demiş. Bu sözün ardından taş iki parçaya ayrılmış. Ortasından küçücük bir tohum çıkmış.",
      "Kız tohumu avluya ekmiş. Sonra evdekileri çağırıp sözünü bitirene kadar dinlemelerini istemiş. Bu kez herkes durmuş. Tohum büyüyüp ağaç olurken kız da kendi sözünü söylemeyi öğrenmiş."
    ]
  },
  {
    ad: "Altın Bülbül", tur: "Sihirli masallar",
    ozet: "Altın bir kuşun şarkısını arayan genç bir yolcu.",
    metin: [
      "Bir varmış, bir yokmuş. Bir sarayın bahçesinde altın renkli elmalar yetişirmiş. Her gece bir elma kaybolunca bahçıvanın oğlu nöbet tutmaya karar vermiş.",
      "Ay yükseldiğinde dallara altın bir bülbül konmuş. Delikanlı kuşa uzanmış ama elinde yalnızca bir tüy kalmış. Bülbülün sesini duyan padişah, onu bulup getirmesini istemiş.",
      "Delikanlı dağları aşmış, yol üzerinde yaralı bir tilkiye yardım etmiş. Tilki ona kuşun yaşadığı bahçeyi göstermiş. Delikanlı bülbülü bulmuş, sade bir kafese yerleştirip saraya götürmüş.",
      "Fakat bülbül sarayda hiç ötmemiş. Delikanlı sonunda kafesin kapağını açmış. Kuş elma ağacına uçup şarkısını söylemiş. Padişah da bahçeyi onun yuvası olarak bırakmış. Bülbül dilediği zaman gelmiş, dilediği zaman gitmiş."
    ]
  },
  {
    ad: "Sihirli Sofra", tur: "Sihirli masallar",
    ozet: "Paylaşıldıkça bereketlenen bir sofranın hikâyesi.",
    metin: [
      "Bir varmış, bir yokmuş. Küçük bir köyde konuksever bir değirmenci yaşarmış. Yağmurlu bir akşam kapısını çalan yolcuyu içeri almış ve son çorbasını onunla paylaşmış.",
      "Yolcu sabah giderken bir sofra örtüsü bırakmış. “Bunu ser ve birini yemeğe çağır,” demiş. Değirmenci komşusunu çağırıp örtüyü açınca üstünde sıcak ekmekler belirmiş.",
      "Köye kuraklık geldiğinde değirmenci sofrayı meydana kurmuş. Herkes karnını doyurmuş. Varlıklı bir adam örtüyü gizlice evine götürmüş; fakat tek başına oturunca sofra boş kalmış.",
      "Adam örtüyü geri getirip yaptığını anlatmış. Değirmenci ona da yer açmış. Köylüler bir araya gelince sofra yeniden dolmuş. O günden sonra meydandaki uzun masada her misafir için boş bir yer bırakılmış."
    ]
  },
  {
    ad: "İnatçı Keçi", tur: "Hayvan masalları",
    ozet: "Dar bir köprüde yol vermeyi öğrenen iki keçi.",
    metin: [
      "Bir varmış, bir yokmuş. Gürül gürül akan bir derenin üstünde dar bir köprü varmış. Bir sabah iki keçi köprünün iki ucuna aynı anda gelmiş.",
      "Ortada karşılaşınca ikisi de durmamış. “Önce ben geçeceğim,” demiş biri. “Ben geri dönmem,” diye karşılık vermiş öteki. Boynuzlarını dayayıp birbirlerini itmişler.",
      "Tahtalar gıcırdayınca ikisi de aşağıya bakmış. Bir adım daha atarlarsa dereye düşeceklerini anlamışlar. Küçük keçi, “Ben çömeleyim, sen dikkatlice yanımdan geç,” demiş.",
      "Öyle de yapmışlar. Önce biri, ardından diğeri karşı kıyıya ulaşmış. Akşam aynı yolda karşılaşınca bu kez uzaktan birbirlerini beklemişler. Köprü yine darmış ama geçmek artık çok kolaymış."
    ]
  },
  {
    ad: "Kurnaz Tilki", tur: "Hayvan masalları",
    ozet: "Tatlı sözlerin ardındaki niyeti fark eden bir karga.",
    metin: [
      "Bir varmış, bir yokmuş. Aç bir tilki ormanda dolaşırken dalda oturan bir karga görmüş. Karganın gagasında bir parça peynir varmış.",
      "Tilki ağacın altına oturmuş. “Ne güzel tüylerin var! Sesin de böyle güzelse ormanın en iyi şarkıcısı sensindir,” demiş. Karga bu sözleri duyunca şarkı söylemek için gagasını açmış.",
      "Peynir yere düşmüş, tilki de hemen kapmış. Karga üzülmüş ama tilkinin sözlerini unutmamış. Ertesi gün aynı dala konmuş; bu kez gagasında küçük bir kozalak varmış.",
      "Tilki yeniden onu övmeye başlamış. Karga kozalağı bırakınca tilki peynir sanıp üzerine atılmış. Sonra başını kaldırmış. Karga, “Artık neden şarkı söylememi istediğini biliyorum,” demiş. Tilki o gün eli boş dönmüş."
    ]
  },
  {
    ad: "Açıl Sofram Açıl", tur: "Sihirli masallar",
    ozet: "Kaybolan sihirli bir armağanın peşinde bir yolculuk.",
    metin: [
      "Bir varmış, bir yokmuş. Yoksul bir oduncu ormanda dallara takılan bir kuşu kurtarmış. Kuş uçunca karşısında bir peri belirmiş ve ona katlanmış bir örtü vermiş.",
      "“Açıl sofram açıl dersen önüne yemekler gelir,” demiş peri. Oduncu dönüşte bir handa kalmış. Örtüyü serip yolcuları yemeğe çağırmış. Gece herkes uyurken hancı örtüyü bir benzeriyle değiştirmiş.",
      "Oduncu eve varınca örtünün çalışmadığını görmüş. Hana dönmüş ve önceki akşam birlikte yemek yediği yolculara olanları anlatmış. Onlar da gördükleri sihirli sofrayı hatırlamış.",
      "Hancı yaptığını daha fazla saklayamamış; örtüyü geri getirmiş. Oduncu “Açıl sofram açıl!” deyince masa yemeklerle dolmuş. O da yeniden herkesi sofraya çağırmış. Sonrasında armağanına dikkat etmiş, paylaşmaktan ise vazgeçmemiş."
    ]
  }
];

// Sayfadaki alanları seçme
const kartlar = document.getElementById("kartlar");
const arama = document.getElementById("arama");
const kategori = document.getElementById("kategori");
const pencere = document.getElementById("pencere");
const metin = document.getElementById("masalMetni");
let boyut = 19;

// Arama ve kategoriye göre masalları listeleme
function listele() {
  kartlar.replaceChildren();
  const aranan = arama.value.trim().toLocaleLowerCase("tr");
  let bulunan = 0;
  masallar.forEach(function(masal, sira) {
    const isimUyuyor = masal.ad.toLocaleLowerCase("tr").includes(aranan);
    const turUyuyor = kategori.value === "hepsi" || kategori.value === masal.tur;
    if (!isimUyuyor || !turUyuyor) return;
    bulunan++;
    const kart = document.createElement("article");
    kart.className = "kart";
    kart.innerHTML = `
      <div class="kart-ust">
        <span class="numara">${String(sira + 1).padStart(2, "0")}</span>
        <span class="kategori-etiket">${masal.tur}</span>
      </div>
      <h3>${masal.ad}</h3>
      <p>${masal.ozet}</p>
      <button class="oku" aria-label="${masal.ad} masalını oku">Masalı oku →</button>`;
    kart.querySelector("button").onclick = function() { masalAc(masal); };
    kartlar.appendChild(kart);
  });
  document.getElementById("sonuc").textContent =
    bulunan ? bulunan + " masal listeleniyor." : "Uygun masal bulunamadı.";
}

// Seçilen masalı okuma penceresinde açma
function masalAc(masal) {
  document.getElementById("masalBasligi").textContent = masal.ad;
  metin.replaceChildren();
  masal.metin.forEach(function(paragraf) {
    const p = document.createElement("p");
    p.textContent = paragraf;
    metin.appendChild(p);
  });
  pencere.showModal();
  pencere.scrollTop = 0;
}

// Arama, kapatma ve yazı boyutu düğmeleri
arama.addEventListener("input", listele);
kategori.addEventListener("change", listele);
document.getElementById("kapat").onclick = function() { pencere.close(); };
document.getElementById("buyut").onclick = function() {
  boyut = Math.min(boyut + 2, 29);
  metin.style.fontSize = boyut + "px";
};
document.getElementById("kucult").onclick = function() {
  boyut = Math.max(boyut - 2, 15);
  metin.style.fontSize = boyut + "px";
};
listele();