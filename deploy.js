const { exec } = require('child_process');

// Function to execute shell commands
const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
};

// Main function to handle deployment
const deploy = async () => {
    try {
        // 1. Prepare Environment
        await executeCommand('export PATH=/opt/cpanel/ea-nodejs24/bin:$PATH');

        // 2. Install/Update Node.js Dependencies
        await executeCommand('/usr/bin/npm install --prefix /home/devbouhv/api2');

        // 3. Restart the Node.js Application
        await executeCommand('/usr/bin/passenger-config restart-app --ignore-app-not-running /home/devbouhv/api2');

        console.log('Deployment successful!');
    } catch (error) {
        console.error(`Deployment failed: ${error}`);
    }
};

// Execute the deployment
deploy();