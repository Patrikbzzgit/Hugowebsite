// Load all data files and render the page
async function loadData() {
  try {
    const [profile, results, videos, timeline, coaches, gallery] = await Promise.all([
      fetch('data/profile.json').then(r => r.json()),
      fetch('data/results.json').then(r => r.json()),
      fetch('data/videos.json').then(r => r.json()),
      fetch('data/timeline.json').then(r => r.json()),
      fetch('data/coaches.json').then(r => r.json()),
      fetch('data/gallery.json').then(r => r.json())
    ]);

    renderProfile(profile);
    renderResults(results);
    renderVideos(videos);
    renderTimeline(timeline);
    renderCoaches(coaches);
    renderGallery(gallery);
    setupInteractivity();
    updateLastModified();
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

function renderProfile(data) {
  document.getElementById('eyebrow').textContent = `${data.title} · ${data.location}`;
  document.getElementById('playerName').innerHTML = `${data.name}<br>${data.lastName}`;
  document.getElementById('tagline').textContent = data.tagline;
  document.getElementById('heroImage').src = data.heroImage;
  document.getElementById('heroImage').alt = data.heroImageAlt;
  document.getElementById('bioParagraph').textContent = data.bio;
  document.getElementById('ambitionParagraph').textContent = data.ambition;
  document.getElementById('tennisAustraliaLink').href = data.tennisAustraliaProfile;
  document.getElementById('instagramLink').href = data.instagram;
  document.getElementById('recruitInstagram').href = data.instagram;
  document.getElementById('recruitTennisAus').href = data.tennisAustraliaProfile;
  
  // Add email link if available
  if (data.email) {
    const emailLink = document.getElementById('recruitEmail');
    if (emailLink) {
      emailLink.href = `mailto:${data.email}`;
    }
  }

  // Render hero stats
  const statsHtml = data.stats.map(stat => `
    <div>
      <strong>${stat.value}</strong>
      <span>${stat.label} ${stat.detail ? '· ' + stat.detail : ''}</span>
    </div>
  `).join('');
  document.getElementById('heroStats').innerHTML = statsHtml;

  // Render interest chips
  const chipsHtml = data.interests.map(interest => `<span>${interest}</span>`).join('');
  document.getElementById('interestChips').innerHTML = chipsHtml;
}

function renderResults(data) {
  document.getElementById('resultsTitle').textContent = data.title;
  const resultHtml = data.results.map(result => `
    <article>
      <b>${String(result.id).padStart(2, '0')}</b>
      <h3>${result.title}</h3>
      <p>${result.detail}</p>
    </article>
  `).join('');
  document.getElementById('resultGrid').innerHTML = resultHtml;
}

function renderVideos(data) {
  document.getElementById('videoTitle').textContent = data.title;
  document.getElementById('videoDescription').textContent = data.description;

  const videoHtml = data.videos.map(video => `
    <article>
      <div class="video-embed">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/${video.youtubeId}" 
          title="${video.title}"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </article>
  `).join('');
  document.getElementById('videoGrid').innerHTML = videoHtml;
}

function renderTimeline(data) {
  document.getElementById('timelineTitle').textContent = data.title;
  const timelineHtml = data.timeline.map(item => `
    <div class="timeline-item ${item.isChampion ? 'champion' : ''}">
      <h3>${item.year}</h3>
      <p>${item.milestone}</p>
      ${item.utr ? `<strong>UTR ${item.utr}</strong>` : ''}
    </div>
  `).join('');
  document.getElementById('timelineGrid').innerHTML = timelineHtml;
}

function renderCoaches(data) {
  document.getElementById('coachesTitle').textContent = data.title;
  const coachHtml = data.coaches.map(coach => `
    <article class="coach-card">
      <h3>${coach.title}</h3>
      <p>${coach.description}</p>
    </article>
  `).join('');
  document.getElementById('coachGrid').innerHTML = coachHtml;
}

function renderGallery(data) {
  const galleryHtml = data.photos.map(photo => `
    <button class="photo" data-src="${photo.src}" aria-label="${photo.alt}">
      <img src="${photo.src}" alt="${photo.alt}">
    </button>
  `).join('');
  
  // Find or create gallery section
  let gallerySection = document.querySelector('.gallery');
  if (!gallerySection) {
    gallerySection = document.createElement('section');
    gallerySection.className = 'gallery';
    gallerySection.id = 'gallery';
    const mainContent = document.querySelector('section.recruit');
    mainContent.parentNode.insertBefore(gallerySection, mainContent);
  }
  
  const masonry = document.createElement('div');
  masonry.className = 'masonry';
  masonry.innerHTML = galleryHtml;
  
  // Clear existing content but keep header
  while (gallerySection.firstChild && gallerySection.firstChild.className !== 'masonry') {
    if (!gallerySection.firstChild.classList.contains('kicker') && !gallerySection.firstChild.classList.contains('masonry')) {
      break;
    }
  }
  gallerySection.appendChild(masonry);
}

function setupInteractivity() {
  const menu = document.querySelector('#menu');
  const links = document.querySelector('#links');

  menu.onclick = () => links.classList.toggle('open');
  links.querySelectorAll('a').forEach(a => a.onclick = () => links.classList.remove('open'));

  const box = document.querySelector('#lightbox');
  const large = box.querySelector('img');

  document.querySelectorAll('.photo').forEach(b => {
    b.onclick = () => {
      large.src = b.dataset.src;
      box.showModal();
    };
  });

  document.querySelector('#close').onclick = () => box.close();
  box.onclick = e => {
    if (e.target === box) box.close();
  };
}

function updateLastModified() {
  const today = new Date();
  const formatted = today.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('lastUpdated').textContent = formatted;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadData);
