# cypress
**Cypress framework for recruitment**

**About fluffy-cypress**

This repo contains the alternate Javascript test framework using Cypress that the SND QA Team can use as part of the pairing test assessment.

**Pre-requisite**

-Node.js and npm installed
-GIT client 
-SSH keys configured 

**Clone project using git bash:**

git clone git@github.com:springernature/fluffyCypress.git

**To install Cypress within the project**

From fluffyCypress (root) folder , run below command first : 

npm install  ---> Running this command should create node_modules directory 

After running this command , check if you node modules directory has been created and you should have cypress present inside the node modules. If you dont have Cypress only then run below command :

npm install -g cypress --save-dev 

**For running it in headed mode** 

npx cypress open or node_modules/.bin/cypress open
(this will open the Test Runner window which has option to view the test specs and run them)

**For running it in headless mode** 

npx cypress run or node_modules/.bin/cypress run --- This will show the end results

**Note:** Two tests are ready to run **AdvancedSearchPageTest** and **HomePagePageTest** 
(spec files placed under cypress/e2e folder).

