let typeName = prompt("Ismingizni kiriting")

let nameSearch = prompt("Ismingizdan qaysi harf bor yoki yoqligini tekshirmoqchisiz ?")


if (typeName.toLowerCase().includes(nameSearch.toLowerCase())) {
    alert(" Ismingizda : " + nameSearch + " harfi bor ")
} else {
    alert(" Ismingizda : " + nameSearch + " harfi yo'q ")
}