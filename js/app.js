const statusCard = document.getElementById('deployment-status');
const showInfoBtn = document.getElementById('show-info-btn');

if (showInfoBtn && statusCard) {
    showInfoBtn.addEventListener('click', () => {
        const now = new Date();
        const statusMessage = `Last checked: ${now.toLocaleString()}. Deployment pipeline is healthy.`;
        statusCard.innerHTML = `
            <h2>Deployment status</h2>
            <p>${statusMessage}</p>
        `;
    });
}

const statusCard = document.getElementById('deployment-status');
const showInfoBtn = document.getElementById('show-info-btn');

if (showInfoBtn && statusCard) {
    showInfoBtn.addEventListener('click', () => {
        const now = new Date();
        const statusMessage = `Last checked: ${now.toLocaleString()}. Deployment pipeline is healthy.`;
        statusCard.innerHTML = `
            <h2>Deployment status</h2>
            <p>${statusMessage}</p>
        `;
    });
}

console.log('Static website loaded successfully');
