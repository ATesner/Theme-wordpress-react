<?php
add_theme_support( 'post-thumbnails' );

function scriptsAndStyles() {
    wp_enqueue_style('mytheme-style', get_theme_file_uri("style.css"));
    wp_enqueue_style('bootstrap-style', "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    wp_enqueue_style('prism-style', get_theme_file_uri('prism.css'));
    wp_enqueue_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js");
    wp_enqueue_script('bootstrap-js', "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
    wp_enqueue_script('prism-script', get_template_directory_uri() . '/prism.js', array());
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/main.js', array(), false, true);

}
add_action('wp_enqueue_scripts', 'scriptsAndStyles');
add_filter('rest_allow_anonymous_comments', '__return_true');
add_filter('jpeg_quality', function(){return 100;});


class My_Rest_Server extends WP_REST_Controller {
 
    //The namespace and version for the REST SERVER
    var $my_namespace = 'custom-endpoint/v';
    var $my_version   = '1';
   
    public function register_routes() {
        $namespace = $this->my_namespace . $this->my_version;
        $base      = 'contact';
        register_rest_route( $namespace, '/' . $base, 
            array(
                array(
                    'methods'         => WP_REST_Server::CREATABLE,
                    'callback'        => array( $this, 'send_message' )
                )
            )  
        );
    }
   
    // Register our REST Server
    public function hook_rest_server(){
      add_action( 'rest_api_init', array( $this, 'register_routes' ) );
    }
   
    public function send_message( WP_REST_Request $request ){

        $to = 'tesnerantoine@gmail.com';
        $subject = 'AT.fr - ' . $request->get_param( 'name' );
        $message =  $request->get_param( 'message' );

        wp_mail( $to, $subject, $message );

        return 'Mail envoyé !';
    }
  }
   
  $my_rest_server = new My_Rest_Server();
  $my_rest_server->hook_rest_server();

?>