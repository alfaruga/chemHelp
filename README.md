<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">ChemHelpTools</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> # chemHelp
Tools required to do my job



    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>


This project will:
 
 1) Calculate molar mass of compounds
 2) Balance chem equations


## Usage 

### Retrieve all the peirodic table in JSON format

To get the information of a single element go to:
https://chemhelp-node-rest-api.azurewebsites.net/api/elements

### Retrieve data of an element in JSON format

To get the information of a single element use the default route (api/elements) + the element symbol.

Example

```
https://chemhelp-node-rest-api.azurewebsites.net/api/elements/H
```

## 🔧 Running the tests <a name = "tests"></a>

Some test were run using Jest for the routes defined. So far the mass of two or more elements can be obtained. Yet to be implemented...
## 🚀 Deployment <a name = "deployment"></a>

It was deploy on Azure using Azure app services and AzureCosmosDB for MongoDB.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

Alexis Ruiz (https://github.com/alfaruga)

##  References <a name = "acknowledgement"></a>

- References FullStackOpen : (https://wwww.fullstackopen.com/)