<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };

const services = ref([
  { id: 1, icon: '💆‍♀️', title: 'Masajes Tántricos', description: 'Sesiones individuales presenciales en La Plata y CABA.', features: ['90 minutos', 'Ambiente seguro', 'Enfoque terapéutico'] },
  { id: 2, icon: '🗣️', title: 'Coaching Sexual', description: 'Acompañamiento personalizado online y presencial.', features: ['Sesiones personalizadas', 'Online y presencial', 'Enfoque integral'] },
  { id: 3, icon: '👥', title: 'Talleres Grupales', description: 'Formaciones sobre tantra y sexualidad consciente.', features: ['Grupos reducidos', 'Formación anual', 'La Plata'] }
]);

const events = ref([
  { id: 1, date: { day: '15', month: 'ENE' }, title: 'Taller de Tantra para Parejas', location: 'La Plata', description: 'Nuevas formas de conexión íntima' },
  { id: 2, date: { day: '10', month: 'FEB' }, title: 'Retiro en Uruguay', location: 'Montevideo', description: 'Fin de semana de exploración' }
]);

const photos = ref([
  { id: 1, url: '/src/assets/photo1.jpeg', title: 'Shibari' },
  { id: 2, url: '/src/assets/photo2.jpeg', title: 'Evento Sexion 3.0' },
  { id: 3, url: '/src/assets/photo3.jpeg', title: 'Formacion anual de Tantra y Tao Sexual' },
  { id: 4, url: '/src/assets/photo4.jpeg', title: 'Entrevista canal 9' }
]);

const formData = ref({ name: '', email: '', phone: '', service: '', message: '' });

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  isMenuOpen.value = false;
};

const goToVideo = () => { router.push('/video-masaje'); };

const handleSubmit = () => {
  alert('¡Gracias por tu mensaje! Te contactaré pronto.');
  formData.value = { name: '', email: '', phone: '', service: '', message: '' };
};

const currentYear = new Date().getFullYear();
</script>

<template>
  <div>
    <!-- HEADER -->
    <header class="header">
      <div class="logo">🌸 Cherry</div>
      <nav :class="['nav', { open: isMenuOpen }]">
        <a @click="scrollToSection('sobre-mi')">Sobre mí</a>
        <a @click="scrollToSection('servicios')">Servicios</a>
        <a @click="scrollToSection('fotos')">Galería</a>
        <a @click="scrollToSection('eventos')">Eventos</a>
        <router-link to="/video-masaje">Video</router-link>
        <a @click="scrollToSection('contacto')">Contacto</a>
      </nav>
      <button class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>
    </header>

    <main>
      <!-- HERO -->
      <section class="hero">
        <div>
          <h1>Diosa Tántrica Cherry</h1>
          <h2>Masajista Tántrica & Coach Sexual</h2>
          <p class="desc">Un espacio para reconectarte con tu sexualidad de manera saludable, placentera y consciente.</p>
          <div class="hero-buttons">
            <button class="btn" @click="scrollToSection('servicios')">Conocé más</button>
            <button class="btn secondary" @click="goToVideo">🎥 Accede a mi video de masaje tantrico Yoni</button>
          </div>
        </div>
      </section>

      <!-- SOBRE MÍ -->
      <section id="sobre-mi" class="section about-section">
        <h2>Sobre mí</h2>
        <div class="about-wrapper">
          <div class="about-photo">
            <img src="/src/assets/cherryabout.jpeg" alt="Tamara Cherry Lopez" />
          </div>
          <div class="about-text">
            <p><strong>Soy Tamara “Cherry” Lopez</strong>, masajista especializada en Tantra desde hace más de 13 años y coach sexual. Cuento con formación en PNL, biodescodificación emocional, constelaciones familiares y terapia de regresión a vidas pasadas. Formo parte de la Asociación Argentina de Terapia de Vidas Pasadas.</p>
            <p>Mi propósito es acompañarte a vivir tu sexualidad de forma consciente, expandiendo la energía sexual y aprendiendo a integrar el placer en todas las áreas de tu vida.</p>
            <h3>Experiencia & Proyectos</h3>
            <ul>
              <li>Formación anual en Tantra y Coaching Sexual en La Plata.</li>
              <li>Sesiones presenciales en La Plata y CABA, y online a nivel internacional.</li>
              <li>Colaboraciones en talleres, streams y medios de comunicación.</li>
              <li>Próximo lanzamiento: curso online de Tantra y Tao Sexual.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SERVICIOS -->
      <section id="servicios" class="section">
        <h2>Servicios</h2>
        <div class="grid">
          <div class="card" v-for="s in services" :key="s.id">
            <div class="icon">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.description }}</p>
            <ul>
              <li v-for="f in s.features" :key="f">{{ f }}</li>
            </ul>
            <button class="btn small" @click="scrollToSection('contacto')">Consultar</button>
          </div>
        </div>
      </section>

      <!-- FOTOS -->
      <section id="fotos" class="section">
        <h2>Galería</h2>
        <div class="grid photos">
          <div class="photo" v-for="p in photos" :key="p.id">
            <img :src="p.url" :alt="p.title">
            <div class="overlay">{{ p.title }}</div>
          </div>
        </div>
      </section>

      <!-- EVENTOS -->
      <section id="eventos" class="section">
        <h2>Próximos Eventos</h2>
        <div class="grid">
          <div class="card event" v-for="e in events" :key="e.id">
            <div class="date"><span>{{ e.date.day }}</span><small>{{ e.date.month }}</small></div>
            <div>
              <h3>{{ e.title }}</h3>
              <p>📍 {{ e.location }}</p>
              <p>{{ e.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTO -->
      <section id="contacto" class="section contact">
        <h2>Contacto</h2>
        <div class="contact-wrapper">
          <div>
            <h3>📍 Consultorios</h3>
            <p><b>La Plata:</b> Sesiones presenciales</p>
            <p><b>CABA:</b> Consultorio en Capital</p>
            <p><b>Online:</b> Disponible mundial</p>
            <h3>📱 Redes Sociales</h3>
            <a href="https://www.instagram.com/diosatantrica.cherry/" target="_blank">Instagram</a> | 
            <a href="https://wa.me/5492216059132" target="_blank">WhatsApp</a>
          </div>

          <form @submit.prevent="handleSubmit" class="form">
            <input v-model="formData.name" placeholder="Tu nombre" required>
            <input v-model="formData.email" type="email" placeholder="Tu email" required>
            <input v-model="formData.phone" placeholder="Tu teléfono">
            <select v-model="formData.service" required>
              <option value="">Selecciona un servicio</option>
              <option value="masaje">Masaje Tántrico</option>
              <option value="coaching">Coaching Sexual</option>
              <option value="taller">Taller Grupal</option>
              <option value="online">Sesión Online</option>
            </select>
            <textarea v-model="formData.message" rows="5" placeholder="Cuéntame en qué puedo ayudarte..." required></textarea>
            <button type="submit" class="btn">Enviar mensaje</button>
          </form>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy; {{ currentYear }} Cherry - Diosa Tántrica. Todos los derechos reservados.</p>
    </footer>

    <!-- WhatsApp -->
    <a class="whatsapp" target="_blank"
      href="https://wa.me/5492216059132?text=Hola%20Cherry!%20Me%20interesa%20conocer%20más%20sobre%20tus%20servicios">
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp">
    </a>
  </div>
</template>

<style scoped>
/* === GLOBAL === */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #fffdf9;
  color: #3a2a2a;
}
h1,h2,h3 { margin: 0.5em 0; font-weight: 600; }
a { text-decoration: none; color: #c86b6b; }
a:hover { color: #6b3a3a; cursor: pointer; }

/* HEADER */
.header {
  display:flex; justify-content:space-between; align-items:center;
  padding:1rem 2rem; background:#f7e6d5; position:sticky; top:0; z-index:10;
}
.logo { font-weight:700; font-size:1.2rem; color:#6b3a3a; }
.nav { display:flex; gap:1.5rem; }
.nav a { font-weight:500; transition:.3s; color:#6b3a3a; }
.hamburger { display:none; flex-direction:column; gap:4px; background:none; border:none; cursor:pointer; }
.hamburger span { width:24px; height:3px; background:#6b3a3a; border-radius:2px; }

/* HERO */
.hero { text-align:center; padding:4rem 2rem; background:linear-gradient(135deg,#f7e6d5,#fffdf9); }
.hero h1 { font-size:2.5rem; color:#6b3a3a; }
.hero h2 { color:#c86b6b; font-weight:500; }
.hero .desc { margin:1rem auto; max-width:500px; color:#5a4a4a; }
.hero-buttons { margin-top:1.5rem; display:flex; justify-content:center; gap:1rem; }

/* BUTTONS */
.btn { background:#c86b6b; color:#fff; border:none; padding:.8rem 1.5rem; border-radius:50px; cursor:pointer; transition:.3s; }
.btn:hover { background:#6b3a3a; }
.btn.secondary { background:#fff; color:#c86b6b; border:2px solid #c86b6b; }
.btn.small { padding:.5rem 1rem; font-size:.9rem; }

/* SECTIONS */
.section { padding:3rem 2rem; text-align:center; background:#fffdf9; }
.grid { display:grid; gap:1.5rem; grid-template-columns:repeat(auto-fit, minmax(250px,1fr)); }

/* ABOUT */
.about-wrapper { display:flex; gap:2rem; flex-wrap:wrap; max-width:1000px; margin:auto; }
.about-photo img { width:300px ; height:300px; border-radius:12px; object-fit:cover; box-shadow:0 8px 20px rgba(0,0,0,0.1); }
.about-text { flex:1; text-align:left; }
.about-text h3 { color:#c86b6b; margin-top:1.5rem; }
.about-text ul { list-style:disc; padding-left:1.5rem; }

/* CARDS */
.card { background:#fff; padding:1.5rem; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.05); text-align:center; }
.card .icon { font-size:2rem; margin-bottom:.5rem; }

/* PHOTOS */
.photos .photo { position:relative; overflow:hidden; border-radius:12px; }
.photos img { width:100%; height:250px; object-fit:cover; display:block; }
.photos .overlay { position:absolute; inset:0; background:rgba(0,0,0,.4); color:#fff; display:flex; align-items:center; justify-content:center; opacity:0; transition:.3s; }
.photos .photo:hover .overlay { opacity:1; }

/* EVENTS */
.event { display:flex; gap:1rem; align-items:center; }
.date { background:#c86b6b; color:#fff; padding:.5rem; border-radius:8px; text-align:center; width:60px; }
.date span { font-size:1.5rem; display:block; }

/* CONTACT */
.contact-wrapper { display:grid; gap:2rem; grid-template-columns:1fr 1fr; max-width:900px; margin:auto; text-align:left; }
.form input, .form select, .form textarea { width:100%; padding:.8rem; margin-bottom:1rem; border:1px solid #ddd; border-radius:8px; }
.form button { width:100%; }

/* FOOTER */
.footer { text-align:center; padding:1.5rem; background:#6b3a3a; color:#fff; }

/* WHATSAPP */
.whatsapp { position:fixed; bottom:20px; right:20px; background:#c86b6b; color:#fff; font-size:1.5rem; padding:.7rem 1rem; border-radius:50%; box-shadow:0 4px 10px rgba(0,0,0,.2); }
.whatsapp:hover { background:#6b3a3a; }

/* RESPONSIVE */
@media(max-width:768px){
  .nav { display:none; position:absolute; top:60px; right:0; flex-direction:column; background:#fff; padding:1rem; box-shadow:0 4px 10px rgba(0,0,0,.1); }
  .nav.open { display:flex; }
  .hamburger { display:flex; }
  .contact-wrapper { grid-template-columns:1fr; }
}
</style>
