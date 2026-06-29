const pipelineSteps = [
    { label: 'Build', detail: 'Source files are collected and packaged into a build folder.' },
    { label: 'Test', detail: 'Basic validation ensures the HTML, CSS, and JS files exist.' },
    { label: 'Publish', detail: 'Build artifacts are published and stored for deployment.' },
    { label: 'Deploy', detail: 'Azure CLI uploads static files to the storage account.' }
];

function renderDeploymentStatus(statusCard, statusMessage, stepsHtml) {
    statusCard.innerHTML = `
        <h2>Deployment status</h2>
        <p>${statusMessage}</p>
        <ul>${stepsHtml}</ul>
    `;
}

function createStatusList(steps) {
    return steps.map(step => `
        <li><strong>${step.label}:</strong> ${step.detail}</li>
    `).join('');
}

function simulateDeploymentStatus(statusCard, button) {
    const progressSteps = [
        { label: 'Build', detail: 'Collecting files and preparing build artifacts...' },
        { label: 'Validate', detail: 'Checking required HTML, CSS, and JS files...' },
        { label: 'Publish', detail: 'Uploading artifact package to pipeline storage...' },
        { label: 'Deploy', detail: 'Publishing static files to Azure Storage...' }
    ];

    button.disabled = true;
    button.textContent = 'Checking...';

    let index = 0;
    statusCard.innerHTML = `
        <h2>Deployment status</h2>
        <p>Starting deployment status check...</p>
        <div class="spinner"></div>
    `;

    const interval = setInterval(() => {
        if (index >= progressSteps.length) {
            clearInterval(interval);
            const now = new Date();
            const statusMessage = `Last checked: ${now.toLocaleString()}. Deployment pipeline is healthy.`;
            const stepsHtml = createStatusList(pipelineSteps);
            renderDeploymentStatus(statusCard, statusMessage, stepsHtml);
            button.disabled = false;
            button.textContent = 'Refresh deployment status';
            return;
        }

        const currentStep = progressSteps[index];
        statusCard.innerHTML = `
            <h2>Deployment status</h2>
            <p>${currentStep.detail}</p>
            <ul>
                <li><strong>${currentStep.label}:</strong> In progress</li>
            </ul>
            <div class="spinner"></div>
        `;
        index += 1;
    }, 900);
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

    showInfoBtn.addEventListener('click', () => simulateDeploymentStatus(statusCard, showInfoBtn));
    console.log('Static website loaded successfully');
});
