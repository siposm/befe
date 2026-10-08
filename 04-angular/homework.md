## Angular gyakorló házi feladat

Az előző háziban elkészített feladatot egészítse ki a következőkkel.

### Környezeti változók

Használjon környezeti változót az API végpontoknál.

### API

Készítsen egy tetszőleges backendet, ami egy végponton keresztül állatok adatait adja vissza (kép url, nem (hím/nőstény), életkor, név).

A korábban létrehozott szolgáltatást (pl. `animalApi.service.ts`) refaktorálja oly módon, hogy a szolgáltatás csak observable típusként adja vissza az API hívást, a kibontás pedig a komponensekben történjen.

### Leválogatás

Készítsen egy `filteredAnimals` komponenst, aminek a feladata, hogy a szolgáltatáson keresztül **RxJS** operátorral leválogassa és async pipe-al megjelenítse azokat az állatokat, akik 0-3 éves kor között vannak és nőstények. Amely állatok ennek a feltételnek eleget tesznek, azokat egy `animalCard` komponens segítségével jelenítse majd meg. Az egyes card-oknál **content projection** technikával helyezze el az állatok adatait egy, a saját card komponens HTML részében megírt struktúrában.
