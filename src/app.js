import $ from "jquery/src/jquery.js";
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/style.css';
import './script/components/navbarApp.js';
import './script/components/carousel.js';
import './script/components/myfooter.js';

import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main)

// link API = https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita