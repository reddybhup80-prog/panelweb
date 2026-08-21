document.addEventListener('DOMContentLoaded', () => {
  // Target WhatsApp Number
  const WHATSAPP_PHONE = '17788260166';

  // ===== MODAL =====
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModal');
  const modalExploreBtn = document.getElementById('modalExploreBtn');

  if (modal && closeBtn) {
    if (!sessionStorage.getItem('reddy_modal_seen')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }

    const dismissModal = () => {
      modal.classList.add('hidden');
      sessionStorage.setItem('reddy_modal_seen', '1');
    };

    closeBtn.addEventListener('click', dismissModal);
    modalExploreBtn?.addEventListener('click', dismissModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) dismissModal();
    });
  }

  // ===== HEADER SCROLL =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ===== MOBILE NAV DRAWER & TAP TO CLOSE =====
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('nav');
  const navBackdrop = document.getElementById('navBackdrop');
  const navClose = document.getElementById('navClose');

  const openMobileNav = () => {
    nav?.classList.add('open');
    navBackdrop?.classList.add('open');
    toggle?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    nav?.classList.remove('open');
    navBackdrop?.classList.remove('open');
    toggle?.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav?.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMobileNav();
  });

  navBackdrop?.addEventListener('click', closeMobileNav);

  // Close when clicking anywhere outside nav on mobile
  document.addEventListener('click', (e) => {
    if (nav?.classList.contains('open') && !nav.contains(e.target) && !toggle?.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav?.classList.contains('open')) {
      closeMobileNav();
    }
  });

  nav?.querySelectorAll('.nav-links-wrap a, a').forEach(link => {
    link.addEventListener('click', () => closeMobileNav());
  });

  // ===== COUNTER ANIMATION =====
  const counters = document.querySelectorAll('.stat-num');
  const animateCount = (el) => {
    const target = +el.dataset.count;
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));

  // ===== SITES & SELECTION STATE =====
  const sites = typeof getSites === 'function' ? getSites() : (typeof DEFAULT_SITES !== 'undefined' ? DEFAULT_SITES : []);
  let currentFilter = 'all';
  let currentSort = 'name';
  let searchQuery = '';

  // Selected sites state
  const selectedSiteIds = new Set();
  const customBrands = []; // array of custom strings

  const grid = document.getElementById('sitesGrid');
  const noResults = document.getElementById('noResults');
  const searchInput = document.getElementById('siteSearch');
  const mobileNavSearch = document.getElementById('mobileNavSearch');
  const sectionSiteSearch = document.getElementById('sectionSiteSearch');
  const sectionSearchClear = document.getElementById('sectionSearchClear');
  const sortSelect = document.getElementById('sortSelect');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const selectAllBtn = document.getElementById('selectAllBtn');
  const clearSelectionBtn = document.getElementById('clearSelectionBtn');

  // WhatsApp form elements
  const headerSelectedCount = document.getElementById('headerSelectedCount');
  const formSelectedCount = document.getElementById('formSelectedCount');
  const selectedChips = document.getElementById('selectedChips');
  const chipsEmpty = document.getElementById('chipsEmpty');
  const clearChipsBtn = document.getElementById('clearChipsBtn');
  const customBrandInput = document.getElementById('customBrandInput');
  const addCustomBrandBtn = document.getElementById('addCustomBrandBtn');

  const userNameInput = document.getElementById('userName');
  const userPhoneInput = document.getElementById('userPhone');
  const panelRoleSelect = document.getElementById('panelRole');
  const targetShareSelect = document.getElementById('targetShare');
  const userMessageInput = document.getElementById('userMessage');
  const functionCheckboxes = document.querySelectorAll('input[name="functions"]');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const messagePreview = document.getElementById('messagePreview');
  const previewTime = document.getElementById('previewTime');

  // Floating action bar elements
  const floatingActionBar = document.getElementById('floatingActionBar');
  const fabCount = document.getElementById('fabCount');
  const fabPreviewNames = document.getElementById('fabPreviewNames');
  const fabClearBtn = document.getElementById('fabClearBtn');
  const fabSendBtn = document.getElementById('fabSendBtn');

  function filterSites() {
    let list = [...sites];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.url.toLowerCase().includes(q));
    }

    // Share filter
    if (currentFilter === 'low') list = list.filter(s => s.share <= 10);
    else if (currentFilter === 'mid') list = list.filter(s => s.share > 10 && s.share <= 15);
    else if (currentFilter === 'high') list = list.filter(s => s.share > 15);

    // Sort
    if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === 'share-asc') list.sort((a, b) => a.share - b.share);
    else if (currentSort === 'share-desc') list.sort((a, b) => b.share - a.share);

    return list;
  }

  function getSelectedItems() {
    const items = [];
    selectedSiteIds.forEach(id => {
      const site = sites.find(s => s.id === id);
      if (site) {
        items.push({
          id: site.id,
          name: site.name,
          url: site.url,
          share: site.share,
          logo: site.logo || (typeof getBrandLogo === 'function' ? getBrandLogo(site.name || site.url) : 'assets/logo.png'),
          isCustom: false
        });
      }
    });

    customBrands.forEach((name, idx) => {
      const logo = typeof getBrandLogo === 'function' ? getBrandLogo(name) : 'assets/logo.png';
      items.push({
        id: `custom-${idx}`,
        name: name,
        url: name.includes('.') ? (name.startsWith('http') ? name : `http://${name}`) : 'Custom Request',
        share: 'Custom',
        logo: logo,
        isCustom: true,
        customIdx: idx
      });
    });

    return items;
  }

  function getSelectedFunctions() {
    const selected = [];
    document.querySelectorAll('input[name="functions"]:checked').forEach(cb => {
      selected.push(cb.value);
    });
    return selected;
  }

  function toggleSiteSelection(siteId) {
    if (selectedSiteIds.has(siteId)) {
      selectedSiteIds.delete(siteId);
    } else {
      selectedSiteIds.add(siteId);
    }
    updateUIState();
  }

  function renderSites() {
    if (!grid) return;
    const list = filterSites();
    grid.innerHTML = '';

    const visibleSitesCount = document.getElementById('visibleSitesCount');
    if (visibleSitesCount) {
      visibleSitesCount.textContent = list.length;
    }

    if (list.length === 0) {
      if (noResults) noResults.hidden = false;
      return;
    }
    if (noResults) noResults.hidden = true;

    list.forEach((site, i) => {
      const isSelected = selectedSiteIds.has(site.id);
      const card = document.createElement('div');
      card.className = `site-card ${isSelected ? 'selected' : ''} ${site.isVip ? 'vip-brand-card' : ''}`;
      card.dataset.id = site.id;
      card.style.animationDelay = `${Math.min(i * 0.015, 0.25)}s`;

      const visitUrl = site.url.startsWith('http') ? site.url : 'https://' + site.url;
      const logoUrl = site.logo || (typeof getBrandLogo === 'function' ? getBrandLogo(site.name || site.url) : 'assets/logo.png');

      const vipBadgeHtml = site.isVip ? `<div class="site-vip-ribbon"><i class="fas fa-crown"></i> ${site.vipType || 'VIP Portal'}</div>` : '';

      card.innerHTML = `
        <div class="site-card-frame">
          ${vipBadgeHtml}
          <div class="site-select-badge">
            <i class="fas ${isSelected ? 'fa-check-circle' : 'fa-circle'}"></i>
            <span>${isSelected ? 'Selected' : 'Select'}</span>
          </div>
          <div class="site-brand-showcase">
            <img src="${logoUrl}" alt="${escapeHtml(site.name)}" class="site-showcase-img" onerror="this.onerror=null; this.src='assets/logo.png';" loading="lazy" />
          </div>
          <div class="site-share-tag">${site.share}% Share</div>
        </div>
        <div class="site-card-content">
          <div class="site-name">${escapeHtml(site.name)}</div>
          <div class="site-meta"><i class="fas fa-percentage gold"></i> Sharing: <strong>${site.share}%</strong> (Lowest Deal)</div>
          <div class="site-card-actions">
            <button type="button" class="btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'} btn-toggle-select">
              <i class="fas ${isSelected ? 'fa-check' : 'fa-plus'}"></i> ${isSelected ? 'Selected' : 'Select Brand'}
            </button>
            <a href="${visitUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline btn-visit" title="Visit ${escapeHtml(site.name)}" onclick="event.stopPropagation();">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-visit')) return;
        toggleSiteSelection(site.id);
      });

      grid.appendChild(card);
    });
  }

  function renderSelectedChips() {
    const selected = getSelectedItems();
    const count = selected.length;

    if (headerSelectedCount) headerSelectedCount.textContent = count;
    if (formSelectedCount) formSelectedCount.textContent = count;
    if (fabCount) fabCount.textContent = count;

    if (count === 0) {
      selectedChips.innerHTML = '';
      if (chipsEmpty) chipsEmpty.style.display = 'flex';
      if (floatingActionBar) floatingActionBar.classList.remove('visible');
      if (fabPreviewNames) fabPreviewNames.textContent = 'No brands selected';
    } else {
      if (chipsEmpty) chipsEmpty.style.display = 'none';
      if (floatingActionBar) floatingActionBar.classList.add('visible');

      const names = selected.map(s => s.name);
      if (fabPreviewNames) {
        fabPreviewNames.textContent = names.slice(0, 3).join(', ') + (names.length > 3 ? ` +${names.length - 3} more` : '');
      }

      selectedChips.innerHTML = selected.map(item => `
        <div class="brand-chip">
          <img src="${item.logo || 'assets/logo.png'}" alt="" class="chip-brand-img" onerror="this.onerror=null; this.src='assets/logo.png';" />
          <span class="chip-name">${escapeHtml(item.name)}</span>
          <span class="chip-share">${item.isCustom ? 'Custom' : item.share + '%'}</span>
          <button type="button" class="chip-remove" data-id="${item.id}" data-custom="${item.isCustom}" data-idx="${item.customIdx ?? ''}" aria-label="Remove">&times;</button>
        </div>
      `).join('');

      selectedChips.querySelectorAll('.chip-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isCustom = btn.dataset.custom === 'true';
          if (isCustom) {
            const idx = parseInt(btn.dataset.idx, 10);
            customBrands.splice(idx, 1);
          } else {
            const id = parseInt(btn.dataset.id, 10);
            selectedSiteIds.delete(id);
          }
          updateUIState();
        });
      });
    }
  }

  // Generates clean, professional WhatsApp text payload
  function generateWhatsAppRawMessage() {
    const selected = getSelectedItems();
    const userName = (userNameInput?.value || '').trim() || 'Not specified (Direct Inquiry)';
    const userPhone = (userPhoneInput?.value || '').trim() || 'Not specified';
    const role = panelRoleSelect?.value || 'Super Admin Panel';
    const shareExpectation = targetShareSelect?.value || 'Lowest Available (7% - 10%)';
    const customNotes = (userMessageInput?.value || '').trim() || 'Please provide rates, demo links, and instant setup details.';
    const functions = getSelectedFunctions();

    let brandListText = '';
    if (selected.length === 0) {
      brandListText = '*(No specific brands selected - Please share complete catalog)*';
    } else {
      brandListText = selected.map((item, index) => {
        const shareTag = item.isCustom ? '' : ` (${item.share}% Share)`;
        return `${index + 1}. *${item.name}*${shareTag}\n   - ${item.url}`;
      }).join('\n');
    }

    let functionsText = '';
    if (functions.length === 0) {
      functionsText = '- All Standard White Label Capabilities';
    } else {
      functionsText = functions.map(f => `- ${f}`).join('\n');
    }

    const message =
`*REDDYPANEL.IN — WHITE LABEL INQUIRY*
----------------------------------------

*Client Name:* ${userName}
*Client Phone:* ${userPhone}
*Hierarchy Role:* ${role}
*Target Sharing:* ${shareExpectation}

*Selected Brands & Links (${selected.length}):*
${brandListText}

*Required Functions & Integrations:*
${functionsText}

*Additional Notes & Requirements:*
${customNotes}

----------------------------------------
*Source:* ReddyPanel.in Official Support`;

    return message;
  }

  // Renders authentic, rich WhatsApp Chat UI preview (zero raw unrendered asterisks or broken emojis)
  function renderLiveChatPreview() {
    if (!messagePreview) return;

    const selected = getSelectedItems();
    const userName = escapeHtml((userNameInput?.value || '').trim() || 'Not provided');
    const userPhone = escapeHtml((userPhoneInput?.value || '').trim() || 'Not provided');
    const role = escapeHtml(panelRoleSelect?.value || 'Super Admin Panel');
    const shareExpectation = escapeHtml(targetShareSelect?.value || 'Lowest Available (7% - 10%)');
    const customNotes = escapeHtml((userMessageInput?.value || '').trim() || 'Please provide rates, demo links, and instant setup details.');
    const functions = getSelectedFunctions();

    let brandsHtml = '';
    if (selected.length === 0) {
      brandsHtml = `<div class="chat-empty-brands"><i class="fas fa-info-circle"></i> No specific brands selected yet — all available catalogs will be requested.</div>`;
    } else {
      brandsHtml = `<div class="chat-brands-list">` +
        selected.map((item, index) => `
          <div class="chat-brand-item">
            <img src="${item.logo || 'assets/logo.png'}" alt="${escapeHtml(item.name)}" class="chat-brand-thumb" onerror="this.onerror=null; this.src='assets/logo.png';" />
            <span class="chat-brand-num">${index + 1}.</span>
            <div class="chat-brand-info">
              <div class="chat-brand-title"><strong>${escapeHtml(item.name)}</strong> <span class="chat-share-badge">${item.isCustom ? 'Custom' : item.share + '% Share'}</span></div>
              <a class="chat-brand-link" href="${item.url.startsWith('http') ? item.url : 'http://' + item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.url)}</a>
            </div>
          </div>
        `).join('') +
        `</div>`;
    }

    let functionsHtml = '';
    if (functions.length === 0) {
      functionsHtml = `<div class="chat-empty-brands">Standard White Label Capabilities</div>`;
    } else {
      functionsHtml = `<div class="chat-functions-list">` +
        functions.map(f => `<span class="chat-func-pill"><i class="fas fa-check-circle"></i> ${escapeHtml(f)}</span>`).join('') +
        `</div>`;
    }

    messagePreview.innerHTML = `
      <div class="chat-msg-header">
        <span class="chat-badge-icon"><i class="fas fa-crown gold"></i></span>
        <div class="chat-msg-title">ReddyPanel.in White Label Inquiry</div>
      </div>

      <div class="chat-msg-fields">
        <div class="chat-field"><span class="chat-label"><i class="fas fa-user-circle"></i> Client Name:</span> <span class="chat-val">${userName}</span></div>
        <div class="chat-field"><span class="chat-label"><i class="fas fa-phone-alt"></i> Client Phone:</span> <span class="chat-val">${userPhone}</span></div>
        <div class="chat-field"><span class="chat-label"><i class="fas fa-shield-alt"></i> Hierarchy Role:</span> <span class="chat-val gold-val">${role}</span></div>
        <div class="chat-field"><span class="chat-label"><i class="fas fa-percentage"></i> Target Sharing:</span> <span class="chat-val gold-val">${shareExpectation}</span></div>
      </div>

      <div class="chat-section-divider"></div>

      <div class="chat-section-label"><i class="fas fa-layer-group gold"></i> Selected Brands (${selected.length}):</div>
      ${brandsHtml}

      <div class="chat-section-divider"></div>

      <div class="chat-section-label"><i class="fas fa-tools gold"></i> Required Functions & Services:</div>
      ${functionsHtml}

      <div class="chat-section-divider"></div>

      <div class="chat-section-label"><i class="fas fa-comment-dots gold"></i> Client Notes:</div>
      <div class="chat-notes-box">${customNotes}</div>

      <div class="chat-source-tag"><i class="fas fa-globe"></i> ReddyPanel.in &bull; Official WhatsApp Order</div>
    `;

    if (previewTime) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      previewTime.textContent = timeStr;
    }
  }

  function updateUIState() {
    renderSites();
    renderSelectedChips();
    renderLiveChatPreview();
  }

  function sendWhatsApp() {
    const rawMsg = generateWhatsAppRawMessage();
    const encoded = encodeURIComponent(rawMsg);
    // Opens chat directly with +1 7788260166 with the pre-filled formatted quotation
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== SYNCHRONIZED SEARCH INPUTS =====
  const allSearchInputs = [searchInput, mobileNavSearch, sectionSiteSearch].filter(Boolean);

  const handleSearchInput = (val, sourceEl) => {
    searchQuery = val.trim();
    
    // Sync value across all search inputs
    allSearchInputs.forEach(input => {
      if (input !== sourceEl && input.value !== val) {
        input.value = val;
      }
    });

    // Toggle clear button visibility on section search bar
    if (sectionSearchClear) {
      sectionSearchClear.hidden = searchQuery.length === 0;
    }

    renderSites();
  };

  allSearchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      handleSearchInput(e.target.value, e.target);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (input === mobileNavSearch) {
          closeMobileNav();
          const sitesSec = document.getElementById('sites');
          sitesSec?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  sectionSearchClear?.addEventListener('click', () => {
    handleSearchInput('', null);
    allSearchInputs.forEach(i => i.value = '');
    sectionSiteSearch?.focus();
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderSites();
    });
  });

  // Sort dropdown
  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderSites();
  });

  // Select All button
  selectAllBtn?.addEventListener('click', () => {
    const currentList = filterSites();
    currentList.forEach(s => selectedSiteIds.add(s.id));
    updateUIState();
  });

  // Clear Selection button
  clearSelectionBtn?.addEventListener('click', () => {
    selectedSiteIds.clear();
    customBrands.length = 0;
    updateUIState();
  });

  // Clear Chips button
  clearChipsBtn?.addEventListener('click', () => {
    selectedSiteIds.clear();
    customBrands.length = 0;
    updateUIState();
  });

  // Add custom brand manually
  const addCustomBrand = () => {
    const val = customBrandInput?.value.trim();
    if (val) {
      customBrands.push(val);
      if (customBrandInput) customBrandInput.value = '';
      updateUIState();
    }
  };

  addCustomBrandBtn?.addEventListener('click', addCustomBrand);
  customBrandInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomBrand();
    }
  });

  // Form input listeners for live updates
  const formInputs = [userNameInput, userPhoneInput, panelRoleSelect, targetShareSelect, userMessageInput];
  formInputs.forEach(el => {
    if (!el) return;
    el.addEventListener('input', renderLiveChatPreview);
    el.addEventListener('change', renderLiveChatPreview);
    el.addEventListener('keyup', renderLiveChatPreview);
    el.addEventListener('paste', () => setTimeout(renderLiveChatPreview, 50));
  });

  // Function checkboxes
  const functionRows = document.querySelectorAll('.function-row');
  functionRows.forEach(row => {
    const cb = row.querySelector('input[type="checkbox"]');
    if (!cb) return;
    cb.addEventListener('change', () => {
      row.classList.toggle('active', cb.checked);
      renderLiveChatPreview();
    });
  });

  // Send WhatsApp buttons
  sendWhatsAppBtn?.addEventListener('click', sendWhatsApp);
  fabSendBtn?.addEventListener('click', sendWhatsApp);

  // FAB clear button
  fabClearBtn?.addEventListener('click', () => {
    selectedSiteIds.clear();
    customBrands.length = 0;
    updateUIState();
  });

  // Copy Portal Link handler
  document.querySelectorAll('.btn-copy-portal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.dataset.url;
      if (!url) return;
      navigator.clipboard.writeText(url).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check"></i> Copied!`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(() => {
        prompt('Copy portal link:', url);
      });
    });
  });

  // Initial render
  const allBrandsFilterBtn = document.getElementById('allBrandsFilterBtn');
  if (allBrandsFilterBtn && sites.length) {
    allBrandsFilterBtn.textContent = `All Brands (${sites.length})`;
  }
  updateUIState();
});
