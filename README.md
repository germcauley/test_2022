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

Project uses the Page Object Model structure, making methods and locators as reusable as possible. Cross browser tests can be run in parallel or individually using different terminal commands.

 Tests seem to become less stable the more workers processes that are in use so some fine tuning is still required. 2-3 worker process seem to work the best if executing tests in parallel.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](ttps://nodejs.org)
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
   //A) using a single worker process
   npx playwright test --workers 1
   //B) using 2 worker processes
   npx playwright test --workers 2
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




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/germcauley/
[product-screenshot]: images/screenshot.png
