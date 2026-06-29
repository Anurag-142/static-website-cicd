# Static Website CI/CD

## Project Overview

This project demonstrates a complete CI/CD pipeline using Azure DevOps.

## Technologies

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Azure Repos
- Azure DevOps Pipelines

## Pipeline

The Azure DevOps pipeline performs the following steps:

1. Checkout source code
2. Prepare the build folder
3. Validate HTML, CSS, and JavaScript
4. Publish build artifacts
5. Deploy static content to Azure Storage

## Architecture

This project is a static website served with a simple frontend and a CI/CD pipeline that:

- checks source code from the Git repository
- builds a static artifact folder
- validates content quality before publishing
- stores artifacts using Azure DevOps pipeline artifacts
- deploys the final static output to Azure Storage

## Pipeline stages

- Build: collect HTML, CSS, and JavaScript into a build folder
- Validate: run HTML, CSS, and JavaScript validation checks
- Publish: publish the build folder as a pipeline artifact
- Deploy: deploy the downloaded artifact to Azure Storage via Azure CLI

## Azure resources used

- Azure Storage account for static website hosting
- Azure DevOps pipeline for build, test, publish, and deploy
- Azure service connection for authenticating deployment commands

## Variables

This pipeline uses a Variable Group named `StaticWebsite-Dev` that should contain the environment-specific deployment values.

Common variables in the group include:

- `StorageAccount`
- `ResourceGroup`
- `Environment`
- `productionStorageAccountName`
- `stagingStorageAccountName`
- `developmentStorageAccountName`
- `resourceGroupName`

Pipeline-specific variables in `azure-pipelines.yml` include:

- `artifactName`: name of the published pipeline artifact
- `azureServiceConnection`: Azure DevOps service connection name
- `targetEnvironment`: target deployment environment (`Production` by default)

## How to deploy

1. Create or verify an Azure DevOps environment named `Production`.
2. Configure an Azure service connection named `azure-static-web-connection`.
3. Ensure the pipeline variables point to the correct storage account and resource group.
4. Push changes to `main` or open a pull request to trigger validation.
5. Review the deployment job in Azure DevOps after the artifact is published.

## Screenshots

The following screenshots are useful to include in the project README:

- Pipeline success
- Azure Storage static website
- Live website
- Service connection

Add the actual image files under `screenshots/` and use the paths below. Replace these sample filenames with the real screenshot files once available.

Tip: capture screenshots from Azure DevOps or your browser, save them as PNG files, and add them to the `screenshots/` folder before committing.

![Pipeline success](screenshots/pipeline-success.png)

![Azure Storage static website](screenshots/azure-storage-static-website.png)

![Live website](screenshots/live-website.png)

![Service connection](screenshots/service-connection.png)

## Troubleshooting

- If HTML or CSS validation fails, inspect the pipeline logs for file-specific errors.
- If deployment fails, verify the storage account name and service connection permissions.
- If artifact download fails, confirm the artifact name matches the published artifact.

## What’s Included

- Simple static website layout with responsive design
- JavaScript-powered deployment status simulation with progress steps, environment selection, and persistent deployment history
- Azure DevOps YAML pipeline for build/test/publish/deploy with production/staging environment support
- Modern CSS styling with reusable feature cards

## Future Enhancements

- HTML validation
- CSS linting
- JavaScript linting
- Continuous deployment to Azure Storage
- Implement accessibility testing in CI
- Use versioned artifact storage for rollback support
- Add review deployment approvals and gating

