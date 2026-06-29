const statusCard = document.getElementById('deployment-status');
const showInfoBtn = document.getElementById('show-info-btn');

const pipelineSteps = [
    { label: 'Build', detail: 'Source files are collected and packaged into a build folder.' },
    { label: 'Test', detail: 'Basic validation ensures the HTML, CSS, and JS files exist.' },
    { label: 'Publish', detail: 'Build artifacts are published and stored for deployment.' },
    { label: 'Deploy', detail: 'Azure CLI uploads static files to the storage account.' }
];

function renderDeploymentStatus() {
    const now = new Date();
    const statusMessage = `Last checked: ${now.toLocaleString()}. Deployment pipeline is healthy.`;
    const stepsHtml = pipelineSteps.map(step => `
        <li><strong>${step.label}:</strong> ${step.detail}</li>
    `).join('');

    statusCard.innerHTML = `
        <h2>Deployment status</h2>
        <p>${statusMessage}</p>
        <ul>${stepsHtml}</ul>
    `;
}

if (showInfoBtn && statusCard) {
    showInfoBtn.addEventListener('click', renderDeploymentStatus);
}

console.log('Static website loaded successfully');
