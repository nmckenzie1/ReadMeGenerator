function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license.replace(/ /g, "")}-blue.svg)`
    }
    return ''
  }
  
  function renderLicenseLink(license) {
    if (license !== "None") {
      return (
        `\n  * [License](#license)\n`
      )
    }
    return ''
  }
  
  function renderLicenseSection(license) {
    if (license !== "None") {
      return (
        `## License
  
  This project is licensed under the ${license} license.`
      )
    }
    return ''
  }
  
  function generateReadMe(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Table of Contents 
  * [About the Project](#about)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
    ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Road Map](#road)
  
  * [Contact](#contact)
  
  * [Acknowledgements](#acknowledgements)
  
  ## About
  
  ${data.description}
  
  ## Installation
  
  To install the project and necessary dependencies:
  Clone the repo:
  \`\`\`
  git clone https://github.com/${data.username}/${data.projectName}.git
  \`\`\`
  Then run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}

  ## Road Map

  ${data.future}
  
  ## Contact
  
  If you would like to know more about the repo, contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).

  ## Acknowledgements
  ${data.thanks}
  
  `;
  }
  
  module.exports = generateReadMe;