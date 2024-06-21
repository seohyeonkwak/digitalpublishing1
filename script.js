var msgr = document.getElementById('msgr');
var msgrKr = document.getElementById('msgrKr');
var msgrHB = document.getElementById('msgrHitBox');
var mom = document.getElementById('mom');
var momKr = document.getElementById('momKr');
var momHB = document.getElementById('momHitBox');
var salad = document.getElementById('salad');
var saladKr = document.getElementById('saladKr');
var saladHB = document.getElementById('saladHitBox');

msgrHB.addEventListener('mouseenter', function(event) {
    msgr.style.filter = 'blur(20px)';
    msgrKr.style.visibility = 'visible';
});
msgrHB.addEventListener('mouseleave', function(event) {
    msgr.style.filter = 'blur(0px)';
    msgrKr.style.visibility = 'hidden';
});
momHB.addEventListener('mouseenter', function(event) {
    mom.style.filter = 'blur(20px)';
    momKr.style.visibility = 'visible';
});
momHB.addEventListener('mouseleave', function(event) {
    mom.style.filter = 'blur(0px)';
    momKr.style.visibility = 'hidden';
});
saladHB.addEventListener('mouseenter', function(event) {
    salad.style.filter = 'blur(20px)';
    saladKr.style.visibility = 'visible';
});
saladHB.addEventListener('mouseleave', function(event) {
    salad.style.filter = 'blur(0px)';
    saladKr.style.visibility = 'hidden';
});