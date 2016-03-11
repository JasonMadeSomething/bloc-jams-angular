(function() {
    function volumeButton(){
        return {
            templateUrl: '/templates/directives/volume_button.html',
            replace: true,
            restrict: 'E',
            scope: { 
                onMute: '&'
            },
            link: function(scope, element, attributes) {
                
                scope.mute = false;
                
                scope.toggleMute = function() {
                    
                    if(scope.mute){
                        element.removeClass('ion-volume-mute');
                        element.addClass('ion-volume-high');
                        scope.mute = false;
                    } else{
                        element.addClass('ion-volume-mute');
                        element.removeClass('ion-volume-high');
                        scope.mute = true;
                    }
                    notifyOnMute();
                };
                
                var notifyOnMute = function() {
                    scope.onMute();
                };
                
            }
        };
    }
    
    angular
        .module('blocJams')
        .directive('volumeButton', volumeButton);
})();