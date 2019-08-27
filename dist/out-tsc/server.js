"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var core_1 = require("@angular/core");
// Express Engine
var express_engine_1 = require("@nguniversal/express-engine");
// Import module map for lazy loading
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var express = require("express");
var path_1 = require("path");
var static_paths_1 = require("./static.paths");
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Express server
var app = express();
// const PORT = process.env.PORT || 4000;
var PORT = process.env.PORT || 8000;
var DIST_FOLDER = path_1.join(process.cwd(), 'dist');
// // Our index.html we'll use as our template
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'browser'));
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(path_1.join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));
// To enable proper 404 redirects in non existent routes we need to specify the existing routes and then
// add a '*' route for all the non existent routes to be treated with a 404 status
console.log('Enabled ROUTES:');
static_paths_1.ROUTES.forEach(function (route) {
    console.log(route);
    app.get("" + route, function (req, res) {
        console.time("GET: " + req.originalUrl);
        res.render('index', {
            req: req,
            res: res
        });
        console.timeEnd("GET: " + req.originalUrl);
    });
});
app.get('*', function (req, res) {
    console.time("GET: " + req.originalUrl + " [404]");
    res.status(404).render('index', {
        req: req,
        res: res,
        requestUrl: '/404'
    });
    console.timeEnd("GET: " + req.originalUrl + " [404]");
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map