var abbeylink = document.getElementById("abbey");
var neverlink= document.getElementById("nevermind");
var circuslink= document.getElementById("circus");
var everybodylink= document.getElementById("everybody");
var medisinalink= document.getElementById("medisina");
var noontimelink= document.getElementById("noontime");
var link24k= document.getElementById("24kmagic");
var strangerlink= document.getElementById("stranger");
var kitchielink= document.getElementById("kitchie");
var moon88link= document.getElementById("moon88");
var lovedelxlink= document.getElementById("lovedelx");
var brandnewlink= document.getElementById("brandnew");


abbeylink.onclick = function() {
  window.open ("https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN?si=vRgefVq_TIOytpSFfVjiVw", "_blank");
}

neverlink.onclick = function() {
  window.open ("https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk?si=M-ZJYYoASzaOhsMsotefmw", "_blank");
}

circuslink.onclick = function() {
  window.open ("https://open.spotify.com/album/1IalzI8USuu4PB679HVV5C?si=96DIWlo_Rh--cEZ_URo3pg", "_blank");
}

everybodylink.onclick = function() {
  window.open ("https://open.spotify.com/artist/7t0rwkOPGlDPEhaOcVtOt9?si=iLZzPXeKTOa-zM-vGnZ0Fw", "_blank");
}

medisinalink.onclick = function() {
  window.open ("https://open.spotify.com/album/7sAp0E6Q4dqnrwWkpytEaN?si=ULBe3KoBSIunhl27hJ-HTA", "_blank");
}

noontimelink.onclick = function() {
  window.open ("https://open.spotify.com/album/7jEJsX7LeqOxDF9oIcqE5H?si=IcSrgvm6SFOPNpO_tNoRbQ", "_blank");
}

link24k.onclick = function() {
  window.open ("https://open.spotify.com/album/4PgleR09JVnm3zY1fW3XBA?si=4xyF8zD2T-SyutzpbAUtpQ", "_blank");
}

strangerlink.onclick = function() {
  window.open ("https://open.spotify.com/album/3IILMjMMnoN2sKzgesX8KV?si=4IQ3IE0mQ6CmzKObEm6u6w", "_blank");
}

kitchielink.onclick = function() {
  window.open ("https://open.spotify.com/album/7beVKW0o7iRoM0eRT3kGfk?si=La6B3TYqQb2fTRzp1EwesA", "_blank");
}

moon88link.onclick = function() {
  window.open ("https://open.spotify.com/album/5h7SARmqKueZqYztB10nhx?si=OzoLyp-DSmSRTKJliR_m9g", "_blank");
}

lovedelxlink.onclick = function() {
  window.open ("https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG?si=DH2UWwowRVKd4zGqjuySEg", "_blank");
}

brandnewlink.onclick = function() {
  window.open ("https://open.spotify.com/album/27UqZoE1kV6sIV6uQcI28A?si=c8E1EUztREGCj_4vSr2SJA", "_blank");
}

var beatleslink= document.getElementById("beatles");
var Bjoellink= document.getElementById("Bjoel");
var Bmarslink= document.getElementById("Bmars");
var cranblink= document.getElementById("cranb");
var eheadslink= document.getElementById("eheads");
var iwormslink= document.getElementById("iworms");
var Knadallink= document.getElementById("Knadal");
var mstar88link= document.getElementById("mstar88");
var nirvanalink= document.getElementById("nirvana");
var pmorelink= document.getElementById("pmore");
var sadelink= document.getElementById("sade");
var zildlink= document.getElementById("zild");

beatleslink.onclick = function() {
    window.open ("https://www.thebeatles.com/beatles-anthology-0", "_blank");
}

Bjoellink.onclick = function() {
    window.open ("https://www.billyjoel.com/biography/", "_blank");
}

Bmarslink.onclick = function() {
    window.open ("https://www.britannica.com/biography/Bruno-Mars", "_blank");
}

cranblink.onclick = function() {
    window.open ("https://cranberriesworld.com/crancyclopedia/biography/", "_blank");
}

eheadslink.onclick = function() {
    window.open ("https://eraserheads.fandom.com/wiki/Eraserheads", "_blank");
}

iwormslink.onclick = function() {
    window.open ("https://russel.fandom.com/wiki/Itchyworms", "_blank");
}

Knadallink.onclick = function() {
    window.open ("https://opm-music.fandom.com/wiki/Kitchie_Nadal", "_blank");
}

mstar88link.onclick = function() {
    window.open ("https://www.abs-cbn.com/entertainment/studios/music/2025/5/21/one-music-ph-360-25-things-about-moonstar88-1139", "_blank");
}

nirvanalink.onclick = function() {
    window.open ("https://www.britannica.com/topic/Nirvana-band", "_blank");
}

pmorelink.onclick = function() {
    window.open ("https://paramore.net/", "_blank");
}

sadelink.onclick = function() {
    window.open ("https://www.sade.com/", "_blank");
}

zildlink.onclick = function() {
    window.open ("https://ppop.fandom.com/wiki/Zild_Benitez", "_blank");
}


document.getElementById('year').textContent = new Date().getFullYear()

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

document.addEventListener('DOMContentLoaded', () => {
  // Select all links
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', e => {
      // Exclude external links or hash links if needed
      if (link.hostname !== window.location.hostname) return;
      
      e.preventDefault(); // Stop immediate navigation
      const target = link.href;
      
      // Add fade-out class
      document.body.classList.add('fade-out');
      
      // Navigate after animation
      setTimeout(() => {
        window.location.href = target;
      }, 500); // Matches CSS duration
    });
  });
});