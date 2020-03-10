export default {
    databaseUrl: function(canvasId) {
        return 'http://localhost:9000/w3c/services/search/target?fields=source&strict=true&value=' + encodeURI(canvasId);
    },
    databaseHeaders: function() {
        return {
            'Accept': 'application/ld+json; profile="http://ww.w3.org/ns/anno.jsonld"'
        }
    }
}