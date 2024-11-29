document.getElementById('promoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const promoCode = document.getElementById('promo-code').value;
    const city = document.getElementById('city').value;
    const contact = document.getElementById('contact').value;
    const customerStatus = document.getElementById('customer-status').value;
  
    if (!name || !email || !promoCode || !city || !contact || !customerStatus) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (promoCode !== 'Corteiz30') {
      alert('O código promocional está incorreto. Por favor, insira "Corteiz30".');
      return;
    }
  
    alert('Seu cupom foi solicitado com sucesso!');
  });
  