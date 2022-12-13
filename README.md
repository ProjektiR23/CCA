# CCA 

# (Climate change app) 

# CCA-ilmastonmuutossovellus

Tässä projektissa tarkoituksena oli opiskelijaryhmällä tuottaa sovellus hyödyntämällä web-ohjelmoinnin osaamista.

Sovelluksessa piirretään kuvaajia ilmastonmuutoksen vaikutuksista ilmakehän lämpötilaan ja hiilidioksidipitoisuuksiin. 
Sovellus on verkkosivu, jossa kuvaajat näkyvät eri sivuilla. Aiemmin mainitut sovelluksen elementit vaativat ryhmältä ohjelmointikokemusta ja -tietämystä backend:stä ja frontend:stä 

Tämän projektin tekivät Markus Risuaho, Onni Räisänen, Roni Tuohimaa ja Tomi Lämsä. Meidän ryhmällä ei oltu määritelty rooleja vaan kaikki työskentelivät full stack kehittäjinä. 
Sovellus toteutettiin käyttäen Reactia ja Node.js. MySQL tietokannassa serverinä käytettiin XAMPP:ssa olevaa Apachea. 

Sovellus aiottiin julkaista Google Cloudissa (Google Cloud Platform), käyttäen opiskelijoille tarkoitetulla kreditillä. 
Tietokannalla ja sovelluksella olisi ollut niille erilliset varatut palvelimet, mutta sovelluksen tuonti Google Cloudiin jäi kesken osaamisen ja priorisoinnin takia.
Tietokannan tuonti Google Cloud SQL palvelimelle onnistui, mutta itse sovelluksen tuonti ei.

Puuttuvia komponentteja sovelluksesta olivat responsiivisuus (osittain), V9 sekä V10 visualisoinnit, käyttäjän kirjautuminen, luominen ja poistaminen 
sekä henkilökohtaiset visualisointinäkymät.
Visualisoinneille rajapinnat toteutettiin, mutta ne eivät lähteneet toimimaan syystä tai toisesta Chart.JS:n kanssa.
Käyttäjän kirjautumisen ja luomisen rajapinnat toteutettiin myös, mutta toiminnallisuutta ei onnistuttu tekemään.
Testausta ei varsinaisesti implementoitu erilliseen koodibranchiin githubissa, vaan toteutettiin manuaalisesti testaamalla koodin toimintaa.

# SQL tiedosto tietokannalle löytyy ./server/test.sql

# Linkki github-organisaatioon : https://github.com/ProjektiR23
# Linkki projektin repositoriolle : https://github.com/ProjektiR23/CCA
# Linkki projektin esittelyvideoon : https://www.youtube.com/watch?v=batw95x5uB0



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
