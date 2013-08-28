define('routes_api', [], function() {
    return {
        'collections': '/api/v1/rocketfuel/collections/',
        'collection': '/api/v1/rocketfuel/collections/{0}/',
        'add_app': '/api/v1/rocketfuel/collections/{0}/add_app/',
        'remove_app': '/api/v1/rocketfuel/collections/{0}/remove_app/',
        'reorder_apps': '/api/v1/rocketfuel/collections/{0}/reorder/',
        'duplicate': '/api/v1/rocketfuel/collections/{0}/duplicate/',

        'categories': '/api/v1/apps/category/',
        'carriers': '/api/v1/services/carrier/',
        'regions': '/api/v1/services/region/',
        'search': '/api/v1/apps/search/',

        'login': '/api/v1/account/login/'
    };
});
