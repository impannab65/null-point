// ========================================
// SafeCampus - Emergency Preparedness System
// Interactive JavaScript Logic
// === DISASTER GUIDES (User-specified format) ===
const disasterGuides = {
  earthquake: {
    steps: [
      "Drop, Cover, and Hold On",
      "Stay away from windows",
      "Evacuate building after shaking stops"
    ],
    contacts: ["Police: 112", "Fire Department: 101", "Ambulance: 102"]
  },
  fire: {
    steps: [
      "Alert others immediately",
      "Use fire extinguisher if safe",
      "Evacuate building quickly"
    ],
    contacts: ["Police: 112", "Fire Department: 101", "Ambulance: 102"]
  },
  flood: {
    steps: [
      "Move to higher ground",
      "Avoid walking in flood water",
      "Follow emergency alerts"
    ],
    contacts: ["Police: 112", "Fire Department: 101", "Ambulance: 102"]
  },
  cyclone: {
    steps: [
      "Stay indoors",
      "Secure loose outdoor items",
      "Follow evacuation instructions"
    ],
    contacts: ["Police: 112", "Fire Department: 101", "Ambulance: 102"]
  }
};

// ========================================

// === COMPREHENSIVE DISASTER GUIDANCE (3-PHASE MODEL) ===
const disasterGuidance = {
  EARTHQUAKE: {
    before: [
      "Identify safe spots like under sturdy tables or desks",
      "Secure heavy furniture and shelves to walls",
      "Check building for structural weaknesses",
      "Prepare an emergency kit with water and first aid",
      "Practice Drop, Cover, and Hold On with family"
    ],
    during: [
      "Drop to your hands and knees immediately",
      "Cover your head and neck under a sturdy table",
      "Hold on until all shaking stops",
      "Stay away from windows, mirrors, and glass",
      "Do not use elevators, use stairs if you must move"
    ],
    after: [
      "Check yourself and others for injuries",
      "If trapped, signal rescuers by tapping on pipes",
      "Evacuate damaged buildings carefully",
      "Watch for falling debris and aftershocks",
      "Follow official safety instructions and evacuate routes"
    ]
  },
  FIRE: {
    before: [
      "Know the nearest fire exits and evacuation routes",
      "Locate and learn how to use fire extinguishers",
      "Keep emergency contacts written down",
      "Install and test smoke detectors",
      "Establish a family meeting point outside the building"
    ],
    during: [
      "Alert others and trigger fire alarm if safe",
      "Use fire extinguisher only if fire is small (P.A.S.S. method)",
      "Evacuate immediately using the nearest safe exit",
      "Stay low to avoid inhaling smoke",
      "Never use elevators; proceed down stairs only"
    ],
    after: [
      "Move to the designated assembly point outside",
      "Call emergency services once safe (112)",
      "Account for all personnel",
      "Do not re-enter building until declared safe by authorities",
      "Report any injuries or missing persons to emergency responders"
    ]
  },
  FLOOD: {
    before: [
      "Know the location of higher ground in your area",
      "Prepare emergency supplies and survival kit",
      "Have a communication plan with family",
      "Keep important documents in waterproof containers",
      "Check evacuation routes and follow flood warnings"
    ],
    during: [
      "Move to higher ground immediately",
      "Avoid walking or driving through flood water",
      "Turn off all utilities if time permits",
      "Stay indoors and away from windows",
      "Listen to emergency alerts and follow official instructions"
    ],
    after: [
      "Wait for authorities to declare areas safe before returning home",
      "Check for structural damage and contamination",
      "Document damage with photos for insurance",
      "Clean and disinfect affected areas",
      "Dispose of contaminated food and water safely"
    ]
  },
  CYCLONE: {
    before: [
      "Secure or store outdoor items that could become projectiles",
      "Reinforce doors, windows, and garage doors",
      "Know evacuation routes and shelters in your area",
      "Prepare emergency kit with water and supplies",
      "Charge all devices and keep a battery-powered radio"
    ],
    during: [
      "Stay indoors in an interior room away from windows",
      "Avoid windows and exterior doors",
      "Go to a basement, interior hallway, or small interior room",
      "Stay inside until the eye of the cyclone passes completely",
      "Keep all emergency supplies and communication devices with you"
    ],
    after: [
      "Remain indoors until all-clear is given by authorities",
      "Watch for hazards like downed power lines and debris",
      "Check on neighbors and provide mutual aid",
      "Report damage to authorities and insurance companies",
      "Document all damage before beginning cleanup"
    ]
  }
};

// === DISASTER ACTIONS (For simulation mode - using DURING phase) ===
const disasterActions = {
  EARTHQUAKE: disasterGuidance.EARTHQUAKE.during,
  FIRE: disasterGuidance.FIRE.during,
  FLOOD: disasterGuidance.FLOOD.during,
  CYCLONE: disasterGuidance.CYCLONE.during
};

// === DISASTER DATA ===
const disasterData = {
  EARTHQUAKE: {
    icon: '🏚️',
    title: 'Earthquake',
    description: 'Protect yourself during ground shaking',
    steps: [
      'Drop, Cover, and Hold On',
      'Stay away from windows',
      'Evacuate building after shaking stops'
    ]
  },
  FIRE: {
    icon: '🔥',
    title: 'Fire',
    description: 'Quick response to fire emergencies',
    steps: [
      'Trigger fire alarm',
      'Use fire extinguisher if safe',
      'Evacuate using nearest exit'
    ]
  },
  FLOOD: {
    icon: '🌊',
    title: 'Flood',
    description: 'Water safety and evacuation',
    steps: [
      'Move to higher ground',
      'Avoid walking in moving water',
      'Turn off electricity if safe'
    ]
  },
  CYCLONE: {
    icon: '🌀',
    title: 'Cyclone',
    description: 'Protection during severe storms',
    steps: [
      'Stay indoors',
      'Secure windows and doors',
      'Follow evacuation orders'
    ]
  }
};

// === DETAILED GUIDELINES FOR MODAL ===
const detailedGuidelines = {
  EARTHQUAKE: {
    title: 'Earthquake Emergency Response',
    icon: '🏚️',
    sections: [
      {
        heading: '🚨 Immediate Actions (During Shaking)',
        type: 'guideline',
        content: `
          <ol>
            <li><strong>DROP</strong> - Get down on your hands and knees immediately</li>
            <li><strong>COVER</strong> - Take shelter under a sturdy desk or table</li>
            <li><strong>HOLD ON</strong> - Hold onto your shelter until shaking stops</li>
          </ol>
        `
      },
      {
        heading: '⚠️ Critical Safety Rules',
        type: 'warning',
        content: `
          <ul>
            <li>DO NOT run outside during shaking - falling debris is dangerous</li>
            <li>Stay away from windows, mirrors, and heavy objects</li>
            <li>If in bed, stay there and protect your head with a pillow</li>
            <li>If outdoors, move away from buildings, trees, and power lines</li>
          </ul>
        `
      },
      {
        heading: '✅ After the Earthquake',
        type: 'tip',
        content: `
          <ol>
            <li>Check yourself and others for injuries</li>
            <li>Be prepared for aftershocks - they can occur hours or days later</li>
            <li>Evacuate the building if instructed</li>
            <li>Use stairs, never elevators</li>
            <li>Head to designated assembly point</li>
            <li>Stay away from damaged buildings</li>
          </ol>
        `
      }
    ]
  },
  FIRE: {
    title: 'Fire Emergency Response',
    icon: '🔥',
    sections: [
      {
        heading: '🚨 Immediate Actions',
        type: 'guideline',
        content: `
          <ol>
            <li><strong>Pull the fire alarm</strong> immediately if you discover fire</li>
            <li><strong>Alert others</strong> by shouting "Fire! Fire!"</li>
            <li><strong>Call emergency services</strong> - Dial campus security/fire department</li>
            <li><strong>Evacuate immediately</strong> - Do not collect belongings</li>
          </ol>
        `
      },
      {
        heading: '🧯 Using a Fire Extinguisher (P.A.S.S. Method)',
        type: 'tip',
        content: `
          <p>Only attempt if fire is SMALL and you have been trained:</p>
          <ul>
            <li><strong>P</strong> - Pull the pin</li>
            <li><strong>A</strong> - Aim at the base of the fire</li>
            <li><strong>S</strong> - Squeeze the handle</li>
            <li><strong>S</strong> - Sweep from side to side</li>
          </ul>
          <p>If fire spreads beyond small trash can size - EVACUATE!</p>
        `
      },
      {
        heading: '⚠️ Evacuation Safety',
        type: 'warning',
        content: `
          <ul>
            <li>Feel doors before opening - if hot, use alternate route</li>
            <li>Stay low to avoid smoke (crawl if necessary)</li>
            <li>Close doors behind you to slow fire spread</li>
            <li>Use stairs ONLY - never use elevators</li>
            <li>If trapped, close doors, seal gaps with cloth, signal from window</li>
          </ul>
        `
      },
      {
        heading: '✅ After Evacuation',
        type: 'guideline',
        content: `
          <ol>
            <li>Go to designated assembly point</li>
            <li>Report to your supervisor/instructor</li>
            <li>Do NOT re-enter building until authorized by fire department</li>
            <li>Account for all persons in your area</li>
          </ol>
        `
      }
    ]
  },
  FLOOD: {
    title: 'Flood Emergency Response',
    icon: '🌊',
    sections: [
      {
        heading: '🚨 Immediate Actions',
        type: 'guideline',
        content: `
          <ol>
            <li><strong>Move to higher ground immediately</strong> - Do not wait</li>
            <li><strong>Avoid basements and lower floors</strong></li>
            <li><strong>Turn off electrical power</strong> if instructed and safe to do so</li>
            <li><strong>Move valuable equipment</strong> to upper floors if time permits</li>
          </ol>
        `
      },
      {
        heading: '⚠️ Critical Water Safety Rules',
        type: 'warning',
        content: `
          <ul>
            <li>NEVER walk through moving water - 6 inches can knock you down</li>
            <li>NEVER drive through flooded areas - "Turn Around, Don't Drown"</li>
            <li>Avoid contact with flood water - may be contaminated</li>
            <li>Stay away from downed power lines and electrical wires</li>
            <li>Do not swim or play in flood water</li>
          </ul>
        `
      },
      {
        heading: '✅ During Flooding',
        type: 'tip',
        content: `
          <ul>
            <li>Stay informed via radio, TV, or mobile alerts</li>
            <li>Follow evacuation orders immediately</li>
            <li>If trapped in building, go to highest level</li>
            <li>Signal for help from window or roof</li>
            <li>Keep emergency kit accessible</li>
          </ul>
        `
      },
      {
        heading: '🏠 After Flood Waters Recede',
        type: 'guideline',
        content: `
          <ol>
            <li>Do NOT return to building until authorities say it's safe</li>
            <li>Avoid flood water - may contain sewage, chemicals, debris</li>
            <li>Document damage with photos for insurance</li>
            <li>Be aware of structural damage and weakened foundations</li>
          </ol>
        `
      }
    ]
  },
  CYCLONE: {
    title: 'Cyclone/Storm Emergency Response',
        icon: '🌀',
    sections: [
      {
        heading: '🚨 Before the Cyclone',
        type: 'guideline',
        content: `
          <ol>
            <li><strong>Monitor weather updates</strong> constantly</li>
            <li><strong>Secure outdoor items</strong> - furniture, equipment, debris</li>
            <li><strong>Close and lock all windows</strong></li>
            <li><strong>Stock emergency supplies</strong> - water, food, flashlight, batteries</li>
          </ol>
        `
      },
      {
        heading: '🏠 During the Cyclone',
        type: 'warning',
        content: `
          <ul>
            <li><strong>STAY INDOORS</strong> - Do not go outside for any reason</li>
            <li>Stay away from windows and glass doors</li>
            <li>Take shelter in interior rooms or hallways on lowest floor</li>
            <li>Avoid using electrical appliances</li>
            <li>If power fails, use flashlights - NOT candles</li>
            <li>Listen to battery-powered radio for updates</li>
          </ul>
        `
      },
      {
        heading: '⚠️ When Wind Dies Down',
        type: 'warning',
        content: `
          <p><strong>This may be the EYE of the storm!</strong></p>
          <ul>
            <li>Do NOT go outside - winds will return from opposite direction</li>
            <li>Remain in shelter until authorities declare all-clear</li>
            <li>The calm period can last 20-30 minutes</li>
          </ul>
        `
      },
      {
        heading: '✅ After the Cyclone',
        type: 'tip',
        content: `
          <ol>
            <li>Wait for official all-clear before going outside</li>
            <li>Watch for downed power lines and broken glass</li>
            <li>Avoid driving unless absolutely necessary</li>
            <li>Check for injuries and damage</li>
            <li>Report emergencies to campus security</li>
            <li>Boil water before drinking if advised</li>
          </ol>
        `
      }
    ]
  }
};

// === CHECKLIST ITEMS ===
const checklistItems = [
  'I know emergency exits',
  'I have emergency contacts saved',
  'I know evacuation routes',
  'I know assembly points'
];

// === GLOBAL STATE ===
let currentDisaster = 'EARTHQUAKE';
let preparednessScore = 0;

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
  }, 1500);
});

// ========================================
// DARK MODE TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.classList.add('dark');
  updateThemeIcon(true);
}

themeToggle.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
});

function updateThemeIcon(isDark) {
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  
  if (isDark) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// ========================================
// DISASTER CARDS GENERATION
// ========================================
function renderDisasterCards() {
  const container = document.getElementById('disasterCards');
  container.innerHTML = '';
  
  Object.entries(disasterData).forEach(([type, data], index) => {
    const card = document.createElement('div');
    card.className = 'disaster-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <span class="disaster-icon">${data.icon}</span>
      <h3 class="disaster-title">${data.title}</h3>
      <p class="disaster-description">${data.description}</p>
      <button class="view-guide-button" data-disaster-type="${type}">
        View Response Guide
      </button>
      <button class="start-simulation-button" data-disaster-type="${type}">
        <span class="sim-icon-btn">🎮</span>
        Start Simulation
      </button>
    `;
    
    container.appendChild(card);
  });
}

// ========================================
// DISASTER SELECTION & RESPONSE DISPLAY
// ========================================

// Main function to show response when button is clicked
function showResponse(disasterType) {
  console.log('🎯 Showing response for:', disasterType);
  
  // Update global state
  currentDisaster = disasterType;
  
  // Update dropdown to match
  updateDropdown(disasterType);
  
  // Display response steps with animation
  displaySteps(disasterType);
  
  // Update JSON output
  updateJSON();
  
  // Smooth scroll to response section
  scrollToResponse();
}

function updateDropdown(disasterType) {
  const disasterSelect = document.getElementById('disasterSelect');
  if (disasterSelect) {
    disasterSelect.value = disasterType;
    console.log('✅ Dropdown updated to:', disasterType);
  }
}

function displaySteps(disasterType) {
  console.log('📋 Displaying steps for:', disasterType);
  renderResponseSteps(disasterType);
}

function scrollToResponse() {
  const scenarioSection = document.getElementById('scenario');
  if (scenarioSection) {
    scenarioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('✅ Scrolled to response section');
  }
}

// Legacy function for dropdown changes
function selectDisaster(type) {
  showResponse(type);
}

// ========================================
// RESPONSE STEPS RENDERING (3-PHASE MODEL)
// ========================================
function renderResponseSteps(type) {
  const container = document.getElementById('responseSteps');
  container.innerHTML = '';
  
  const guidance = disasterGuidance[type];
  const phases = [
    { title: '📋 BEFORE THE DISASTER (Preparedness)', phase: 'before', icon: '🛡️', color: 'blue' },
    { title: '⚡ DURING THE DISASTER (Immediate Actions)', phase: 'during', icon: '🚨', color: 'red' },
    { title: '✅ AFTER THE DISASTER (Recovery)', phase: 'after', icon: '🏥', color: 'green' }
  ];
  
  phases.forEach((phaseInfo, phaseIndex) => {
    // Create phase section container
    const phaseSection = document.createElement('div');
    phaseSection.className = `phase-section phase-${phaseInfo.color}`;
    phaseSection.style.animationDelay = `${phaseIndex * 0.2}s`;
    
    // Phase title
    const phaseTitle = document.createElement('div');
    phaseTitle.className = 'phase-title';
    phaseTitle.innerHTML = `
      <span class="phase-icon">${phaseInfo.icon}</span>
      <h3>${phaseInfo.title}</h3>
    `;
    phaseSection.appendChild(phaseTitle);
    
    // Steps list for this phase
    const stepsList = document.createElement('ol');
    stepsList.className = 'phase-steps';
    
    guidance[phaseInfo.phase].forEach((step, stepIndex) => {
      const stepItem = document.createElement('li');
      stepItem.className = 'phase-step-item';
      stepItem.style.animationDelay = `${(phaseIndex * guidance[phaseInfo.phase].length + stepIndex) * 0.08}s`;
      stepItem.innerHTML = `
        <span class="step-number">${stepIndex + 1}</span>
        <span class="step-text">${step}</span>
      `;
      stepsList.appendChild(stepItem);
    });
    
    phaseSection.appendChild(stepsList);
    container.appendChild(phaseSection);
  });
}

// ========================================
// CHECKLIST GENERATION
// ========================================
function renderChecklist() {
  const container = document.getElementById('checklistContainer');
  container.innerHTML = '';
  
  checklistItems.forEach((item, index) => {
    const checklistItem = document.createElement('div');
    checklistItem.className = 'checklist-item';
    
    checklistItem.innerHTML = `
      <input 
        type="checkbox" 
        id="check${index}"
      />
      <label for="check${index}">${item}</label>
    `;
    
    container.appendChild(checklistItem);
  });
}

// ========================================
// PREPAREDNESS SCORE CALCULATION
// ========================================
function updatePreparedness() {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  const total = checkboxes.length;
  
  // Calculate percentage score
  preparednessScore = Math.round((checked / total) * 100);
  
  console.log(`Preparedness updated: ${checked}/${total} = ${preparednessScore}%`);
  
  // Update score display
  const scoreValue = document.getElementById('scoreValue');
  if (scoreValue) {
    scoreValue.textContent = `${preparednessScore}%`;
  }
  
  // Update progress bar
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = `${preparednessScore}%`;
  }
  
  // Update status badge
  const statusBadge = document.getElementById('statusBadge');
  if (statusBadge) {
    if (preparednessScore > 70) {
      statusBadge.textContent = 'Prepared';
      statusBadge.className = 'status-badge status-prepared';
    } else {
      statusBadge.textContent = 'Needs Improvement';
      statusBadge.className = 'status-badge status-needs';
    }
  }
  
  // IMPORTANT: Update JSON output with new preparedness data
  updateJSON();
}

// ========================================
// JSON OUTPUT GENERATION - LIVE DATA
// ========================================
function updateJSON() {
  // Get current disaster data
  const data = disasterData[currentDisaster];
  
  // Create responseData object with LIVE values (using DURING phase actions)
  const responseData = {
    disaster_type: currentDisaster,
    preparedness_score: preparednessScore,
    safety_actions: disasterGuidance[currentDisaster].during,
    emergency_contacts: ['Police: 112', 'Fire Department: 101', 'Ambulance: 102'],
    status: preparednessScore > 70 ? 'Prepared' : 'Needs Improvement'
  };
  
  // === UPDATE VISUAL OUTPUT CARDS ===
  updateVisualOutput(responseData);
  
  // Format JSON with proper indentation (2 spaces)
  const formattedJSON = JSON.stringify(responseData, null, 2);
  
  // Get JSON output element
  const jsonOutput = document.getElementById('jsonOutput');
  
  if (jsonOutput) {
    // Reset animation for smooth fade effect
    jsonOutput.style.animation = 'none';
    setTimeout(() => {
      jsonOutput.style.animation = '';
      
      // Apply syntax highlighting and update display
      jsonOutput.innerHTML = syntaxHighlight(formattedJSON);
    }, 10);
  }
  
  // Log LIVE data to browser console
  console.log('═══════════════════════════════════════');
  console.log('SafeCampus - Live JSON Response');
  console.log('═══════════════════════════════════════');
  console.log(responseData);
  console.log('═══════════════════════════════════════');
  console.log('Raw JSON String:');
  console.log(formattedJSON);
  console.log('═══════════════════════════════════════');
}

// ========================================
// UPDATE VISUAL OUTPUT DISPLAY
// ========================================
function updateVisualOutput(data) {
  // Update Disaster Type
  const disasterTypeEl = document.getElementById('outputDisasterType');
  if (disasterTypeEl) {
    disasterTypeEl.textContent = data.disaster_type;
    disasterTypeEl.style.animation = 'none';
    setTimeout(() => disasterTypeEl.style.animation = '', 10);
  }
  
  // Update Preparedness Score
  const prepScoreEl = document.getElementById('outputPrepScore');
  if (prepScoreEl) {
    prepScoreEl.textContent = `${data.preparedness_score}%`;
    prepScoreEl.style.animation = 'none';
    setTimeout(() => prepScoreEl.style.animation = '', 10);
  }
  
  // Update Safety Actions List
  const actionsEl = document.getElementById('outputSafetyActions');
  if (actionsEl) {
    actionsEl.innerHTML = '';
    data.safety_actions.forEach((action, index) => {
      const li = document.createElement('li');
      li.textContent = action;
      li.style.animationDelay = `${index * 0.1}s`;
      actionsEl.appendChild(li);
    });
  }
  
  // Update Emergency Contacts List
  const contactsEl = document.getElementById('outputContacts');
  if (contactsEl) {
    contactsEl.innerHTML = '';
    data.emergency_contacts.forEach((contact, index) => {
      const li = document.createElement('li');
      li.textContent = contact;
      li.style.animationDelay = `${index * 0.1}s`;
      contactsEl.appendChild(li);
    });
  }
  
  // Update Status
  const statusEl = document.getElementById('outputStatus');
  if (statusEl) {
    statusEl.textContent = data.status;
    statusEl.className = 'output-status ' + 
      (data.status === 'Prepared' ? 'prepared' : 'needs-improvement');
    statusEl.style.animation = 'none';
    setTimeout(() => statusEl.style.animation = '', 10);
  }
}

// ========================================
// SYNTAX HIGHLIGHTING FOR JSON
// ========================================
function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'json-number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'json-key';
      } else {
        cls = 'json-string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'json-boolean';
    } else if (/null/.test(match)) {
      cls = 'json-null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

// ========================================
// COPY JSON FUNCTION
// ========================================
function copyJSON(event) {
  // Get current disaster data
  const data = disasterData[currentDisaster];
  
  // Create responseData object with LIVE values
  const responseData = {
    disaster_type: currentDisaster,
    preparedness_score: preparednessScore,
    safety_actions: data.steps,
    emergency_contacts: ['Police: 112', 'Fire Department: 101', 'Ambulance: 102'],
    status: preparednessScore > 70 ? 'Prepared' : 'Needs Improvement'
  };
  
  // Convert to formatted JSON string
  const jsonText = JSON.stringify(responseData, null, 2);
  const button = event?.currentTarget || event?.target?.closest('.copy-json-button');

  if (!button) {
    console.warn('Copy JSON button context not found.');
    return;
  }
  
  // Copy to clipboard
  navigator.clipboard.writeText(jsonText).then(() => {
    // Show success feedback
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="copy-icon">✅</span><span>Copied!</span>';
    button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    // Also log what was copied
    console.log('✅ JSON copied to clipboard:');
    console.log(responseData);
    
    // Reset button after 2 seconds
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy JSON:', err);
    alert('Failed to copy JSON. Please try again.');
  });
}

// ========================================
// GUIDELINES MODAL FUNCTIONS (GLOBAL)
// ========================================

function openGuidelinesModal(disasterType) {
  console.log('🔍 Attempting to open modal for:', disasterType);
  
  const modal = document.getElementById('guidelinesModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal) {
    console.error('❌ Modal element not found!');
    alert('Error: Modal element not found in DOM');
    return;
  }
  
  if (!modalIcon || !modalTitle || !modalContent) {
    console.error('❌ Modal content elements not found!');
    alert('Error: Modal content elements missing');
    return;
  }

  const guideKey = String(disasterType || '').toLowerCase();
  const guide = disasterGuides[guideKey];
  const disasterMeta = disasterData[disasterType] || disasterData[guideKey.toUpperCase()];

  if (!guide) {
    console.error('❌ disasterGuides entry not found for:', disasterType);
    alert('Response guide not found for ' + disasterType);
    return;
  }

  const title = disasterMeta?.title || (guideKey.charAt(0).toUpperCase() + guideKey.slice(1));
  modalIcon.textContent = disasterMeta?.icon || '🚨';
  modalTitle.textContent = `${title} Response Guide`;

  const stepsHtml = guide.steps
    .map((step) => `<li>${step}</li>`)
    .join('');

  const contactsHtml = (guide.contacts || [])
    .map((contact) => `<li>${contact}</li>`)
    .join('');

  modalContent.innerHTML = `
    <div class="guideline-section">
      <h4>Immediate Safety Steps</h4>
      <ul>${stepsHtml}</ul>
    </div>
    <div class="tip-box">
      <h4>Emergency Contacts</h4>
      <ul>${contactsHtml || '<li>Follow campus emergency line and local authorities.</li>'}</ul>
    </div>
  `;
  
  // Show modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  console.log('✅ Modal activated! Classes:', modal.className);
  console.log('🚨 Modal should now be visible');
}

function closeGuidelinesModal() {
  const modal = document.getElementById('guidelinesModal');
  
  if (!modal) {
    console.error('❌ Modal not found when trying to close');
    return;
  }
  
  // Hide modal
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  console.log('✅ Modal closed');
}

// ========================================
// EMERGENCY SIMULATION MODE
// ========================================

let simulationInterval = null;
let currentSimulationStep = 0;
let simulationActive = false;

function startSimulation(disasterType) {
  console.log('🎮 Starting simulation for:', disasterType);
  
  // Get disaster data
  const actions = disasterActions[disasterType];
  const disasterMeta = disasterData[disasterType];
  
  if (!actions || !disasterMeta) {
    console.error('❌ Simulation data not found');
    return;
  }
  
  // Update global state
  currentDisaster = disasterType;
  simulationActive = true;
  currentSimulationStep = 0;
  
  // Show simulation modal
  const modal = document.getElementById('simulationModal');
  const simIcon = document.getElementById('simIcon');
  const simTitle = document.getElementById('simTitle');
  const simDisasterName = document.getElementById('simDisasterName');
  const simStepsContainer = document.getElementById('simStepsContainer');
  const simProgressText = document.getElementById('simProgressText');
  const simProgressFill = document.getElementById('simProgressFill');
  const simCompletion = document.getElementById('simCompletionMessage');
  
  if (!modal) return;
  
  // Set up simulation UI
  simIcon.textContent = disasterMeta.icon;
  simTitle.textContent = `${disasterMeta.title} Emergency Simulation`;
  simDisasterName.textContent = `${disasterType} DRILL`;
  simStepsContainer.innerHTML = '';
  simCompletion.classList.add('hidden');
  simProgressText.textContent = `Simulation Progress: Step 0 of ${actions.length}`;
  simProgressFill.style.width = '0%';
  
  // Show modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Optional: Play alert sound
  playSimulationAlert();
  
  // Update JSON with simulation start
  updateJSON();
  
  // Start step-by-step simulation
  displaySimulationSteps(actions);
}

function displaySimulationSteps(actions) {
  const totalSteps = actions.length;
  const simStepsContainer = document.getElementById('simStepsContainer');
  const simProgressText = document.getElementById('simProgressText');
  const simProgressFill = document.getElementById('simProgressFill');
  
  // Display steps one by one with 1.5s delay
  currentSimulationStep = 0;
  
  const showNextStep = () => {
    if (!simulationActive) return; // Stop if simulation was stopped
    
    if (currentSimulationStep < totalSteps) {
      const stepNumber = currentSimulationStep + 1;
      const stepText = actions[currentSimulationStep];
      
      // Create step element
      const stepElement = document.createElement('div');
      stepElement.className = 'sim-step';
      stepElement.innerHTML = `
        <div class="sim-step-number">${stepNumber}</div>
        <div class="sim-step-content">
          <div class="sim-step-icon">⚠️</div>
          <p class="sim-step-text">${stepText}</p>
        </div>
      `;
      
      simStepsContainer.appendChild(stepElement);
      
      // Trigger animation
      setTimeout(() => {
        stepElement.classList.add('active');
      }, 50);
      
      // Update progress
      currentSimulationStep++;
      const progressPercent = (currentSimulationStep / totalSteps) * 100;
      simProgressText.textContent = `Simulation Progress: Step ${currentSimulationStep} of ${totalSteps}`;
      simProgressFill.style.width = `${progressPercent}%`;
      
      // Schedule next step
      if (currentSimulationStep < totalSteps) {
        simulationInterval = setTimeout(showNextStep, 1500);
      } else {
        // Simulation completed
        setTimeout(showSimulationCompletion, 1000);
      }
    }
  };
  
  // Start with first step
  showNextStep();
}

function showSimulationCompletion() {
  const simCompletion = document.getElementById('simCompletionMessage');
  if (simCompletion) {
    simCompletion.classList.remove('hidden');
    simCompletion.classList.add('active');
  }
  
  console.log('✅ Simulation completed!');
  simulationActive = false;
}

function stopSimulation() {
  console.log('🛑 Stopping simulation...');
  
  // Clear any pending intervals
  if (simulationInterval) {
    clearTimeout(simulationInterval);
    simulationInterval = null;
  }
  
  // Close modal
  const modal = document.getElementById('simulationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  simulationActive = false;
  currentSimulationStep = 0;
  
  console.log('✅ Simulation stopped');
}

function playSimulationAlert() {
  // Optional: Create a simple beep sound
  // For now, we'll just log it. You can add actual audio later.
  console.log('🔔 Simulation alert sound');
  
  // Optional HTML5 Audio implementation:
  // const audio = new Audio('data:audio/wav;base64,...');
  // audio.play().catch(e => console.log('Audio play failed:', e));
}

// ========================================
// MONITORING & ALERT SYSTEM
// ========================================

// === DETECTION SYSTEM STATE ===
let detectionSystem = {
  fire: { status: 'monitoring', accuracy: 98.5, lastCheck: Date.now() },
  earthquake: { status: 'monitoring', accuracy: 96.2, lastCheck: Date.now() },
  flood: { status: 'monitoring', accuracy: 94.7, lastCheck: Date.now() },
  cyclone: { status: 'monitoring', accuracy: 97.1, lastCheck: Date.now() }
};

let activeAlerts = [];
let uploadedDataset = null;

// ========================================
// ALERT GENERATION & MANAGEMENT
// ========================================

function generateAlert(type, severity, message) {
  const alert = {
    id: Date.now() + Math.random(),
    type: type,
    severity: severity, // 'critical', 'warning', 'info'
    message: message,
    timestamp: new Date().toLocaleTimeString(),
    icon: getAlertIcon(type)
  };
  
  activeAlerts.unshift(alert); // Add to beginning
  
  // Keep only last 5 alerts
  if (activeAlerts.length > 5) {
    activeAlerts = activeAlerts.slice(0, 5);
  }
  
  renderAlerts();
  
  // Auto-dismiss info alerts after 10 seconds
  if (severity === 'info') {
    setTimeout(() => dismissAlert(alert.id), 10000);
  }
  
  console.log(`🚨 Alert Generated:`, alert);
}

function getAlertIcon(type) {
  const icons = {
    fire: '🔥',
    earthquake: '🏚️',
    flood: '🌊',
    cyclone: '🌀',
    system: '⚙️'
  };
  return icons[type] || '🚨';
}

function dismissAlert(alertId) {
  activeAlerts = activeAlerts.filter(alert => alert.id !== alertId);
  renderAlerts();
}

function renderAlerts() {
  const alertsContainer = document.getElementById('activeAlerts');
  
  if (!alertsContainer) return;
  
  if (activeAlerts.length === 0) {
    alertsContainer.innerHTML = `
      <div class="alert-item info">
        <span class="alert-icon">✅</span>
        <div class="alert-content">
          <h3 class="alert-title">All Systems Normal</h3>
          <p class="alert-message">No active alerts detected. Monitoring continues...</p>
        </div>
      </div>
    `;
    return;
  }
  
  alertsContainer.innerHTML = activeAlerts.map(alert => `
    <div class="alert-item ${alert.severity}">
      <span class="alert-icon">${alert.icon}</span>
      <div class="alert-content">
        <h3 class="alert-title">${alert.type.toUpperCase()} ${alert.severity.toUpperCase()}</h3>
        <p class="alert-message">${alert.message}</p>
        <span class="alert-time">⏰ ${alert.timestamp}</span>
      </div>
      <button class="alert-close" data-alert-id="${alert.id}">✕</button>
    </div>
  `).join('');
}

// ========================================
// DETECTION SIMULATION
// ========================================

function simulateDetection() {
  // Randomly trigger detection events (simulation)
  const randomValue = Math.random();
  
  if (randomValue < 0.15) { // 15% chance of event
    const types = ['fire', 'earthquake', 'flood', 'cyclone'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    const messages = {
      fire: [
        'Smoke detected in Building A, Floor 3. Emergency response activated.',
        'Temperature spike detected. Fire suppression system engaged.',
        'Fire alarm triggered in Library. Evacuation in progress.'
      ],
      earthquake: [
        'Seismic activity detected. Magnitude 4.2 tremor recorded.',
        'Ground motion sensors activated. Take cover immediately.',
        'Low-intensity shaking detected. Monitor for aftershocks.'
      ],
      flood: [
        'Water level rising rapidly in basement area. Evacuate lower floors.',
        'Heavy rainfall alert. Drainage systems at 85% capacity.',
        'Flash flood warning issued. Secure windows and doors.'
      ],
      cyclone: [
        'High wind speeds detected. Secure outdoor equipment.',
        'Storm approaching. Wind gusts up to 60 km/h expected.',
        'Severe weather warning. Shelter in place recommended.'
      ]
    };
    
    const randomMessage = messages[randomType][Math.floor(Math.random() * messages[randomType].length)];
    const severity = randomValue < 0.05 ? 'critical' : 'warning';
    
    // Update detection status
    detectionSystem[randomType].status = 'alert';
    updateMonitoringStatus(randomType, 'alert');
    
    // Generate alert
    generateAlert(randomType, severity, randomMessage);
    
    // Reset status after 15 seconds
    setTimeout(() => {
      detectionSystem[randomType].status = 'monitoring';
      updateMonitoringStatus(randomType, 'monitoring');
    }, 15000);
  }
  
  // Update accuracy values (simulate slight fluctuations)
  Object.keys(detectionSystem).forEach(type => {
    const current = detectionSystem[type].accuracy;
    const fluctuation = (Math.random() - 0.5) * 0.5; // ±0.25%
    detectionSystem[type].accuracy = Math.max(90, Math.min(99.9, current + fluctuation));
    updateAccuracyDisplay(type, detectionSystem[type].accuracy);
  });
}

function updateMonitoringStatus(type, status) {
  const statusElement = document.getElementById(`${type}Status`);
  if (statusElement) {
    statusElement.textContent = status === 'alert' ? 'ALERT!' : 'Monitoring';
    statusElement.className = `status-value ${status}`;
  }
}

function updateAccuracyDisplay(type, accuracy) {
  const accuracyElement = document.getElementById(`${type}Accuracy`);
  const progressElement = document.getElementById(`${type}Progress`);
  
  if (accuracyElement) {
    accuracyElement.textContent = `${accuracy.toFixed(1)}%`;
  }
  
  if (progressElement) {
    progressElement.style.width = `${accuracy}%`;
  }
}

// ========================================
// DATASET UPLOAD HANDLING
// ========================================

function handleDatasetUpload(event) {
  const file = event.target.files[0];
  
  if (!file) return;
  
  const statusElement = document.getElementById('uploadStatus');
  statusElement.textContent = '⏳ Processing dataset...';
  statusElement.className = 'upload-status processing';
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const jsonData = JSON.parse(e.target.result);
      
      // Store uploaded dataset
      uploadedDataset = {
        data: jsonData,
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(2), // KB
        recordCount: Array.isArray(jsonData) ? jsonData.length : Object.keys(jsonData).length,
        uploadTime: new Date().toLocaleTimeString()
      };
      
      // Show success message
      statusElement.textContent = `✅ Dataset uploaded successfully: ${file.name}`;
      statusElement.className = 'upload-status success';
      
      // Display dataset info
      displayDatasetInfo();
      
      // Simulate accuracy improvement
      improveAccuracyFromDataset();
      
      // Generate success alert
      generateAlert('system', 'info', `Dataset "${file.name}" uploaded with ${uploadedDataset.recordCount} records. Detection models updated.`);
      
      console.log('📊 Dataset Uploaded:', uploadedDataset);
      
    } catch (error) {
      statusElement.textContent = `❌ Error: Invalid JSON file - ${error.message}`;
      statusElement.className = 'upload-status error';
      console.error('Dataset upload error:', error);
    }
  };
  
  reader.onerror = function() {
    statusElement.textContent = '❌ Error reading file. Please try again.';
    statusElement.className = 'upload-status error';
  };
  
  reader.readAsText(file);
}

function displayDatasetInfo() {
  const datasetInfo = document.getElementById('datasetInfo');
  
  if (!datasetInfo || !uploadedDataset) return;
  
  datasetInfo.classList.remove('hidden');
  
  document.getElementById('datasetRecords').textContent = uploadedDataset.recordCount;
  document.getElementById('datasetSize').textContent = `${uploadedDataset.fileSize} KB`;
  document.getElementById('datasetTime').textContent = uploadedDataset.uploadTime;
}

function improveAccuracyFromDataset() {
  // Simulate accuracy improvement from uploaded dataset
  Object.keys(detectionSystem).forEach(type => {
    const improvement = Math.random() * 1.5; // Up to 1.5% improvement
    detectionSystem[type].accuracy = Math.min(99.9, detectionSystem[type].accuracy + improvement);
    updateAccuracyDisplay(type, detectionSystem[type].accuracy);
  });
}

// ========================================
// MONITORING SYSTEM INITIALIZATION
// ========================================

function startMonitoringSystem() {
  console.log('🚀 Starting Real-Time Monitoring System...');
  
  // Initial render
  renderAlerts();
  
  // Run detection simulation every 8 seconds
  setInterval(simulateDetection, 8000);
  
  // Generate welcome message
  setTimeout(() => {
    generateAlert('system', 'info', 'Monitoring system initialized. All sensors active and operational.');
  }, 2000);
  
  console.log('✅ Monitoring System Active');
}

// ========================================
// INITIALIZATION & EVENT HANDLERS
// ========================================
// ========================================
// SAFETY TIPS DATABASE
// ========================================
const safetyTips = [
  "Always know the nearest emergency exit.",
  "Save emergency contacts in your phone.",
  "Never use elevators during a fire.",
  "Keep a basic emergency kit ready.",
  "Practice evacuation routes regularly.",
  "Know meeting points with family/friends.",
  "Keep a whistle in your emergency kit.",
  "Stay calm - panic delays response.",
  "Call emergency services immediately if needed.",
  "Help others evacuate if safe to do so.",
  "Never go back into a burning building.",
  "Document emergency procedures in writing.",
  "Take a first aid course if possible.",
  "Keep water and food in emergency kit.",
  "Check evacuation routes during calm days."
];

let currentTipIndex = 0;
let voiceEnabled = false;
let emergencyTimerInterval = null;
let emergencyThemeActive = false;
let safetyTipsInterval = null;

// ========================================
// PANIC BUTTON & EMERGENCY MODE
// ========================================
function activateEmergencyMode() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('🚨 EMERGENCY MODE ACTIVATED');
  }
}

function deactivateEmergencyMode() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    console.log('✅ Emergency mode closed');
  }
}

// ========================================
// VOICE GUIDANCE SYSTEM
// ========================================
function toggleVoiceGuidance() {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById('voiceToggle');
  if (btn) {
    btn.classList.toggle('active', voiceEnabled);
  }
  console.log('🔊 Voice Guidance:', voiceEnabled ? 'ON' : 'OFF');
}

function speakSafetyActions(actions) {
  if (!voiceEnabled) return;
  
  const utterance = new SpeechSynthesisUtterance(actions.join('. '));
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;
  
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
  console.log('🔊 Speaking safety actions');
}

// ========================================
// EMERGENCY COUNTDOWN TIMER
// ========================================
function startEvacuationTimer(seconds = 60) {
  const timerDiv = document.getElementById('emergencyTimer');
  if (!timerDiv) return;
  
  timerDiv.classList.remove('hidden');
  let remaining = seconds;
  
  if (emergencyTimerInterval) clearInterval(emergencyTimerInterval);
  
  emergencyTimerInterval = setInterval(() => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    
    document.getElementById('timerMinutes').textContent = String(mins).padStart(2, '0');
    document.getElementById('timerSeconds').textContent = String(secs).padStart(2, '0');
    
    // Add pulse effect when critical
    if (remaining <= 10) {
      timerDiv.style.animation = 'pulse 0.5s infinite';
    }
    
    remaining--;
    
    if (remaining < 0) {
      clearInterval(emergencyTimerInterval);
      timerDiv.classList.add('hidden');
    }
  }, 1000);
}

function stopEvacuationTimer() {
  if (emergencyTimerInterval) {
    clearInterval(emergencyTimerInterval);
    emergencyTimerInterval = null;
  }
  const timerDiv = document.getElementById('emergencyTimer');
  if (timerDiv) {
    timerDiv.classList.add('hidden');
  }
}

// ========================================
// SAFETY TIPS CAROUSEL
// ========================================
function displayNextSafetyTip() {
  currentTipIndex = (currentTipIndex + 1) % safetyTips.length;
  updateSafetyTipDisplay();
}

function updateSafetyTipDisplay() {
  const tipElement = document.getElementById('safetyTipText');
  if (tipElement) {
    tipElement.style.animation = 'none';
    setTimeout(() => {
      tipElement.innerHTML = safetyTips[currentTipIndex];
      tipElement.style.animation = '';
    }, 10);
  }
}

function startSafetyTipsCarousel() {
  updateSafetyTipDisplay();
  if (safetyTipsInterval) clearInterval(safetyTipsInterval);
  safetyTipsInterval = setInterval(displayNextSafetyTip, 5000);
}

function stopSafetyTipsCarousel() {
  if (safetyTipsInterval) {
    clearInterval(safetyTipsInterval);
    safetyTipsInterval = null;
  }
}

// ========================================
// EMERGENCY THEME MODE
// ========================================
function activateEmergencyTheme() {
  if (emergencyThemeActive) return;
  emergencyThemeActive = true;
  document.body.classList.add('emergency-theme-active');
  console.log('🚨 Emergency theme activated');
}

function deactivateEmergencyTheme() {
  emergencyThemeActive = false;
  document.body.classList.remove('emergency-theme-active');
  console.log('✅ Emergency theme deactivated');
}

// ========================================
// ENHANCED JSON COPY
// ========================================
function copyJSON() {
  const jsonOutput = document.getElementById('jsonOutput');
  if (!jsonOutput) return;
  
  const jsonText = jsonOutput.textContent;
  navigator.clipboard.writeText(jsonText).then(() => {
    const copyBtn = document.querySelector('[data-action="copy-json"], #copyJsonButton');
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span class="check-icon">✅</span><span>Copied!</span>';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }
    console.log('📋 JSON copied to clipboard');
  }).catch(err => console.error('Failed to copy:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('SafeCampus initializing...');
  
  // Get disaster select element
  const disasterSelect = document.getElementById('disasterSelect');
  
  if (!disasterSelect) {
    console.error('Disaster select element not found!');
    return;
  }
  
  // Add change event listener for disaster selection
  disasterSelect.addEventListener('change', (e) => {
    console.log('Disaster changed to:', e.target.value);
    selectDisaster(e.target.value);
  });
  
  // Initialize all components
  console.log('Rendering disaster cards...');
  renderDisasterCards();
  
  console.log('Rendering checklist...');
  renderChecklist();
  
  console.log('Rendering response steps for EARTHQUAKE...');
  renderResponseSteps('EARTHQUAKE');
  
  // IMPORTANT: Update JSON with initial state
  console.log('Updating JSON with initial state...');
  updateJSON();
  
  // START MONITORING SYSTEM
  console.log('Initializing monitoring system...');
  startMonitoringSystem();

  // Initialize Safety Tips Carousel
  console.log('Starting safety tips carousel...');
  startSafetyTipsCarousel();

  // ========================================
  // EVENT LISTENERS FOR ALL BUTTONS
  // ========================================

  // Panic Button
  const panicButton = document.getElementById('panicButton');
  if (panicButton) {
    panicButton.addEventListener('click', activateEmergencyMode);
  }

  // Emergency Mode Close Button
  const closeEmergencyBtn = document.getElementById('closeEmergency');
  if (closeEmergencyBtn) {
    closeEmergencyBtn.addEventListener('click', deactivateEmergencyMode);
  }

  // Voice Guidance Toggle
  const voiceToggle = document.getElementById('voiceToggle');
  if (voiceToggle) {
    voiceToggle.addEventListener('click', toggleVoiceGuidance);
  }

  // Safety Tips Next Button
  const nextTipBtn = document.getElementById('nextTipButton');
  if (nextTipBtn) {
    nextTipBtn.addEventListener('click', displayNextSafetyTip);
  }

  // Copy JSON Buttons (Both old and new)
  const copyJsonBtn1 = document.querySelector('[data-action="copy-json"]');
  const copyJsonBtn2 = document.getElementById('copyJsonButton');
  if (copyJsonBtn1) copyJsonBtn1.addEventListener('click', copyJSON);
  if (copyJsonBtn2) copyJsonBtn2.addEventListener('click', copyJSON);
  
    // Close Alert Banner
    const closeAlertBtn = document.querySelector('[data-action="close-alert"]');
    if (closeAlertBtn) {
      closeAlertBtn.addEventListener('click', () => {
        document.getElementById('alertBanner').style.display = 'none';
        console.log('✅ Alert banner closed');
      });
    }
  
    // Start Learning Button - Scroll to Modules
    const startButton = document.querySelector('[data-action="scroll-to-modules"]');
    if (startButton) {
      startButton.addEventListener('click', () => {
        document.getElementById('modules').scrollIntoView({behavior: 'smooth'});
        console.log('✅ Scrolled to modules');
      });
    }
  
    // Copy JSON Button
    const copyJsonBtn = document.querySelector('[data-action="copy-json"]');
    if (copyJsonBtn) {
      copyJsonBtn.addEventListener('click', copyJSON);
    }

    // Dataset Upload Change
    const datasetUpload = document.getElementById('datasetUpload');
    if (datasetUpload) {
      datasetUpload.addEventListener('change', handleDatasetUpload);
    }

    // Checklist Changes
    const checklistContainer = document.getElementById('checklistContainer');
    if (checklistContainer) {
      checklistContainer.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
          updatePreparedness();
        }
      });
    }

    // Active Alerts Close Buttons (delegated)
    const activeAlertsContainer = document.getElementById('activeAlerts');
    if (activeAlertsContainer) {
      activeAlertsContainer.addEventListener('click', (e) => {
        const closeButton = e.target.closest('.alert-close');
        if (!closeButton) return;
        const alertId = Number(closeButton.getAttribute('data-alert-id'));
        if (!Number.isNaN(alertId)) {
          dismissAlert(alertId);
        }
      });
    }
  
    // View Response Guide Buttons (Event Delegation)
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('view-guide-button') || 
          e.target.closest('.view-guide-button')) {
        const button = e.target.classList.contains('view-guide-button') 
          ? e.target 
          : e.target.closest('.view-guide-button');
        const disasterType = button.getAttribute('data-disaster-type');
        if (disasterType) {
          console.log('🖱️ View Response Guide clicked for:', disasterType);
          
          // Add click feedback animation
          button.style.transform = 'scale(0.95)';
          setTimeout(() => {
            button.style.transform = '';
          }, 150);
          
          // Show response guide (scroll to steps section)
          showResponse(disasterType);
        }
      }
    });

    // Start Simulation Buttons (Event Delegation)
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('start-simulation-button') || 
          e.target.closest('.start-simulation-button')) {
        const button = e.target.classList.contains('start-simulation-button') 
          ? e.target 
          : e.target.closest('.start-simulation-button');
        const disasterType = button.getAttribute('data-disaster-type');
        if (disasterType) {
          console.log('🎮 Start Simulation clicked for:', disasterType);
          
          // Add click feedback animation
          button.style.transform = 'scale(0.95)';
          setTimeout(() => {
            button.style.transform = '';
          }, 150);
          
          // Start simulation mode
          startSimulation(disasterType);
        }
      }
    });

    // Stop Simulation Button
    const stopSimBtn = document.getElementById('stopSimulation');
    if (stopSimBtn) {
      stopSimBtn.addEventListener('click', stopSimulation);
    }

    // Close simulation on outside click
    const simulationModal = document.getElementById('simulationModal');
    if (simulationModal) {
      simulationModal.addEventListener('click', (e) => {
        if (e.target === simulationModal) {
          stopSimulation();
        }
      });
    }
  
    // Modal Close Buttons
    const modalCloseButtons = document.querySelectorAll('[data-action="close-modal"]');
    modalCloseButtons.forEach(btn => {
      btn.addEventListener('click', closeGuidelinesModal);
    });
  
    // Close modal on outside click
    const guidelinesModal = document.getElementById('guidelinesModal');
    if (guidelinesModal) {
      guidelinesModal.addEventListener('click', (e) => {
        if (e.target === guidelinesModal) {
          closeGuidelinesModal();
        }
      });
    }
  
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('guidelinesModal');
        if (modal && modal.classList.contains('active')) {
          closeGuidelinesModal();
        }
      }
    });
  
    console.log('✅ All event listeners attached successfully!');
  
  
  console.log('SafeCampus initialization complete!');
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
