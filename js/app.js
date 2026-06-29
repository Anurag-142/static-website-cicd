const pipelineSteps = [
    {
        label: 'Build',
        detail: environment => `Collecting files and preparing build artifacts for the ${environment} environment.`
    },
    {
        label: 'Validate',
        detail: environment => `Checking required HTML, CSS, and JS files for the ${environment} environment.`
    },
    {
        label: 'Publish',
        detail: environment => `Uploading artifact package to pipeline storage for ${environment}.`
    },
    {
        label: 'Deploy',
        detail: environment => `Publishing static files to Azure Storage for ${environment}.`
    }
];

function renderDeploymentStatus(statusCard, statusMessage, stepsHtml, environment) {
    statusCard.innerHTML = `
        <div class="status-meta">
            <span class="status-badge">${environment}</span>
            <p>${statusMessage}</p>
        </div>
        <h2>Deployment status</h2>
        <ul>${stepsHtml}</ul>
    `;
}

function createStatusList(steps, environment) {
    return steps.map(step => `
        <li><strong>${step.label}:</strong> ${step.detail(environment)}</li>
    `).join('');
}

function simulateDeploymentStatus(statusCard, button, environment) {
    const progressSteps = [
        { label: 'Build', detail: `Collecting files and preparing build artifacts for ${environment}...` },
        { label: 'Validate', detail: `Checking required HTML, CSS, and JS files for ${environment}...` },
        { label: 'Publish', detail: `Uploading artifact package to pipeline storage for ${environment}...` },
        { label: 'Deploy', detail: `Publishing static files to Azure Storage for ${environment}...` }
    ];

    button.disabled = true;
    button.textContent = `Checking ${environment}...`;

    let index = 0;
    statusCard.innerHTML = `
        <h2>Deployment status</h2>
        <p>Starting deployment status check for ${environment}...</p>
        <div class="spinner"></div>
    `;

    const interval = setInterval(() => {
        if (index >= progressSteps.length) {
            clearInterval(interval);
            const now = new Date();
            const statusMessage = `Last checked: ${now.toLocaleString()}. ${environment} deployment pipeline is healthy.`;
            const stepsHtml = createStatusList(pipelineSteps, environment);
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
    const envTabs = Array.from(document.querySelectorAll('.env-tab'));
    let selectedEnvironment = 'Production';

    if (!showInfoBtn) {
        console.error('Show deployment status button was not found.');
        return;
    }

    if (!statusCard) {
        console.error('Deployment status card was not found.');
        return;
    }

    if (envTabs.length === 0) {
        console.error('Environment tabs were not found.');
        return;
    }

    envTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            selectedEnvironment = tab.dataset.environment;
            envTabs.forEach(item => item.classList.toggle('active', item === tab));
        });
    });

    showInfoBtn.addEventListener('click', () => simulateDeploymentStatus(statusCard, showInfoBtn, selectedEnvironment));
    console.log('Static website loaded successfully');
});
