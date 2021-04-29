const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adv_js_ca3',
err => {
    if(!err)
    console.log('MongoDB - succés de la connexion. Bon chance!');
    else
    console.log('ERREUR! Connexion pour le MongoDB nest pas a succés: ' + JSON.stringify(err, undefined, 2));
});