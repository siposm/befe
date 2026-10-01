## Angular gyakorló házi feladat

Az előző háziban elkészített feladatot egészítse ki a következőkkel.

### Kapcsolat

Egészítse ki az email cím ellenőrzést a következő módon: amennyiben az email cím nem megfelelő, úgy a gomb legyen disabled állapotú vagy meg se jelenjen.

### Állatkák

Egészítse ki úgy a komponenst, hogy az "örökbe fogadom" gombra nyomva, egy **modal ablak** jöjjön fel, amibe a felhasználó be tudja írni a nevét és telefonszámát. Telefonszámnál a következő stratégiát valósítsa meg: a `+36/xx-xxx-xx-xx` mintának megfelelően egymás mellett helyezzen el 4 input mezőt (az x-el jelölt karaktereknek megfelelően).

Az "Örökbefogadás indítása" gombra nyomva, a modal ablak záródjon be, és jöjjön fel egy alert doboz, ami 10 másodperc múlva magától tűnjön is el. Ebbe írja bele, hogy "Az örökbefogadási igényt köszönjük megkaptuk, értesíteni fogjuk a {telszám} elérhetőségen!". A megfelelő helyre a megadott telefonszám értékei legyenek összekonkatenálva.

### API & algoritmizálás

Készítsen egy tetszőleges backendet, ami egy végponton keresztül állatok adatait adja vissza (kép url, nem (hím/nőstény), életkor, név).

Az API hívását egy szolgáltatáson keresztül végezze (pl. `animalApi.service.ts`).

Az állatokat listázó komponensben cserélje le a korábbi megoldást az API-ról visszakapott válasszal.

Minden állat mellett legyen egy gomb, hogy "Gondozom", amire kattintva az adott állat egy külön gyűjteménybe kerüljön bele. A gondozásra jelölt állatok az oldal tetején egy külön dobozban jelenjenek meg, egymás mellett "név (életkor)" formában, bootstrap badge-ekben. Amennyiben az állat hím, kék badge legyen. Amennyiben nőstény, sárga badge legyen. Egy már kiválasztott állat ne lehessen újra választható (ne kerüljön be ismét a kiválasztottak közé), és maximum 10 db-ot lehessen kiválasztani egyszerre.
