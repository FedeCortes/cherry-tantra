<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };

const services = ref([
  { 
    id: 1, 
    icon: '💆‍♀️', 
    title: 'Masajes Tántricos', 
    description: 'Cachemira, Sensitivo, Erótico taoísta, Ying Yang, Yoni/Lingham. Sesiones individuales presenciales en La Plata y CABA.', 
    features: ['120 minutos', 'Ambiente seguro'] 
  },
  { 
    id: 2, 
    icon: '🗣️', 
    title: 'Coaching Sexual', 
    description: 'Acompañamiento personalizado online y presencial.', 
    features: ['Sesiones personalizadas', 'Online y presencial', 'Enfoque integral'] 
  },
  { 
    id: 3, 
    icon: '👥', 
    title: 'Talleres Grupales', 
    description: 'Formaciones sobre tantra y sexualidad consciente.', 
    features: ['Grupos reducidos', 'Formación anual', 'La Plata'] 
  },
  { 
    id: 4, 
    icon: '🌱', 
    title: 'Biodescodificación Emocional', 
    description: 'Sesiones individuales orientadas a liberar bloqueos emocionales.', 
    features: ['Enfoque terapéutico', 'Trabajo profundo'] 
  },
  { 
    id: 5, 
    icon: '🌌', 
    title: 'Constelaciones Familiares Individuales', 
    description: 'Sesiones individuales para explorar vínculos y patrones familiares.', 
    features: ['Mirada sistémica', 'Trabajo personal'] 
  },
  { 
    id: 6, 
    icon: '🌀', 
    title: 'Terapia de Regresión a Vidas Pasadas', 
    description: 'Exploración terapéutica de experiencias de vidas pasadas.', 
    features: ['Sesiones guiadas', 'Trabajo introspectivo'] 
  },
  { 
    id: 7, 
    icon: '🌺', 
    title: 'Sanación Uterina', 
    description: 'Sesiones de sanación energética y emocional enfocadas en el útero.', 
    features: ['Conexión profunda', 'Sanación femenina'] 
  },
  { 
    id: 8, 
    icon: '🤸‍♀️', 
    title: 'Hipopresivos y Suelo Pélvico', 
    description: 'Ejercicios y sesiones para fortalecer la faja abdominal y el suelo pélvico.', 
    features: ['Método hipopresivo', 'Prevención y bienestar'] 
  },
  { 
    id: 9, 
    icon: '🔮', 
    title: 'Tarot Evolutivo', 
    description: 'Sesiones de tarot con mirada evolutiva y de autoconocimiento.', 
    features: ['Perspectiva evolutiva', 'Autoconocimiento'] 
  }
]);

const events = ref([
  { id: 1, date: { day: '10', month: 'OCT' }, title: 'Descaradas.ok', location: 'Youtube', description: '' },
  { id: 2, date: { day: '11', month: 'OCT' }, title: 'Fiesta tantrika', location: 'CABA', description: '' },
  { id: 3, date: { day: '12', month: 'OCT' }, title: 'Taller módulo de formación de tantra y tao sexual', location: 'La Plata', description: 'De 16:00 a 20:00' }
]);

const photos = ref([
  { id: 1, url: '/assets/photo1.jpeg', title: 'Shibari' },
  { id: 2, url: '/assets/photo2.jpeg', title: 'Evento Sexion 3.0' },
  { id: 3, url: '/assets/photo3.jpeg', title: 'Formación anual de Tantra y Tao Sexual' },
  { id: 4, url: '/assets/photo4.jpeg', title: 'Entrevista canal 9' }
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
        <h1>Diosa Tántrica Cherry</h1>
        <h2>Masajista Tántrica & Coach Sexual</h2>
        <p class="desc">Un espacio para reconectarte con tu sexualidad de manera saludable, placentera y consciente.</p>
        <div class="hero-buttons">
          <button class="btn" @click="scrollToSection('servicios')">Conocé más</button>
          <button class="btn secondary" @click="goToVideo">🎥 Video de masaje tántrico Yoni</button>
        </div>
      </section>

      <!-- SOBRE MÍ -->
      <section id="sobre-mi" class="section about-section">
        <h2>Sobre mí</h2>
        <div class="about-wrapper">
          <div class="about-photo">
            <img src="/assets/cherryabout.jpeg" alt="Tamara Cherry Lopez" />
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
      <section id="servicios" class="section services">
        <h2 class="services-title">Servicios</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="card">
            <div class="icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul>
              <li v-for="(feature, index) in service.features" :key="index">{{ feature }}</li>
            </ul>
              <a 
                class="btn"
                target="_blank"
                :href="`https://wa.me/5492216059132?text=Hola%20Cherry!%20Quiero%20consultar%20por%20el%20servicio:%20${encodeURIComponent(service.title)}`"
              >
                Consultar
              </a>          
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
          <div class="contact-info">
            <h3 style="margin-top: 3rem;">📍 Consultorios</h3>
            <p><b>La Plata:</b> Sesiones presenciales</p>
            <p><b>CABA:</b> Consultorio en Capital</p>
            <p><b>Online:</b> Disponible mundial</p>
            <h3 style="margin-top: 3rem;">📱 Redes Sociales</h3>
            <div class="social-icons">
              <a href="https://www.instagram.com/diosatantrica.cherry/" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram"/>
              </a>
              <a href="https://wa.me/5492216059132" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp"/>
              </a>
              <a href="https://www.tiktok.com/@diosatantrica" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/tiktok.png" alt="TikTok"/>
              </a>
            </div>
          </div>
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
h1,h2,h3 { margin: 0.5em 0; font-weight: 600; line-height: 1.3; }
a { text-decoration: none; color: #e75480; }
a:hover { color: #b93c64; cursor: pointer; }

/* HEADER */
.header {
  display:flex; justify-content:space-between; align-items:center;
  padding:1rem 2rem; background:#f8d7e1; position:sticky; top:0; z-index:10;
}
.logo { font-weight:700; font-size:1.3rem; color:#6b3a3a; letter-spacing:0.5px; }
.nav { display:flex; gap:1.5rem; }
.nav a { font-weight:500; transition:.3s; color:#6b3a3a; }
.hamburger { display:none; flex-direction:column; gap:4px; background:none; border:none; cursor:pointer; }
.hamburger span { width:24px; height:3px; background:#6b3a3a; border-radius:2px; }

/* HERO */
.hero { text-align:center; padding:4rem 2rem; background:linear-gradient(135deg,#f8d7e1,#fffdf9); }
.hero h1 { font-size:2.3rem; color:#6b3a3a; }
.hero h2 { color:#e75480; font-weight:500; margin-top:0.5rem; }
.hero .desc { margin:1rem auto; max-width:520px; color:#5a4a4a; font-size:1rem; line-height:1.5; }
.hero-buttons { margin-top:1.5rem; display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; }

/* BUTTONS */
.btn { 
  background:#e75480; 
  color:#fff; 
  border:none; 
  padding:.8rem 1.5rem; 
  border-radius:50px; 
  cursor:pointer; 
  transition:.3s; 
  font-weight:500;
  display:inline-block;
  text-align:center;
}
.btn:hover { background:#b93c64; }
.btn.secondary { background:#fff; color:#e75480; border:2px solid #e75480; }
.btn.small { padding:.5rem 1rem; font-size:.9rem; }

/* SECTIONS */
.section { padding:3rem 2rem; text-align:center; background:#fffdf9; }
.grid { display:grid; gap:1.5rem; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); }

/* ABOUT */
.about-wrapper { display:flex; gap:2rem; flex-wrap:wrap; max-width:1000px; margin:auto; }
.about-photo img { width:300px; height:300px; border-radius:12px; object-fit:cover; box-shadow:0 8px 20px rgba(0,0,0,0.1); }
.about-text { flex:1; text-align:left; }
.about-text h3 { color:#e75480; margin-top:1.5rem; }
.about-text ul { list-style:disc; padding-left:1.5rem; }

/* CARDS (Servicios) */
.services-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columnas */
}
@media(max-width:1024px){
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media(max-width:768px){
  .services-grid { grid-template-columns: 1fr; }
}

.card { 
  background:#fff; 
  padding:1.5rem; 
  border-radius:16px; 
  box-shadow:0 4px 12px rgba(0,0,0,.06); 
  text-align:center; 
  transition: transform .25s ease, box-shadow .25s ease;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  min-height: 260px;
}
.card .btn { margin-top:auto; align-self:center; }
.card:hover { transform: translateY(-6px); box-shadow:0 8px 20px rgba(0,0,0,.12); }
.card .icon { font-size:2rem; margin-bottom:.8rem; }
.card h3 { font-size:1.15rem; margin-bottom:0.5rem; color:#6b3a3a; }
.card p { font-size:0.95rem; color:#555; margin-bottom:0.8rem; }
.card ul { margin:0 0 1rem 0; padding-left:1.2rem; text-align:left; font-size:0.9rem; color:#444; }

/* PHOTOS */
.photos .photo { position:relative; overflow:hidden; border-radius:12px; }
.photos img { width:100%; height:250px; object-fit:cover; display:block; }
.photos .overlay { position:absolute; inset:0; background:rgba(0,0,0,.4); color:#fff; display:flex; align-items:center; justify-content:center; opacity:0; transition:.3s; }
.photos .photo:hover .overlay { opacity:1; }

/* EVENTS */
.event { display:flex; gap:1rem; align-items:center; }
.date { background:#e75480; color:#fff; padding:.5rem; border-radius:8px; text-align:center; width:60px; }
.date span { font-size:1.5rem; display:block; }

/* CONTACT */
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
  text-align: center;
}
.contact-info { max-width: 500px; }
.social-icons { display: flex; justify-content: center; gap: 1rem; margin-top: 0.5rem; }
.social-icons img { width: 36px; height: 36px; transition: transform .3s; }
.social-icons img:hover { transform: scale(1.1); }

/* FOOTER */
.footer { text-align:center; padding:1.5rem; background:#5a2f2f; color:#fff; font-size:0.9rem; }

/* WHATSAPP */
.whatsapp { 
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  background: #25d366;
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
.whatsapp img { width: 32px; height: 32px; }
.whatsapp:hover { transform: scale(1.08); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }

/* RESPONSIVE HEADER */
@media(max-width:768px){
  .nav { 
    display:none; 
    position:absolute; 
    top:60px; 
    right:0; 
    flex-direction:column; 
    background:#f8d7e1; 
    padding:1rem; 
    box-shadow:0 4px 10px rgba(0,0,0,.1); 
  }
  .nav.open { display:flex; }
  .hamburger { display:flex; }
  .hero h1 { font-size:1.8rem; }
  .hero h2 { font-size:1.1rem; }
  .contact-wrapper { flex-direction: column; text-align: center; }
}
</style>

