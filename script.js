let carrito = [];
const carritoCount = document.querySelectorAll('#carrito-count');
const carritoLink = document.querySelectorAll('#carrito-link');
const modal = document.getElementById('carrito-modal');
const closeModal = document.querySelector('.close');
const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');

function actualizarCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - BOB. ${item.precio}`;
        carritoLista.appendChild(li);
        total += parseInt(item. precio);
    });
    carritoTotal.textContent = total;
    carritoCount.forEach(count => count.textContent = carrito.length);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const nombre = button.dataset.nombre;
        const precio = button.dataset.precio;
        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

carritoLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Para el formulario de contacto
const formContacto = document.getElementById('form-contacto');
if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('mensaje-respuesta').textContent = 'Mensaje enviado con éxito.';
        formContacto.reset();
    });
}
// Script.js
document.addEventListener("DOMContentLoaded", () => {

  const thumbs = document.querySelectorAll(".thumb");
  const modal = document.getElementById("modal");
  const largeImg = document.getElementById("largeImg");
  const close = document.getElementById("close");

  // Al hacer clic en miniatura
  thumbs.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("data-large");
      largeImg.src = src;
      modal.style.display = "flex";
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
    largeImg.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      largeImg.src = "";
    }
  });
});
