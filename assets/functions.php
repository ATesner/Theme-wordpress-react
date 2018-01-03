<?php
add_theme_support( 'post-thumbnails' );

function scriptsAndStyles() {
    wp_enqueue_style('mytheme-style', get_theme_file_uri("style.css"));
    wp_enqueue_style('bootstrap-style', "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    wp_enqueue_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js");
    wp_enqueue_script('bootstrap-js', "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
    wp_enqueue_script('mytheme-scripts', get_template_directory_uri() . '/main.js', array(), false, true);

}
add_action('wp_enqueue_scripts', 'scriptsAndStyles');
add_filter('rest_allow_anonymous_comments', '__return_true');
?>