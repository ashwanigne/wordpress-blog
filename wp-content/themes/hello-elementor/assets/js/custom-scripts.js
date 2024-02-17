jQuery(document).ready(function(jQuery) {
    console.log('sdsdasd');
    jQuery('.menu-item-svg').tooltipster({
        theme: 'tooltipster',
        side: 'bottom',
        animation: 'grow',
        delay: 200,
        functionInit: function(instance, helper, content) {
            // Extract content from the hidden template
            var templateContent = jQuery('#tooltip_content').html();
            instance.content(jQuery(templateContent));
        }
    });
});