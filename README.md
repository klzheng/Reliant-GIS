<br />

<!-- TITLE -->
<div  align="center">
    <h1  align="center">ReliantGIS</h1>
</div>




<p align="center">
  <img src="https://github.com/klzheng/Reliant-GIS/blob/main/public/ReliantGIS%20Demo.gif" alt="Project Demo" width="100%"  />
</p>


<!-- TABLE OF CONTENTS -->
<details>
    <ol>
        <li><a  href="#reliantgis">ReliantGIS</a></li>
        <li><a  href="#demo">Demo</a></li>
        <li><a  href="#built-with">Built With</a></li>
        <li><a  href="#features">Features</a></li>
        <li><a  href="#run-locally">Run Locally</a></li>
        <li><a  href="#environment-variables">.ENV variables</a></li>
    </ol>
</details>

<br />

## ReliantGIS

Many are interested in data visualization, but it is rare to find free and easy to access applications that provide interesting statistics with proper visualization. ReliantGIS is a geographic information system web application that tells you various demographic and income data across the United States. It includes features like:

- **Visualizing data at all scales**  &ndash;   Information is provided across states, counties, zip codes, tracts, and even blocks!  

- **Searching feature** &ndash;  Look up a point of interest in a fast, simple, and easy way using the search bar on the pop-up menu

- **Choosing between different feature layers** &ndash; Whether you want to see the median household income or the diversity index of an area - both are possible when selecting between the different layers 


<br />

## Demo
Try it out here using this [link](https://reliant-gis.netlify.app/) or this one: [https://reliant-gis.netlify.app/](https://reliant-gis.netlify.app/).
No account required! Just visit the site and get started right away!



<br />

## Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)




<p align="right">(<a href="#tcdb" style="text-decoration:none;">↑</a>)</p>

## Features

- 🌎 All in one place to view income and demographic data anywhere in the US 
- 🔎 Use the search bar to quickly find a point of interest 
- 📱 Built using the ArcGIS API



<br />



## Run Locally 

1. Install npm

```bash
  npm install npm@latest -g
```

2. Clone the repo

```bash
  git clone https://github.com/klzheng/Reliant-GIS
```

3. Install dependencies 

```bash
  npm install
```

4. Start the server
```bash
  npm run start
```


5. Don't forget the environment variables!





<br />



## Environment Variable(s)

1. Create .env file

2. Create an ArcGIS Developer account and store your API key in the .env file)  

<br />

To run this project, you will need to add the following environment variables to your .env file:

`REACT_APP_ARCGIS_API_KEY` 

<br />

  
  
<p align="right">(<a href="#tcdb" style="text-decoration:none;">↑</a>)</p>