
import { stays } from './stays.js';

window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 2500);
});

document.getElementById("logoUp").addEventListener("click", function(e) {
  e.preventDefault();
  const intro = document.getElementById("intro");
  intro.style.display = "none";
  window.location.href = "/index.html";
});

const locationToggle = document.getElementById('location-toggle');
const locationValue = document.getElementById('location-value');
const locationDropdown = document.getElementById('location-dropdown');
const guestToggle = document.getElementById('guest-toggle');
const guestValue = document.getElementById('guest-value');
const guestDropdown = document.getElementById('guest-dropdown');
const adultCount = document.getElementById('adult-count');
const childCount = document.getElementById('child-count');
const adultIncrement = document.getElementById('adult-increment');
const adultDecrement = document.getElementById('adult-decrement');
const childIncrement = document.getElementById('child-increment');
const childDecrement = document.getElementById('child-decrement');
const searchButton = document.getElementById('search-button');
const staysContainer = document.getElementById('stays-container');
const staysTitle = document.getElementById('stays-title');
const staysCount = document.getElementById('stays-count');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileFilters = document.getElementById('mobile-filters');
const closeFilters = document.getElementById('close-filters');
const mobileLocationValue = document.getElementById('mobile-location-value');
const mobileGuestValue = document.getElementById('mobile-guest-value');
const mobileAdultCount = document.getElementById('mobile-adult-count');
const mobileChildCount = document.getElementById('mobile-child-count');
const mobileAdultIncrement = document.getElementById('mobile-adult-increment');
const mobileAdultDecrement = document.getElementById('mobile-adult-decrement');
const mobileChildIncrement = document.getElementById('mobile-child-increment');
const mobileChildDecrement = document.getElementById('mobile-child-decrement');
const mobileSearchButton = document.getElementById('mobile-search-button');
const langEs = document.getElementById('lang-es');
const langEn = document.getElementById('lang-en');
const locationSearch = document.getElementById('location-search');
const locationOptions = document.getElementById('location-options');

let currentLanguage = 'en';
let selectedCity = null;
let adults = 0;
let children = 0;

const translations = {
  en: {
    location: "LOCATION",
    addLocation: "Add location",
    guests: "GUESTS",
    addGuests: "Add guests",
    adults: "Adults",
    children: "Children",
    agesAdults: "Ages 13 or above",
    agesChildren: "Ages 2-12",
    search: "Search",
    staysIn: "Stays in",
    staysCount: "stays",
    superHost: "SUPERHOST",
    editSearch: "Edit your search",
    beds: "beds",
    noStays: "No stays found"
  },
  es: {
    location: "UBICACIÓN",
    addLocation: "Añadir ubicación",
    guests: "HUÉSPEDES",
    addGuests: "Añadir huéspedes",
    adults: "Adultos",
    children: "Niños",
    agesAdults: "Edad 13 o más",
    agesChildren: "Edad 2-12",
    search: "Buscar",
    staysIn: "Estancias en",
    staysCount: "estancias",
    superHost: "SUPERANFITRIÓN",
    editSearch: "Editar búsqueda",
    beds: "camas",
    noStays: "No se encontraron estancias"
  }
};

function init() {
  setupLocationSearch();
  updateGuestText();
  renderStays();
  setLanguage(currentLanguage);
  setupEventListeners();
}

function setupEventListeners() {
  locationToggle.addEventListener('click', toggleLocationDropdown);
  guestToggle.addEventListener('click', toggleGuestDropdown);

  adultIncrement.addEventListener('click', () => updateGuests('adult', 1));
  adultDecrement.addEventListener('click', () => updateGuests('adult', -1));
  childIncrement.addEventListener('click', () => updateGuests('child', 1));
  childDecrement.addEventListener('click', () => updateGuests('child', -1));

  searchButton.addEventListener('click', applyFilters);

  mobileMenuButton.addEventListener('click', () => {
    mobileFilters.classList.remove('hidden');
    document.body.classList.add('modal-open');
    updateMobileFilters();
  });

  closeFilters.addEventListener('click', () => {
    mobileFilters.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  mobileAdultIncrement.addEventListener('click', () => updateMobileGuests('adult', 1));
  mobileAdultDecrement.addEventListener('click', () => updateMobileGuests('adult', -1));
  mobileChildIncrement.addEventListener('click', () => updateMobileGuests('child', 1));
  mobileChildDecrement.addEventListener('click', () => updateMobileGuests('child', -1));

  mobileSearchButton.addEventListener('click', applyMobileFilters);

  document.getElementById('mobile-location-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const mobileLocationOptions = document.getElementById('mobile-location-options');
    mobileLocationOptions.classList.toggle('hidden');
  });

  langEs.addEventListener('click', () => setLanguage('es'));
  langEn.addEventListener('click', () => setLanguage('en'));

  document.addEventListener('click', (e) => {
    if (!locationToggle.contains(e.target) && !locationDropdown.contains(e.target)) {
      locationDropdown.classList.add('hidden');
    }
    if (!guestToggle.contains(e.target) && !guestDropdown.contains(e.target)) {
      guestDropdown.classList.add('hidden');
    }
  });
}

function setupLocationSearch() {
  locationSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cities = Array.from(new Set(stays.map(stay => stay.city)));
    const filteredCities = cities.filter(city => 
      city.toLowerCase().includes(searchTerm)
    );

    renderCityOptions(filteredCities);
  });
}

function renderCityOptions(cities) {
  locationOptions.innerHTML = cities.map(city => `
    <div class="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer city-option">
      <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      <span class="city-name">${city}</span>
    </div>
  `).join('');

  document.querySelectorAll('.city-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const cityName = e.currentTarget.querySelector('.city-name').textContent;
      selectedCity = cityName;
      locationValue.textContent = cityName;
      mobileLocationValue.textContent = cityName;
      locationDropdown.classList.add('hidden');
      locationSearch.value = '';
      locationOptions.innerHTML = '';
    });
  });
}

function renderMobileCities() {
  const cities = Array.from(new Set(stays.map(stay => stay.city)));
  const mobileLocationOptions = document.getElementById('mobile-location-options');

  mobileLocationOptions.innerHTML = cities.map(city => `
    <div class="flex items-center p-3 hover:bg-gray-100 rounded cursor-pointer mobile-city-option">
      <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      <span class="mobile-city-name">${city}</span>
    </div>
  `).join('');

  document.querySelectorAll('.mobile-city-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const cityName = e.currentTarget.querySelector('.mobile-city-name').textContent;
      selectedCity = cityName;
      mobileLocationValue.textContent = cityName;
      document.getElementById('mobile-location-options').classList.add('hidden');
    });
  });
}

function toggleLocationDropdown(e) {
  e.stopPropagation();
  guestDropdown.classList.add('hidden');
  locationDropdown.classList.toggle('hidden');
  if (!locationDropdown.classList.contains('hidden')) {
    locationSearch.focus();
  }
}

function toggleGuestDropdown(e) {
  e.stopPropagation();
  locationDropdown.classList.add('hidden');
  guestDropdown.classList.toggle('hidden');
}

function updateGuests(type, change) {
  if (type === 'adult') {
    adults = Math.max(0, adults + change);
    adultCount.textContent = adults;
    mobileAdultCount.textContent = adults;
  } else {
    children = Math.max(0, children + change);
    childCount.textContent = children;
    mobileChildCount.textContent = children;
  }
  updateGuestText();
}

function updateMobileGuests(type, change) {
  updateGuests(type, change);
  updateGuestText();
}

function updateGuestText() {
  const totalGuests = adults + children;
  const guestText = totalGuests === 0
    ? translations[currentLanguage].addGuests
    : `${totalGuests} ${translations[currentLanguage].guests.toLowerCase()}`;

  guestValue.textContent = guestText;
  mobileGuestValue.textContent = guestText;
}

function updateMobileFilters() {
  mobileAdultCount.textContent = adults;
  mobileChildCount.textContent = children;
  mobileLocationValue.textContent = selectedCity || translations[currentLanguage].addLocation;
  mobileGuestValue.textContent = (adults + children) === 0 
    ? translations[currentLanguage].addGuests 
    : `${adults + children} ${translations[currentLanguage].guests.toLowerCase()}`;
}

function applyFilters() {
  locationDropdown.classList.add('hidden');
  guestDropdown.classList.add('hidden');
  renderStays();
}

function applyMobileFilters() {
  mobileFilters.classList.add('hidden');
  document.body.classList.remove('modal-open');
  renderStays();
}

function renderStays() {
  const filteredStays = stays.filter(stay => {
    const cityMatch = !selectedCity || stay.city === selectedCity;
    const guestMatch = (adults + children) === 0 || stay.maxGuests >= (adults + children);
    return cityMatch && guestMatch;
  });

  staysContainer.innerHTML = filteredStays.length > 0 ? filteredStays.map(stay => `
    <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src="${stay.photo}" alt="${stay.title[currentLanguage]}" class="w-full h-48 object-cover" loading="lazy">
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <div class="flex items-center flex-wrap gap-1">
            ${stay.superHost ? `<span class="text-xs font-bold border border-gray-800 rounded-full px-2 py-1 mr-1">${translations[currentLanguage].superHost}</span>` : ''}
            <span class="text-sm text-gray-500">${stay.type[currentLanguage]}${stay.beds ? ` · ${stay.beds} ${translations[currentLanguage].beds}` : ''}</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-sm">${stay.rating}</span>
          </div>
        </div>
        <h3 class="font-medium text-gray-900">${stay.title[currentLanguage]}</h3>
      </div>
    </div>
  `).join('') : `
    <div class="col-span-full text-center py-10">
      <p class="text-gray-500">${translations[currentLanguage].noStays}</p>
    </div>
  `;

  staysCount.textContent = filteredStays.length > 12
    ? `12+ ${translations[currentLanguage].staysCount}`
    : `${filteredStays.length} ${translations[currentLanguage].staysCount}`;

  staysTitle.textContent = selectedCity
    ? `${translations[currentLanguage].staysIn} ${selectedCity}`
    : `${translations[currentLanguage].staysIn} Finland`;
}

function setLanguage(lang) {
  currentLanguage = lang;

  document.querySelector('#location-toggle p:first-child').textContent = translations[lang].location;
  locationValue.textContent = selectedCity || translations[lang].addLocation;
  document.querySelector('#guest-toggle p:first-child').textContent = translations[lang].guests;
  updateGuestText();

  document.querySelectorAll('#guest-dropdown p')[0].textContent = translations[lang].adults;
  document.querySelectorAll('#guest-dropdown p')[1].textContent = translations[lang].agesAdults;
  document.querySelectorAll('#guest-dropdown p')[2].textContent = translations[lang].children;
  document.querySelectorAll('#guest-dropdown p')[3].textContent = translations[lang].agesChildren;

  document.querySelector('#mobile-filters h3').textContent = translations[lang].editSearch;
  document.querySelectorAll('#mobile-filters p')[0].textContent = translations[lang].location;
  mobileLocationValue.textContent = selectedCity || translations[lang].addLocation;
  document.querySelectorAll('#mobile-filters p')[1].textContent = translations[lang].guests;

  document.querySelectorAll('#mobile-filters p')[2].textContent = translations[lang].adults;
  document.querySelectorAll('#mobile-filters p')[3].textContent = translations[lang].agesAdults;
  document.querySelectorAll('#mobile-filters p')[4].textContent = translations[lang].children;
  document.querySelectorAll('#mobile-filters p')[5].textContent = translations[lang].agesChildren;

  mobileSearchButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    ${translations[lang].search}
  `;

  renderStays();
}

document.addEventListener('DOMContentLoaded', init);