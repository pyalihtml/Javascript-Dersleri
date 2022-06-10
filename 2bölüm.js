/*Yorum satırı*/

/*Tek satırlık yorumlar iki eğik çizgi // ile başlar.
İki eğik çizgi // sonrası yorum satırı olarak yorumlanacak ve JavaScript tarafından çalıştırılmayacaktır.
Örnekte her JavaScript kodu öncesinde kodun ne yapacağı hakkında bilgi yorum olarak verilmiştir.*/

// x değişkeni tanımlandı
var x;
// x değişkenine 5 değeri atandı
x = 5;

//Aşağıdaki örnekte ise kod sonrasında kodun ne yapacağı hakkında bilgi yorum olarak verilmiştir.

var x;  // x değişkeni tanımlandı
x = 5;  // x değişkenine 5 değeri atandı

/*Çok satırlı yorumlar*/

/*Çok satırlı yorumlar /* ile başlar ve */ 
/*ile biter.
JavaScript /* ve */ 
/*sarasındaki kod ve yazıları çalıştırmayacaktır.*/

/*
x değişkeni tanımlanmış
x değişkenine 5 değeri atanmıştır
*/

var x;
x = 5;


/*Kodlarını devre dışı bırakmak*/

/*JavaScript kodları ile deneme yaparken çalışmasını istemediğimiz kodları devre dışı bırakmak için yorumları kullanabiliriz.
Tek satır kodu devre dışı bırakmak;*/

var x;
x = 5;
// alert(x * 10);

//Birden fazla satır kodu devre dışı bırakmak;

/*
var x;
x = 5;
alert(x * 10);
*/

/*Değişkenler*/

//Örnekte a, b ve c değişkenleri tanımlanmış ve değer atanmıştır.

var a = 5;
var b = 6;
var c = a + b;

//Tanımlanan değişkenlerde,

/*a değişkenin değeri 5
b değişkenin değeri 6
c değişkeninin değeri 11 olur.*/

/*Değişken tanımlama*/

/*Tüm JavaScript değişken isimleri benzersiz olmalıdır.
JavaScript değişken isimleri tanımlayıcı olarak adlandırılır.
Tanımlayıcılar a ve b gibi kısa veya daha açıklayıcı merhabaDunya, dogumTarihi, xSayisi gibi olabilir.
JavaScript değişken tanımlama kuralları : */

/*Değişken isimlerinde harf, rakam, alt çizgi ve dolar işareti olabilir.
Değişken isimleri harf, alt çizgi veya dolar işareti ile başlayabilir.
Değişken isimleri BÜYÜK küçük harf duyarlıdır. (a ve A farklı değişkenlerdir)
Değişken isimleri arasında boşluk bırakılmaz.
JavaScript anahtar kelimeleri değişken adı olarak kullanılamaz. (var, debugger, if, while…vb)
Değişken isimlerinde Türkçe karakter kullanılabilir. Ancak kullanılması tavsiye edilmez.*/

/*Değer atama*/

/*JavaScript ile tanımlanan değişkene değer atamak için eşit (=) operatörü kullanılır.*/

var a = 5;

/*Değişken türleri*/

/*JavaScript değişkenleri 100 gibi sayısal değer alabileceği gibi Ali Eren gibi metinsel değer alabilir.
Metinsel değerler tek tırnak veya çift tırnak arasında yazılırken sayısal değerler tırnak işareti olmadan yazılır.*/

//Sayısal değerler tırnak içerisine alınırsa JavaScript değişkeni metinsel ifade olarak tanımlayacaktır.

var pi = 3.14;
var ismim = "Ali Eren";
var merhaba = 'Merhaba JavaScript';

/*Değişken oluşturmak*/

/*JavaScript değişken oluşturma değişken tanımlama olarak adlandırılır.
JavaScript ile değişken oluşturmak için var anahtar kelimesi kullanılır.*/

var ismim;

/*Değişken oluşturduktan sonra değişkenin herhangi bir değeri yoktur. (Değişken değeri undefined tanımlanmıştır.)
Değişkene değer atamak için eşit (=) operatörü kullanılır.*/

ismim = "Ali Eren";

//Değişkene değer atama işlemini değişken oluştururken de yapabiliriz.

var ismim = "Ali Eren";

//Örnekte ismim değişkeni oluşturulmuş Ali Eren değeri atanmış ve ekrana uyarı mesajı olarak yazılmıştır.

var ismim = "Ali Eren";
alert(ismim);

/*Değişkenleri JavaScript komutlarının başında oluşturulması önerilir.*/


/*Birden fazla değişken tanımlama*/

/*Birden fazla değişken tanımlamak için değişken ismi sonrasına virgül eklememiz yeterli olacaktır.*/

var ismim = "Ali Eren", merhaba = "Merhaba JavaScript", xSayisi = 1453;
alert(ismim);

//Birden fazla değişken tanımlamayı daha okunaklı olması için birden fazla satıra bölebiliriz.

var ismim = "Ali Eren",
merhaba = "Merhaba JavaScript",
xSayisi = 1453;
alert(ismim);

/*Tanımsız değişkenler*/

/*Değişken değeri hesaplama sonucu veya kullanıcı veri girişinden sonra değer alabileceğinden genellikle değişkenlere değer atanmadan oluşturulur.
Değişkenlere değer verilmeden oluşturulursa tanımsız (undefined) değerini alır.
Örnekte ismim adında bir değişken oluşturulmuş ancak değer atanmadığından undefined değerini almıştır.*/

var ismim;
alert(ismim);

/*Değişkenleri tekrar oluşturmak*/

/*JavaScript tanımlanmış değişkeni tekrar oluşturulursa değerini korur.*/

var ismim = "Ali Eren";
var ismim;
alert(ismim);

//NOT: Tekrar oluşturulan değişkene değer atanırsa yeni atanan değeri alır.


/*Değişken aritmetiği*/

/*JavaScript değişkenlerde aritmetik operatörlerini kullanabiliriz.*/

var xSayisi = 5 + 2 + 3;
alert(xSayisi);

//Aritmetik operatörleri metinsel değerlerde kullandığımızda birleştirme operatörü olarak işlem yapacaktır.

var ismim = "Ali" + "Eren";
alert(ismim);

//Sayılar tırnak içerisinde yazıldığında JavaSsript metinsel birleştirme operatörü işlemi yapacaktır.

var xSayisi = "5" + 2 + 3;
alert(xSayisi);

//Aşağıdaki örnekte ilk olarak 5 ve 2 toplanacak sonra değer metinsel olarak yazıldığından değişken birleştirme operatörü olarak işlem yapacaktır.

var xSayisi = 5 + 2 + "3";
alert(xSayisi);

// Javascript dersleri - 2.bölüm bitti