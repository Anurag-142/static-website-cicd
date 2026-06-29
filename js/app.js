const pipelineSteps = [
    { label: 'Build', detail: 'Source files are collected and packaged into a build folder.' },
    { label: 'Test', detail: 'Basic validation ensures the HTML, CSS, and JS files exist.' },
    { label: 'Publish', detail: 'Build artifacts are published and stored for deployment.' },
    { label: 'Deploy', detail: 'Azure CLI uploads static files to the storage account.' }
];

function renderDeploymentStatus(statusCard) {
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

document.addEventListener('DOMContentLoaded', () => {
    const statusCard = document.getElementById('deployment-status');
    const showInfoBtn = document.getElementById('show-info-btn');

    if (!showInfoBtn) {
        console.error('Show deployment status button was not found.');
        return;
    }

    if (!statusCard) {
        console.error('Deployment status card was not found.');
        return;
    }

    showInfoBtn.addEventListener('click', () => renderDeploymentStatus(statusCard));
    console.log('Static website loaded successfully');
});
