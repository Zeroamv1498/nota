/* ==============================================
   JARDÍN DE VANESSA - Optimizado para móvil
   ============================================== */

// ========== PARTÍCULAS BRILLANTES ==========
function createParticles() {
    const container = document.getElementById('particleContainer');
    if (!container) return;
    
    // Menos partículas en móvil para mejor rendimiento
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        let size = Math.random() * 5 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(particle);
    }
}

// ========== CONTROL DE MÚSICA ==========
let musicaActivada = false;
let audioElement = document.getElementById('cancionVanessa');
let musicBtn = document.getElementById('musicBtn');

if (audioElement) {
    audioElement.volume = 0.4; // Volumen más bajo para móvil
}

function toggleMusica() {
    if (!audioElement) {
        console.error('Elemento de audio no encontrado');
        return;
    }
    
    if (!musicaActivada) {
        let playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicaActivada = true;
                if (musicBtn) musicBtn.classList.add('playing');
                console.log('🎵 Canción reproduciéndose');
            }).catch(error => {
                console.log('Error al reproducir:', error);
                alert('Toca el botón para escuchar la música');
            });
        }
    } else {
        audioElement.pause();
        musicaActivada = false;
        if (musicBtn) musicBtn.classList.remove('playing');
    }
}

// Cuando termina la canción, volver al estado inicial
if (audioElement) {
    audioElement.addEventListener('ended', function() {
        musicaActivada = false;
        if (musicBtn) musicBtn.classList.remove('playing');
    });
}

// ========== MODAL SORPRESA ==========
function showBigSurprise() {
    const modal = document.getElementById('magicModal');
    const textEl = document.getElementById('modalText');
    if (!modal || !textEl) return;
    
    textEl.innerHTML = `
        🌟🌟🌟<br><br>
        <strong>Vanessa, eres increíblemente valiosa.</strong><br><br>
        Así como los tulipanes se abren con su propio ritmo, tú también estás floreciendo 
        a tu manera, incluso cuando el trabajo se siente pesado.<br><br>
        No importa lo que pase allá afuera,<br>
        <strong>tu esencia, tu empatía y ser luchona nunca cambia</strong>.<br><br>
        Te mando muchos besos y abrazos, todo mi amor.<br>
        🌷🐷💛🐷🌷<br><br>
        <em>Siempre, siempre estaré aquí para ti.</em>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('magicModal');
    if (modal) modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('magicModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
        
        const modalContent = document.querySelector('.modal-content-custom');
        if (modalContent) {
            modalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
});

// ========== DETECTAR DISPOSITIVOS TÁCTILES ==========
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// ========== INICIALIZAR PARTÍCULAS ==========
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Mensajes ocultos en consola
    console.log('%c🌷 Para Vanessa, la persona que ilumina la vida de sus seres queridos 🌷', 'color: #f5a07a; font-size: 14px;');
    console.log('%c💛 Eres fuerte, valiosa y única 💛', 'color: #efb28b; font-size: 12px;');
    console.log('%c📱 Esta página está optimizada para tu celular', 'color: #d9b694; font-size: 11px;');
});

// ========== RECARGAR PARTÍCULAS AL CAMBIAR ORIENTACIÓN ==========
window.addEventListener('resize', function() {
    // Opcional: reajustar partículas si es necesario
    const container = document.getElementById('particleContainer');
    if (container && window.innerWidth < 768) {
        // En móvil, las partículas ya están optimizadas
    }
});