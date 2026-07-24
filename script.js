// Reemplaza GOOGLE_FORM_URL con la URL pública de tu Google Form.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/REPLACE_WITH_YOUR_FORM/viewform";

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('rsvpOpen');
  if(btn){
    btn.addEventListener('click', ()=>{
      window.open(GOOGLE_FORM_URL, '_blank', 'noopener');
    });
  }

  // Carga automática de imágenes si existen en /images con nombres comunes
  const gallery = document.getElementById('gallery');
  if(!gallery) return;

  const sampleImages = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg'
  ];

  // Intentamos crear elementos img; si no existen en el servidor, no se mostrarán.
  let anyAdded = false;
  sampleImages.forEach(src=>{
    const img = new Image();
    img.src = src;
    img.onload = ()=>{
      anyAdded = true;
      const el = document.createElement('img');
      el.src = src;
      el.alt = 'Foto de la boda';
      gallery.appendChild(el);

      // Elimina el texto de placeholder si existe
      const placeholder = gallery.querySelector('p');
      if(placeholder) placeholder.remove();
    };
  });
});
