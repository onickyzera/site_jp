document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        });
    });
    
    let currentIndex = 0;
    const produtos = document.querySelectorAll('.produto');
    const totalProdutos = produtos.length;
    
    document.querySelector('.next').addEventListener('click', () => {
      changeSlide('next');
    });
    
    document.querySelector('.prev').addEventListener('click', () => {
      changeSlide('previous');
    });
    
    function changeSlide(direction) {
      produtos[currentIndex].classList.remove('active');
    
      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalProdutos; // Avança para o próximo produto
      } else if (direction === 'previous') {
        currentIndex = (currentIndex - 1 + totalProdutos) % totalProdutos; // Volta para o produto anterior
      }
    
      produtos[currentIndex].classList.add('active');
    }
    
    // Inicializa o carrossel com o primeiro produto visível
    produtos[currentIndex].classList.add('active');