//** ▶▶▶ START SCRIPT FOR PRELOAD PAGE
var loader = document.getElementById("Preloader");
window, addEventListener("load", function () {
  loader.style.display = "none";
})
//** END SCRIPT FOR PRELOAD PAGE◀◀◀


//** ▶▶▶ START SCRIPT FOR MENU MOBILE
const hamburger = document.querySelector(".NavMobile");
const navLinks = document.querySelector(".NavLinks");
const links = document.querySelectorAll(".NavLinks li");
hamburger.addEventListener('click', () => {

  //** ▶▶▶ANIMATE LINKS
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //** ▶▶▶MENU-MOBILE ANIMATION
  hamburger.classList.toggle("toggle");
});

//** END SCRIPT FOR MENU MOBILE◀◀◀



//** ▶▶▶START SCRIPT FOR COUNTDOWN
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".Days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".Minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".Seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//** END SCRIPT FOR COUNTDOWN◀◀◀

//** ▶▶▶START MAILCHIMP NEWSLETTER FORM */
(function ($) {
  window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email';
  // Translated default messages for the jQuery validation plugin into arabic.
  // Locale: AR

  $.extend($.validator.messages, {
    required: "هذا الحقل إلزامي",
    remote: "يرجى تصحيح هذا الحقل للمتابعة",
    email: "رجاء إدخال عنوان بريد إلكتروني صحيح",
    url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
    date: "رجاء إدخال تاريخ صحيح",
    dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
    number: "رجاء إدخال عدد بطريقة صحيحة",
    digits: "رجاء إدخال أرقام فقط",
    creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
    equalTo: "رجاء إدخال نفس القيمة",
    accept: "رجاء إدخال ملف بامتداد موافق عليه",
    maxlength: $.validator.format("الحد الأقصى لعدد الحروف هو {0}"),
    minlength: $.validator.format("الحد الأدنى لعدد الحروف هو {0}"),
    rangelength: $.validator.format("عدد الحروف يجب أن يكون بين {0} و {1}"),
    range: $.validator.format("رجاء إدخال عدد قيمته بين {0} و {1}"),
    max: $.validator.format("رجاء إدخال عدد أقل من أو يساوي (0}"),
    min: $.validator.format("رجاء إدخال عدد أكبر من أو يساوي (0}")
  });
}(jQuery)); var $mcj = jQuery.noConflict(true);
//** END MAILCHIMP NEWSLETTER FORM◀◀◀

//** ▶▶▶START SUBSCRIPTION FORM */
let SubDone = document.getElementById("SubDone");

function openDone() {
  SubDone.classList.add("open-SubDone");
}
function closeButton() {
  SubDone.classList.remove("open-SubDone");
}
