/*EKRANA YAZDIRMA*/

/*document.write() kullanımı*/
document.write("Merhaba JavaScript");

/*alert() kullanımı*/
alert("Merhaba JavaScript");

/*console.log() kullanımı*/
console.log("Merhaba JavaScript");


/*YAZIM KURALLARI*/

var a, b, c;
a = 5;
b = 6;
c = a + b;

/*JavaScript kodları değişkenler, operatörler, deyimler, anahtar kelimeler ve yorumlardan oluşur.
JavaScript sabit değerler ve değişken değerler olmak üzere iki farklı değer türü yazılabilir.*/


/*Sabit değerler*/


/*Sabit değerler herhangi bir değişkende saklanmadan yazılan değerlerdir.
Sabit değerli rakamlar herhangi bir tırnak işareti eklenmeden yazılır.*/


/*Örnek : 14.53, 1453*/


alert(14.53);


/*Sabit değerli metinler tek veya çift tırnak arasında yazılır.*/


/*"Merhaba JavaScript", 'Merhaba JavaScript'*/


alert("Merhaba JavaScript");


/*Değişken değerler*/


/*Programlama dillerinde değişkenler veri depolamak için kullanılır.
JavaScript değişken tanımlamak için "var" anahtar kelimesi kullanılır.*/


/*Örnekte x değişken olarak tanımlanmış ve daha sonra x değişkenine 1453 değeri atanmıştır.*/

var x;
x = 1453;

/*Operatörler*/

/*JavaScript ile hesaplama işlemleri için aritmetik operatörler kullanılır.*/

var x;
x = (5 + 1) * 10;
alert(x);

/*Deyimler*/

/*JavaScript deyimleri değerler, değişkenler ve operatörlerle yeni bir değer üretilmesidir.
Örneğin iki değerin çarpımı ile yeni bir değer elde edilmiştir.*/

alert(5 * 10);

/*Deyimler değişken değer alabilir.*/

var x;
x = 5;
alert(x * 10);

//Deyimler metin türünde değer alabilir.

alert("Merhaba" + " " + "Dünya");

/*Anahtar kelimeler*/

/*JavaScript anahtar kelimeler talimat vermek için kullanılır.
JavaScript var anahtar kelimesi tarayıcıya yeni değişken oluşturma talimatı verir.*/

var a, b, c;
a = 5;
b = 6;
c = a + b;
alert(c);

/*Yorumlar*/

/*Tüm JavaScript kodları tarayıcı tarafından işlenmez.
Çift eğik çizgi // sonrası, /* arası */ 
/*tarayıcı tarafından yorum kodu olarak ele alınır.*/

var x;
x = 5;
// alert(x * 10);

//Yorumlar tarayıcı tarafından işlenmezler.

/*Tanımlayıcılar*/

/*JavaScript değişkenler, fonksiyonlar ve etiketlerin isimlendirilmesine tanımlayıcı denir.
Tanımlayıcı kuralları çoğu programlama diliyle aynıdır.
JavaScript tanımlayıcının ilk karakteri harf, alt çizgi (_) veya dolar işareti ($) olabilir.
Sonraki karakterler karakter, sayı, altçizgi veya dolar işareti olabilir.*/


/*Harf duyarlılığı*/

/*JavaScript tanımlayıcıları küçük büyük harf duyarlıdır.
Örnekteki dunya ve Dunya iki farklı değişkendir.*/

var dunya, Dunya;
dunya = "Merhaba Dünya";
Dunya = "Merhaba JavaScript";
alert(Dunya);


/*Tanımlayıcı isimlendirilmesi*/


/*JavaScript ile birden fazla kelime içeren değişken, fonksiyon veya etiket tanımlarken çokça kullanılan tanımlayıcı yazımını kullanmak kod okunurluğunu arttıracaktır.

Her kelime arasında alt çizgi kullanmak;
merhaba_dunya, merhaba_javascript, dogum_tarihi
Her kelime başında büyük harf kullanmak;
MerhabaDunya, MerhabaJavascript, DogumTarihi
Değişkenin ilk harfi hariç büyük harf kullanmak;
merhabaDunya, merhabaJavascript, dogumTarihi


/*Çalışma biçimi*/

/*JavaScript ile geliştirme yaparken çoğunlukla birden fazla kod yazılır.
JavaScript kodları yukarıdan aşağıya doğru yorumlanır.*/

/*Aşağıdaki örnekte sırasıyla a, b, c değişkenleri tanımlanmış ve değişkenlere değer atanmıştır.
Son satırda c değişkeni ekrana yazılmıştır.*/

var a, b, c;
a = 5;
b = 6;
c = a + b;
alert(c);

/*JavaScript kodları ayırma*/

/*JavaScript ile kod yazarken kodları noktalı virgülle ayırabiliriz.*/

var a, b, c;
a = 5;
b = 6;
c = a + b;

//JavaScript kodları noktalı virgülle ayrıldığında tek satırda yazılabilir.

var a, b, c; a = 5; b = 6; c = a + b;

//JavaScript kodlarını noktalı virgülle ayırmak zorunlu değildir. Kullanmak hataları en aza indirir.

/*Boşluk bırakmak*/

/*JavaScript ile kod yazarken kodlar arasındaki boşluklar yok sayılır.
Kodları daha okunabilir olması için her kod arasına boşluk bırakabilirsiniz.*/

ismim = "Ali Eren";
ismim="Ali Eren";

//Operatörlerin arasında boşluk bırakabilirsiniz.

sonuc = 5 + 6;

/*Kod uzunluğu*/

/*Uzun JavaScript kodları okunurluğu azaltır.
Uzun JavaScript kodlarını birden fazla satıra bölmek okunabilirliği arttıracaktır.*/

document.getElementById("eleman").innerHTML =
 "Merhaba JavaScript";
 
/*Kod blokları*/

/*JavaScript kodları süslü parantez { . . . } kullanılarak kod blokları arasında gruplanabilir.*/

function ismiYazdir() {
    var ismim = "Ali Eren"
    alert(ismim);
}

//Kodları bloklara ayırmak kod okunurluğunu arttırır.

// Javascript dersleri - 1.bölüm bitti