<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({ name: '', email: ''})

// 👉 función para enviar datos a WhatsApp
const sendWhatsApp = () => {
  const { name, email } = formData.value

  // mensaje con saltos de línea (%0A)
  const message = `Hola! Quiero el curso Masaje Tántrico Yoni.%0A
Nombre: ${name}%0A
Email: ${email}%0A 
  `

  const url = `https://wa.me/5492216059132?text=${message}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="video-page">
    <!-- Header -->
    <header class="video-header">
      <div class="logo">
        <div class="logo-circle">C</div>
        <span class="logo-text">Cherry</span>
      </div>
      <button @click="router.push('/')" class="back-btn">← Volver</button>
    </header>

    <!-- Hero -->
    <section class="video-hero">
      <h1>Masaje Tántrico Yoni</h1>
      <p>De la desconexión al despertar de tu sexualidad tántrica</p>
    </section>

    <!-- Contenido -->
    <section class="video-content">
      <div class="video-grid">
        <!-- Video -->
        <div class="video-box">
          <video 
            src="/assets/ReelCherry.mp4" 
            class="video-preview" 
            controls 
            preload="metadata"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <!-- Info -->
        <div class="video-info">
          <h2>¿Qué vas a descubrir?</h2>
          <ul>
            <li>✨ Técnicas auténticas de masaje tántrico</li>
            <li>💆‍♀️ Ejercicios guiados paso a paso</li>
            <li>🧘‍♀️ Respiración y energía sexual</li>
            <li>💝 Creación de un ambiente sagrado</li>
            <li>📱 Acceso ilimitado y para siempre</li>
          </ul>
          
          <div class="price-box">
            <span class="old-price">$60.000</span>
            <span class="price">$45.000</span>
            <span class="badge">-20%</span>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="purchase-box">
        <h2>Obtén acceso inmediato</h2>
        <form @submit.prevent="sendWhatsApp">
          <input v-model="formData.name" type="text" placeholder="Nombre" required>
          <input v-model="formData.email" type="email" placeholder="Email" required>
          <button type="submit" class="buy-btn">Comprar ahora - $45.000</button>
        </form>
        <p class="secure">🔒 Pago seguro vía WhatsApp</p>
      </div>
    </section>

   <!-- WhatsApp -->
    <a class="whatsapp" target="_blank"
      href="https://wa.me/5492216059132?text=Hola%20Cherry!%20Me%20interesa%20conocer%20más%20sobre%20tus%20servicios">
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp">
    </a>
  </div>
</template>

<style scoped>
.video-page { padding-top: 80px; }
/* WHATSAPP */
.whatsapp { 
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  background: #25d366; /* Verde oficial de WhatsApp */
  border-radius: 50%; 
  width: 60px; 
  height: 60px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  box-shadow: 0 6px 15px rgba(0,0,0,0.25); 
  transition: transform .3s ease, box-shadow .3s ease; 
  z-index: 1000;
}
.whatsapp img { 
  width: 32px; 
  height: 32px; 
}
.whatsapp:hover { 
  transform: scale(1.1); 
  box-shadow: 0 8px 20px rgba(0,0,0,0.3); 
}

/* VIDEO */
.video-preview {
  max-height: 500px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* HEADER */
.video-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-light);
  z-index: 1000;
}
.logo { display: flex; align-items: center; gap: 0.75rem; }
.logo-circle {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #128c7e;
  font-size: 1.5rem;
  font-weight: 700;
}
.logo-text {
  font-size: 1.5rem;
  font-family: var(--font-primary);
}
.back-btn {
  background: none;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

/* HERO */
.video-hero {
  background: linear-gradient(135deg, #ffd6e8, #e4b4a2);
  padding: 6rem 5% 4rem;
  text-align: center;
}
.video-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}
.video-hero p {
  font-size: 1.3rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

/* CONTENT */
.video-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 5%;
}
.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}
.video-info h2 { margin-bottom: 1.5rem; }
.video-info ul {
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
}
.video-info li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  font-size: 1.1rem;
}

/* PRICES */
.price-box {
  background: #128c7e;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: var(--shadow-light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.old-price {
  font-size: 1.3rem;
  color: #999;
  text-decoration: line-through;
}
.price {
  font-size: 2.5rem;
  color: var(--color-primary);
  font-weight: 700;
}
.badge {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 700;
}

/* PURCHASE BOX */
.purchase-box {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  color: white;
}
.purchase-box h2 {
  color: #128c7e;
  margin-bottom: 2rem;
}
.purchase-box form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.purchase-box input {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
}
.buy-btn {
  background: #25d366;
  color: white;
  border: none;
  padding: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
}
.buy-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.secure {
  background-color: #128c7e;
  font-size: 0.8rem;
  margin-top: 1rem;
  opacity: 0.9;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  display: inline-block;
}


/* RESPONSIVE */
@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .purchase-box { padding: 2rem 1.5rem; }
}
</style>
