## Angular gyakorló házi feladat

Az eddig tanultakat felhasználva, valósítsa meg az alábbi feladatot.

Készítsen egy állatmenhely számára szolgáló **Angular frontend alkalmazást**. A menhely a következő oldalakból épüljön fel SPA módon. Használjon Bootstrap stílusokat.

### Navigáció

Az oldal tetején legyen egy navigációs sáv (ehhez használjon `nav` komponenst), amelyben a linkek az egyes aloldalakra mutassanak. A szükséges routing beállításokat is végezze el, figyelve arra, hogy üres és értelmetlen route esetén egyaránt le legyen kezelve az alkalmazás.

### Főoldal

Hozzon létre egy `home` komponenst ehhez. Tetszőleges bootstrap elemekkel alakítsa ki a felületet. Legyen benne pl. carousel amiben állatos képek vannak; legyen valamilyen leírás az oldalon ami a menhely tevékenységét mutatja be; legyen alatta egy google maps beágyazva és egy kapcsolat form pár input mezővel.

Amikor a felhasználó a kapcsolati adatokat és az üzenet szövegét kitölti, gombnyomás hatására konzolra írja ki ezek tartalmát.

### Hiba

Készítsen egy `error` komponenst, ami akkor jelenjen meg, ha a felhasználó nem létező route-ot szeretne elérni. Ide valamilyen tetszőleges üzenetet helyezzen el a user-nek.

### Kapcsolat

Hozzon létre egy kapcsolati aloldalt (`contact` komponens), ahol a menhellyel lehet felvenni a kapcsolatot a következő kötelező mezőkkel:

- név
- email cím
- adományozó-e (igen/nem)  
- üzenet szövege

Az email mezőre végezzen email cím helyesség ellenőrzést (egy pillanatra engedjük el a type=email opciót, ami ezt részben elvégzi). Gombnyomást követően ellenőrizze, hogy az email input tartalma eleget tesz annak, hogy:

- van benne @ jel
- a @ jeltől balra lévő rész legalább 5 karakter
- a @ jeltől jobbra lévő rész legalább 5 karakter és van benne . karakter
- a . karaktertől jobbra is van legalább 2 karakter

> [!TIP]
> Próbálja ki, hogy nem gombnyomás hatására vizsgáljuk ezt, hanem karakterleütésenként. Ehhez a (click) helyett a (change) eseményt kell használni, a JS-ben ismert onChange-nek megfelelően.

### Csapatunk

Hozzon létre egy, a menhelyen dolgozókat bemutató aloldalt (`team` komponens), ami vagy cardokkal vagy táblázattal mutassa be az embereket (profilkép, név, pozíció, email).

A dolgozókat egy osztállyal reprezentálja, ehhez hozza létre a szükséges osztályt a megfelelő tulajdonságokkal.

A komponens .ts részében seed adatokat adjon meg, amiket aztán a .html részben a tanult eszközökkel be tud iterálni.

### Állatkák

Hozzon létre egy aloldalt (`animals` komponens), amely a menhelyen található állatokat mutatja be (kép, nem (hím/nőstény), életkor, név).

Az egyes állatnál legyen egy "örökbe fogadom" gomb, amire rányomva megjelenik két input mező, ahol a felhasználó be tudja írni a nevét és telefonszámát. (Egyelőre "elrejtést és megjelenítést" még nem tanultunk, ezért megfelelő, ha ezek az inputok prezisztens módon ott vannak pl. az oldal tetején de jól megkülönböztetve (pl. bootstrap alert dobozban).)

Az állatokat egy osztállyal reprezentálja, ehhez hozza létre a szükséges osztályt, valamint ezek alapján a seed adatokat az adott komponens .ts részében.






