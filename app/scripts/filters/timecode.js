(function() {
    function timecode() {
        return function(seconds) {
            
            return buzz.toTimer(seconds, false);
        };
    }
    
    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();