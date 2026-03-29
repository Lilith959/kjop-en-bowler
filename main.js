const app = document.getElementById('app')

// Sample data for subscription plans
const plans = [
  {
    id: 1,
    name: 'Bronze Detective',
    price: '$4.99',
    period: 'per month',
    features: [
      '1 new detective story per month',
      'Access to story archive (3 months)',
      'Monthly mystery newsletter'
    ],
    featured: false
  },
  {
    id: 2,
    name: 'Silver Investigator',
    price: '$9.99',
    period: 'per month',
    features: [
      '2 new detective stories per month',
      'Access to full story archive',
      'Exclusive merchandise discount (10%)',
      'Early access to new releases',
      'Monthly mystery newsletter'
    ],
    featured: true
  },
  {
    id: 3,
    name: 'Gold Case Master',
    price: '$19.99',
    period: 'per month',
    features: [
      '4 new detective stories per month',
      'Full story archive access',
      'Exclusive merchandise discount (25%)',
      'Premium merch items first access',
      'Author Q&A sessions',
      'Personal case notebook tool'
    ],
    featured: false
  }
]

const merchandise = [
  { id: 1, name: 'Detective Badge Pin', image: '🎖️' },
  { id: 2, name: 'Mystery Mug', image: '☕' },
  { id: 3, name: 'Case Files Notebook', image: '📓' },
  { id: 4, name: 'Detective Hat', image: '🎩' },
  { id: 5, name: 'Investigator Jacket', image: '🧥' },
  { id: 6, name: 'Mystery Box (Monthly)', image: '📦' }
]

// Render header
function renderHeader() {
  const header = document.createElement('header')
  header.innerHTML = `
    <nav>
      <div class="logo">🕵️ Detective Stories & Co.</div>
      <ul>
        <li><a href="#subscriptions">Subscriptions</a></li>
        <li><a href="#merchandise">Merchandise</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  `
  return header
}

// Render hero section
function renderHero() {
  const hero = document.createElement('section')
  hero.className = 'hero'
  hero.innerHTML = `
    <h1>Unravel Mystery. Collect Stories.</h1>
    <p>Premium detective stories and exclusive merchandise delivered monthly</p>
    <button class="cta-button">Start Your Investigation</button>
  `
  return hero
}

// Render subscription plans
function renderSubscriptions() {
  const section = document.createElement('section')
  section.id = 'subscriptions'
  section.innerHTML = '<h2>Choose Your Detective Level</h2>'
  
  const plansContainer = document.createElement('div')
  plansContainer.className = 'subscription-plans'
  
  plans.forEach(plan => {
    const card = document.createElement('div')
    card.className = `plan-card ${plan.featured ? 'featured' : ''}`
    card.innerHTML = `
      <h2>${plan.name}</h2>
      <div class="price">${plan.price}</div>
      <div class="price-period">${plan.period}</div>
      <ul class="features">
        ${plan.features.map(f => `<li>✓ ${f}</li>`).join('')}
      </ul>
      <button class="cta-button">Subscribe Now</button>
    `
    plansContainer.appendChild(card)
  })
  
  section.appendChild(plansContainer)
  return section
}

// Render merchandise section
function renderMerchandise() {
  const section = document.createElement('section')
  section.id = 'merchandise'
  section.innerHTML = '<h2>Exclusive Detective Merchandise</h2>'
  
  const merchGrid = document.createElement('div')
  merchGrid.className = 'merch-grid'
  
  merchandise.forEach(item => {
    const card = document.createElement('div')
    card.className = 'merch-item'
    card.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">${item.image}</div>
      <h3>${item.name}</h3>
      <p style="color: var(--secondary-color); font-weight: bold; margin-top: 0.5rem;">Member Exclusive</p>
      <button class="cta-button" style="background-color: var(--accent-color); width: 100%; margin-top: 1rem;">View Details</button>
    `
    merchGrid.appendChild(card)
  })
  
  section.appendChild(merchGrid)
  return section
}

// Render footer
function renderFooter() {
  const footer = document.createElement('footer')
  footer.innerHTML = `
    <p>&copy; 2024 Detective Stories & Co. All rights reserved.</p>
    <p>Your source for mystery, intrigue, and detective adventures.</p>
  `
  return footer
}

// Main render function
function render() {
  app.innerHTML = ''
  app.appendChild(renderHeader())
  app.appendChild(renderHero())
  app.appendChild(renderSubscriptions())
  app.appendChild(renderMerchandise())
  app.appendChild(renderFooter())
  
  // Add event listeners
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = e.target.textContent
      alert(`Clicked: ${text}`)
    })
  })
}

render()
