function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector(".aura img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}

$(document).ready(function() {
	// Inicialize o Slick Carousel para a classe .tech-icons
	$('.tech-icons').slick({
	  centerMode: true, // O ícone central será ampliado
	  centerPadding: '0', // Não adicionar padding aos ícones centrais
	  slidesToShow: 3, // Quantidade de ícones visíveis por vez
	  speed: 600, // Velocidade da animação em milissegundos
	  autoplay: true, // Inicia o carrossel automaticamente
	  autoplaySpeed: 1000, // Intervalo entre as transições em milissegundos
	  infinite: true,
	  arrows:false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3 // Quantidade de ícones visíveis em telas menores
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 3 // Quantidade de ícones visíveis em telas ainda menores
		  }
		}
	  ]
	});
  });

  function isMobileDevice() {
	return window.innerWidth < 769;
  }
  
  // Função para definir o background com base no tipo de dispositivo
  function setBodyBackground() {
	const body = document.querySelector('body');
	if (isMobileDevice()) {
	  body.style.background = 'var(--bg-url) no-repeat top center/cover';
	} else {
	  body.style.background = 'var(--bg-url-desktop) no-repeat center center/cover';
	}
  }
  
  // Chamar a função quando a página carregar e quando a janela for redimensionada
  document.addEventListener('DOMContentLoaded', setBodyBackground);
  window.addEventListener('resize', setBodyBackground);