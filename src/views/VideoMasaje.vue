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

    <!-- Hero OPCIÓN 1: Mantiene Yoni pero explica -->
    <section class="video-hero">
      <div class="hero-content">
        <div class="hero-badge">✨ Curso Premium</div>
        <h1 class="hero-title">Masaje Tántrico Yoni</h1>
        <p class="hero-subtitle">Aprende el arte ancestral del placer femenino consciente y la conexión íntima profunda</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">33min</span>
            <span class="stat-label">De contenido</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">Acceso ilimitado</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Online</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>

    <!-- Hero OPCIÓN 2: Directo al beneficio (COMENTADA)
    <section class="video-hero">
      <div class="hero-content">
        <div class="hero-badge">🔥 Despertar Sexual</div>
        <h1 class="hero-title">Masaje Tántrico Femenino</h1>
        <p class="hero-subtitle">Transforma tu intimidad: técnicas de placer profundo que revolucionarán tu sexualidad</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">33min</span>
            <span class="stat-label">Video exclusivo</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Técnicas probadas</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">Acceso total</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>
    -->

    <!-- Hero OPCIÓN 3: Mix con explicación (COMENTADA)
    <section class="video-hero">
      <div class="hero-content">
        <div class="hero-badge">💫 Tantra Auténtico</div>
        <h1 class="hero-title">Masaje Yoni</h1>
        <p class="hero-subtitle-small">*Yoni = Sagrado femenino en sánscrito</p>
        <p class="hero-subtitle">Domina el masaje íntimo que despierta placer, sensibilidad y orgasmos más intensos</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">33min</span>
            <span class="stat-label">De contenido</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Práctico</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">Para siempre</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>
    -->

    <!-- Contenido -->
    <section class="video-content">
      <div class="video-grid">
        <!-- Video -->
        <div class="video-box">
          <div class="video-container">
            <video 
              src="/assets/PreviewVideo.mp4" 
              class="video-preview" 
              controls 
              preload="metadata"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
            <div class="video-overlay">
              <div class="play-hint">▶ Vista previa del curso</div>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="video-info">
          <h2 class="info-title">¿Qué vas a descubrir?</h2>
          <ul class="benefits-list">
            <li class="benefit-item">
              <span class="benefit-icon">✨</span>
              <span class="benefit-text">Técnicas auténticas de masaje tántrico</span>
            </li>
            <li class="benefit-item">
              <span class="benefit-icon">💆‍♀️</span>
              <span class="benefit-text">Ejercicios guiados paso a paso</span>
            </li>
            <li class="benefit-item">
              <span class="benefit-icon">🧘‍♀️</span>
              <span class="benefit-text">Respiración y energía sexual</span>
            </li>
            <li class="benefit-item">
              <span class="benefit-icon">💝</span>
              <span class="benefit-text">Creación de un ambiente sagrado</span>
            </li>
            <li class="benefit-item">
              <span class="benefit-icon">📱</span>
              <span class="benefit-text">Acceso ilimitado y para siempre</span>
            </li>
          </ul>
          
          <div class="price-box">
            <div class="price-content">
              <div class="price-left">
                <span class="old-price">$60.000</span>
                <span class="price">$45.000</span>
              </div>
              <span class="badge">-25% OFF</span>
            </div>
            <div class="price-tag">Oferta por tiempo limitado</div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="purchase-box">
        <div class="purchase-header">
          <h2>Obtén acceso inmediato</h2>
          <p class="purchase-subtitle">Completa tus datos y te contactaremos por WhatsApp</p>
        </div>
        <form @submit.prevent="sendWhatsApp" class="purchase-form">
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input v-model="formData.name" id="name" type="text" placeholder="Ej: María González" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="formData.email" id="email" type="email" placeholder="tu@email.com" required>
          </div>
          <button type="submit" class="buy-btn">
            <span class="btn-icon">💬</span>
            <span>Comprar ahora - $45.000</span>
            <span class="btn-arrow">→</span>
          </button>
        </form>
        <div class="trust-badges">
          <div class="trust-item">
            <span class="trust-icon">🔒</span>
            <span class="trust-text">Pago seguro</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">⚡</span>
            <span class="trust-text">Acceso inmediato</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">💯</span>
            <span class="trust-text">Garantía total</span>
          </div>
        </div>
      </div>
       <!-- Footer -->
  
    </section>

   <!-- WhatsApp -->
    <a class="whatsapp" target="_blank"
      href="https://wa.me/5492216059132?text=Hola%20Cherry!%20Me%20interesa%20conocer%20más%20sobre%20tus%20servicios">
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp">
    </a>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Cherry - Diosa Tántrica. Todos los derechos reservados.</p>
      <p class="footer-credit">Sitio creado por <a href="https://presence.com.ar/" target="_blank" rel="noopener" class="presence-link">Presence</a></p>
    </footer>

  </div>
    
</template>

<style scoped>
.footer { text-align:center; padding:1.5rem; background:#5a2f2f; color:#fff; font-size:0.9rem; }

.footer-credit {
  font-size: 0.85rem;
  margin-top: 0.8rem;
  color: rgba(255,255,255,0.5);
}

a { text-decoration: none; color: #e75480; }
a:hover { color: #b93c64; cursor: pointer; }

.video-page { 
  padding-top: 80px;
  background: linear-gradient(180deg, #fff 0%, #fef5f8 100%);
}

/* WHATSAPP */
.whatsapp { 
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  background: linear-gradient(135deg, #25d366, #128C7E);
  border-radius: 50%; 
  width: 60px; 
  height: 60px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4); 
  transition: all .3s ease; 
  z-index: 1000;
  animation: pulse 2s infinite;
}
.whatsapp img { 
  width: 32px; 
  height: 32px; 
}
.whatsapp:hover { 
  transform: scale(1.15) rotate(10deg); 
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.5); 
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4); }
  50% { box-shadow: 0 8px 35px rgba(37, 211, 102, 0.6); }
}

/* VIDEO */
.video-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffd6e8, #e4b4a2);
  padding: 1.5rem;
  box-shadow: 0 25px 70px rgba(0,0,0,0.2);
  max-height: 500px;
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(40px) brightness(0.6);
  transform: scale(1.1);
  z-index: 0;
}
.video-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
  z-index: 1;
  background: #000;
  max-height: 450px;
}
.video-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.video-preview {
  width: 100%;
  height: auto;
  max-height: 450px;
  display: block;
  border-radius: 16px;
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
  background: rgba(255,255,255,0.98);
  backdrop-filter: blur(15px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
  z-index: 1000;
}
.logo { display: flex; align-items: center; gap: 0.75rem; }
.logo-circle {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffd6e8, #e4b4a2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}
.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.back-btn {
  background: linear-gradient(135deg, #ffd6e8, #e4b4a2);
  border: none;
  color: #fff;
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
}
.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
}

/* HERO */
.video-hero {
  position: relative;
  background: linear-gradient(135deg, #ffd6e8 0%, #e4b4a2 100%);
  padding: 4rem 5% 3rem;
  text-align: center;
  overflow: hidden;
}
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  color: #ff6b6b;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.1);
  letter-spacing: -0.5px;
}
.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  margin-top: 0.5rem;
  font-weight: 500;
  color: rgba(255,255,255,0.95);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
.hero-subtitle-small {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
}
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.stat-number {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.stat-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.9);
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 35px;
  background: rgba(255,255,255,0.3);
}

/* CONTENT */
.video-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 5% 2.5rem;
}
.video-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  align-items: start;
}
.info-title { 
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
}
.benefits-list {
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
}
.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.6rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.benefit-item:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  border-color: #ffd6e8;
}
.benefit-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.benefit-text {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

/* PRICES */
.price-box {
  background: linear-gradient(135deg, #fff 0%, #fef5f8 100%);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  border: 2px solid #ffd6e8;
}
.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.price-left {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.old-price {
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  font-weight: 500;
}
.price {
  font-size: 2.5rem;
  color: #ff6b6b;
  font-weight: 800;
  letter-spacing: -1px;
}
.badge {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}
.price-tag {
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.6rem;
  background: rgba(255, 214, 232, 0.3);
  border-radius: 10px;
}

/* PURCHASE BOX */
.purchase-box {
  background: linear-gradient(135deg, #ffd6e8 0%, #e4b4a2 100%);
  padding: 2.5rem 2.5rem 2rem;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}
.purchase-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.purchase-header {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}
.purchase-box h2 {
  color: #fff;
  margin-bottom: 0.4rem;
  font-size: 1.8rem;
  font-weight: 800;
}
.purchase-subtitle {
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  font-weight: 500;
}
.purchase-form {
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.form-group label {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}
.purchase-box input {
  padding: 1rem 1.3rem;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 15px;
  font-size: 1rem;
  background: rgba(255,255,255,0.95);
  transition: all 0.3s;
}
.purchase-box input:focus {
  outline: none;
  border-color: #fff;
  box-shadow: 0 4px 20px rgba(255,255,255,0.3);
  transform: translateY(-2px);
}
.buy-btn {
  background: linear-gradient(135deg, #25d366, #128C7E);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}
.buy-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
}
.btn-icon {
  font-size: 1.3rem;
}
.btn-arrow {
  font-size: 1.3rem;
  transition: transform 0.3s;
}
.buy-btn:hover .btn-arrow {
  transform: translateX(5px);
}
.trust-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255,255,255,0.95);
  padding: 0.6rem 1.1rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.trust-icon {
  font-size: 1.1rem;
}
.trust-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
}

/* RESPONSIVE */
@media (max-width: 968px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-stats {
    gap: 1.5rem;
  }
  .stat-divider {
    display: none;
  }
}

@media (max-width: 768px) {
  .video-page {
    padding-top: 70px;
  }
  .video-hero {
    padding: 3.5rem 5% 3rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .purchase-box { 
    padding: 2rem 1.5rem 1.5rem; 
  }
  .purchase-box h2 {
    font-size: 1.6rem;
  }
  .trust-badges {
    gap: 1rem;
  }
  .trust-item {
    padding: 0.5rem 0.9rem;
  }
}
</style>