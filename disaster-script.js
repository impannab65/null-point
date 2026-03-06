// ================================================================
// DISASTER RESPONSE GUIDES - Structured Data
// ================================================================

const disasterGuides = {
    earthquake: {
        icon: '🏚️',
        title: 'Earthquake',
        steps: [
            "Drop, Cover, and Hold On",
            "Stay away from windows",
            "Evacuate building after shaking stops"
        ],
        contacts: ["Police", "Fire Department", "Ambulance"]
    },
    fire: {
        icon: '🔥',
        title: 'Fire',
        steps: [
            "Alert others immediately",
            "Use fire extinguisher if safe",
            "Evacuate building quickly"
        ],
        contacts: ["Police", "Fire Department", "Ambulance"]
    },
    flood: {
        icon: '🌊',
        title: 'Flood',
        steps: [
            "Move to higher ground",
            "Avoid walking in flood water",
            "Follow emergency alerts"
        ],
        contacts: ["Police", "Fire Department", "Ambulance"]
    },
    cyclone: {
        icon: '🌀',
        title: 'Cyclone',
        steps: [
            "Stay indoors",
            "Secure loose outdoor items",
            "Follow evacuation instructions"
        ],
        contacts: ["Police", "Fire Department", "Ambulance"]
    }
};

// ================================================================
// MODAL FUNCTIONS
// ================================================================

function openModal(disasterType) {
    console.log(`✅ Opening modal for: ${disasterType}`);
    
    const guide = disasterGuides[disasterType];
    
    if (!guide) {
        console.error(`❌ No guide found for: ${disasterType}`);
        return;
    }
    
    // Update modal title
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = `${guide.icon} ${guide.title} Response Guide`;
    
    // Clear and populate steps list
    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = '';
    guide.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        li.style.animationDelay = `${index * 0.1}s`;
        stepsList.appendChild(li);
    });
    
    // Clear and populate contacts list
    const contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';
    guide.contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = contact;
        li.style.animationDelay = `${(guide.steps.length + index) * 0.1}s`;
        contactsList.appendChild(li);
    });
    
    // Show modal
    const modal = document.getElementById('responseModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log(`✅ Modal displayed successfully for ${guide.title}`);
}

function closeModal() {
    const modal = document.getElementById('responseModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    console.log('✅ Modal closed');
}

// ================================================================
// EVENT LISTENERS - Proper JavaScript (No Inline Onclick)
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Disaster Learning Modules...');
    
    // Get all "View Response Guide" buttons
    const guideButtons = document.querySelectorAll('.guide-button');
    
    console.log(`✅ Found ${guideButtons.length} guide buttons`);
    
    // Add click event listener to each button
    guideButtons.forEach((button, index) => {
        const disasterType = button.getAttribute('data-disaster');
        
        button.addEventListener('click', function() {
            console.log(`Button ${index + 1} clicked: ${disasterType}`);
            openModal(disasterType);
        });
        
        console.log(`✅ Event listener added to button ${index + 1}: ${disasterType}`);
    });
    
    // Close modal button
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', closeModal);
    console.log('✅ Close button event listener added');
    
    // Got It button
    const gotItBtn = document.getElementById('gotItButton');
    gotItBtn.addEventListener('click', closeModal);
    console.log('✅ Got It button event listener added');
    
    // Close modal when clicking outside
    const modal = document.getElementById('responseModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    console.log('✅ Outside click event listener added');
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('responseModal');
            if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
    console.log('✅ Escape key event listener added');
    
    console.log('✅✅✅ All event listeners initialized successfully!');
    console.log('📚 Disaster Learning Modules ready to use!');
});
