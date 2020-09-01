# GitHub Connect
### 28.08.2020
####  An angular web application which uses Github Api and allows users to search for github users and github repos
<!-- ![alt text](src/assets/scs/app1.png)

![alt text](src/assets/scs/app3.png)

![alt text](src/assets/scs/app2.png) -->
## Author
[Dennis Kamunya](https://github.com/D-Kamunya)

## Versioning
GitHub Connect V1.0

## Description
An angular web application which uses Github Api and allows users to search for github users and github repos
The link to the live site is https://d-kamunya.github.io/Github-Connect/
## Features
Here are the features in summary:
* Uses the Github API to perform searches on Github, and display the results to the users.
* Home page searches for user profile strictly using the Github connect developers username.
* Search Users page searches for user profile strictly using the user name.
* Search Repositories page searches for repositories strictly using the repository name.


## Behaviour Driven Development (BDD)

| Behaviour | Input | Output |
| --------- | ------| ------ |
|Show github profile|Enter the Username in the search box and cick `search`|Displays name, username, bio,location,blog link, number of repositories,date of creating the repo, followers and following users|
|Search gitub repositories | Navigate to Search enter repo name and click search.|Displays a list of all repositories based on the query|
|Redirect to github profile on Github website | Click the `github icon` button of a Github user | Opens the profile on the Github website|
|Showing Error message | Enter invalid repository or github username | Shows error message|
|Redirect to a specific Github Repository | Click the `github icon` button of a repository on repositories page | Opens the Repository on Github website |
                   |
                   

## Setup/Installation Requirements
* **Installation**

* Clone this repository using **`git clone https://github.com/D-Kamunya/Github-Connect.git`**, or downloading a ZIP file of the code.
* The repository, if downloaded as a .zip file will need to be extracted to your preferred location and opened
* Open the terminal, go to the project directory and download the dependencies in the package.json using **`npm install`**

* **Development server**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* **Code scaffolding**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* **Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* **Running unit tests**

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* **Running end-to-end tests**

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
To view the app, open the live site link provided below on the README.
Here is a run through of how to set up the application:

## Technologies Used
* Angular
* HTML  
* CSS
* Typescript
* Bootstrap 4
* Material Design Bootstarp
* Github Api

## Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## Support and contact details
If you run into any problems feel free to contact me @dennismuriithik@gmail.com
#### License
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2020 Dennis Kamunya

