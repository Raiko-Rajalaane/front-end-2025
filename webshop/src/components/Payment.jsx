function Payment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const paymentHeaders = {
    Authorization:
      'Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==',
    'Content-Type': 'application/json',
  };

  const pay = () => {
    const url = 'https://igw-demo.every-pay.com/api/v4/payments/oneoff';
    const payload = {
      account_name: 'EUR3D1',
      nonce: '1657' + Math.random() * 9999 + new Date(),
      timestamp: new Date(),
      amount: totalPrice(),
      order_reference: Math.random() * 9999,
      customer_url: 'https://webshop-89625.web.app/',
      api_username: '92ddcfab96e34a5f',
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: paymentHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        window.location.href = json.payment_link;
      });
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => (total += product.toode.price * product.kogus));
    return total;
  };

  return <button onClick={pay}>Maksa</button>;
}

export default Payment;
