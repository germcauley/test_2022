<div id="top"></div>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images\logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Automated Tests by Gerald McAuley</h3>

  <p align="center">
    Some tests for TeamWork QA env using playwright js
   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Some basic smoke tests using the Playwright e2e testing framework.

Project uses the Page Object Model structure, making methods and locators as reusable as possible.

The test are organised into three groups: Login test, task tests,milestone tests.
The task tests do not run in parallel as they make use of the same task list, however the milestone tests should run in parallel

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org)
* [Playwright](https://playwright.dev/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps in order to download and execute the tests correctly.

### Prerequisites

Install npm.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/germcauley/test_2022.git
   ```
2. Move to project directory
   ```sh
   cd test_2022/new-project/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the tests
   ```js  
   npx playwright test 
   ```
4. Serve the html report and view in browser
   ```js
    npx playwright show-report
   ```
<p align="right">(<a href="#top">back to top</a>)</p>




<!-- USAGE EXAMPLES -->
## More Info

_For more examples, please refer to the playwright [Documentation](https://playwright.dev/docs/intro)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Gerald McAuley - geraldmcauley@gmail.com


<p align="right">(<a href="#top">back to top</a>)</p>






[product-screenshot]: images/screenshot.png
