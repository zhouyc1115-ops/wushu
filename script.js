const dialog = document.querySelector('#orderDialog');
const form = document.querySelector('#orderForm');
const successState = document.querySelector('#successState');
const content = window.siteContent || {};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function productLabel(productName, englishName = '') {
  return englishName ? `${productName} ${englishName}` : productName;
}

function renderContent() {
  if (!content.shopName) return;

  document.title = content.pageTitle || document.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && content.pageDescription) {
    metaDescription.setAttribute('content', content.pageDescription);
  }

  document.querySelectorAll('.brand span:last-child').forEach((brand) => {
    brand.innerHTML = `${content.shopName}<small>${content.shopNameEn || ''}</small>`;
  });
  setText('footer p:first-of-type', content.footerText);

  const hero = content.hero || {};
  setText('.eyebrow', hero.eyebrow);
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.innerHTML = `<span></span> ${hero.eyebrow || ''}`;
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.innerHTML = `${hero.titleLine1 || ''}<br><em>${hero.titleLine2 || ''}</em>`;
  setText('.hero-slogan', hero.slogan);
  setText('.hero-text', hero.text);
  setText('.hero-proof strong', hero.proofTitle);
  setText('.hero-proof span', hero.proofText);
  setText('.weapon-card h2', hero.featuredName);
  setText('.weapon-card p', hero.featuredEnglish);
  setText('.hero-seal', content.shopName.slice(0, 2));

  renderCategories();
  renderProducts();
  renderCatalog();
  renderServicePoints();
  renderOrderOptions();
}

function renderCategories() {
  const categories = document.querySelector('.shop-categories');
  if (!categories || !Array.isArray(content.categories)) return;
  categories.innerHTML = content.categories.map((item) => `
    <a href="${item.link}">
      <strong>${item.number}</strong>
      <span>${item.name}<small>${item.english}</small></span>
    </a>
  `).join('');
}

function renderProducts() {
  const productGrid = document.querySelector('.product-grid');
  if (!productGrid || !Array.isArray(content.products)) return;
  productGrid.innerHTML = content.products.map((product) => {
    const imageStyle = product.image ? ` style="background-image:linear-gradient(0deg,rgba(0,0,0,.25),transparent 60%),url('${product.image}')"` : '';
    const tag = product.tag ? `<p class="tag">${product.tag}</p>` : '';
    return `
      <article class="product-card ${product.featured ? 'featured' : ''} reveal">
        <div class="product-art ${product.art || 'art-broadsword'}"${imageStyle} aria-hidden="true"></div>
        ${tag}
        <p class="product-en">${product.english || ''}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row"><strong>${product.price}</strong><span>${product.note || ''}</span></div>
        <button class="card-link" data-product="${productLabel(product.name, product.english)}">咨询这件商品 <span>→</span></button>
      </article>
    `;
  }).join('');
}

function renderCatalog() {
  const catalog = document.querySelector('.catalog-list');
  if (!catalog || !Array.isArray(content.catalogItems)) return;
  catalog.innerHTML = content.catalogItems.map((item) => `
    <article${item.id ? ` id="${item.id}"` : ''}>
      <span>${item.number}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <button data-product="${item.name}">询价</button>
    </article>
  `).join('');
}

function renderServicePoints() {
  const servicePoints = document.querySelector('.service-points');
  if (!servicePoints || !Array.isArray(content.servicePoints)) return;
  servicePoints.innerHTML = content.servicePoints.map((point) => `<span>${point}</span>`).join('');
}

function renderOrderOptions() {
  const productSelect = form.elements.product;
  if (!productSelect || !Array.isArray(content.orderOptions)) return;
  productSelect.innerHTML = '<option value="">请选择商品</option>';
  content.orderOptions.forEach((optionText) => {
    const option = document.createElement('option');
    option.textContent = optionText;
    option.value = optionText;
    productSelect.append(option);
  });
}

function openOrder(product = '') {
  form.hidden = false;
  successState.hidden = true;
  if (product) {
    const option = [...form.elements.product.options].find((item) => {
      return item.value === product || product.includes(item.value) || item.value.includes(product);
    });
    form.elements.product.value = option ? option.value : product;
  }
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}

function closeOrder() {
  dialog.close();
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-order]').forEach((button) => {
  button.addEventListener('click', () => openOrder());
});

document.addEventListener('click', (event) => {
  const productButton = event.target.closest('[data-product]');
  if (productButton) openOrder(productButton.dataset.product);
});

document.querySelectorAll('[data-close-order]').forEach((button) => {
  button.addEventListener('click', closeOrder);
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeOrder();
});

dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
});

form.addEventListener('submit', () => {
  const submittedAt = document.querySelector('#submittedAt');
  if (submittedAt) {
    submittedAt.value = new Date().toLocaleString();
  }

  const enquiry = Object.fromEntries(new FormData(form));
  enquiry.createdAt = new Date().toISOString();

  const enquiries = JSON.parse(localStorage.getItem('martial-shop-enquiries') || '[]');
  enquiries.push(enquiry);
  localStorage.setItem('martial-shop-enquiries', JSON.stringify(enquiries));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

renderContent();
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
