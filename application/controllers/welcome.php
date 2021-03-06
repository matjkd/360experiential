<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Welcome extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('captcha_model');
    }

    public function index() {

        $segment_active = $this->uri->segment(2);
        if ($segment_active != NULL) {
            $data['menu'] = $this->uri->segment(2);
        } else {
            $data['menu'] = 'experiential';
        }

        $this->get_content_data($data['menu']);

        $data['captcha'] = $this->captcha_model->initiate_captcha();
        $data['seo_links'] = $this->content_model->get_seo_links();



        $data['sidebar'] = "sidebox/side";
      //  $data['main_content'] = "global/" . $this->config_theme . "/content";
        $data['cats'] = $this->products_model->get_cats();
        $data['products'] = $this->products_model->get_all_products();
        $data['section2'] = 'global/links';
        if ($this->session->flashdata('message')) {
            $data['message'] = $this->session->flashdata('message');
        }


        $this->load->vars($data);
        $this->load->view('template/main');
    }

    function get_content_data($menu) {
        $data['content'] = $this->content_model->get_content($menu);
        $data['case_studies'] = $this->content_model->get_case_studies();
        $data['what_we_do'] = $this->content_model->get_content('what_we_do');
        foreach ($data['content'] as $row):

            $data['title'] = $row->title;
            $data['sidebox'] = $row->sidebox;
            $data['metatitle'] = $row->meta_title;
            $data['topsection'] = $row->topsection;
            $data['meta_keywords'] = $row->meta_desc;
            $data['meta_description'] = $row->meta_keywords;
           
            $data['mainsize'] = $row->mainsize;
            $data['rightsize'] = $row->rightsize;
            $data['slideshow'] = $row->slideshow;

        endforeach;
        $this->load->vars($data);
        return $data;
    }
    
    function pages() {
    
    	$segment_active = $this->uri->segment(1);
    	if ($segment_active != NULL) {
    		$data['menu'] = $this->uri->segment(1);
    	} else {
    		$data['menu'] = 'experiential';
    	}
    
    	$this->get_content_data($data['menu']);
    
    	$data['captcha'] = $this->captcha_model->initiate_captcha();
    	$data['seo_links'] = $this->content_model->get_seo_links();
    
    
    
    	$data['sidebar'] = "sidebox/side";
    	
    	$data['cats'] = $this->products_model->get_cats();
    	$data['products'] = $this->products_model->get_all_products();
    	$data['section2'] = 'global/links';
    	if ($this->session->flashdata('message')) {
    		$data['message'] = $this->session->flashdata('message');
    	}
    
    
    
    	if($data['menu'] == 'portfolio') {
    		$this->load->vars($data);
    		$this->load->view('template/access360/portfolio');
    	} else {
    		$this->load->vars($data);
    		$this->load->view('template/plain');
    	}
    }
    
    function content() {
        
        $segment_active = $this->uri->segment(1);
        if ($segment_active != NULL) {
            $data['menu'] = $this->uri->segment(1);
        } else {
            $data['menu'] = 'experiential';
        }

        $this->get_content_data($data['menu']);

        $data['captcha'] = $this->captcha_model->initiate_captcha();
        $data['seo_links'] = $this->content_model->get_seo_links();



        $data['sidebar'] = "sidebox/side";
       $data['main_content'] = "";
        $data['cats'] = $this->products_model->get_cats();
        $data['products'] = $this->products_model->get_all_products();
        $data['section2'] = 'global/links';
        if ($this->session->flashdata('message')) {
            $data['message'] = $this->session->flashdata('message');
        }


        
      if($data['menu'] == 'portfolio') {
       $this->load->vars($data);
        $this->load->view('template/access360/portfolio');
      } else {
        $this->load->vars($data);
        $this->load->view('template/plain');
        }
    }

    function test() {
        $data['main_content'] = 'slideshow/slideshow';
        $this->load->vars($data);
        $this->load->view('template/main');
    }

    function home() {

        $segment_active = $this->uri->segment(3);
        if ($segment_active != NULL) {
            $data['menu'] = $this->uri->segment(3);
        } else {
            $data['menu'] = $this->uri->segment(1);
        }

        $this->get_content_data($data['menu']);

        $data['captcha'] = $this->captcha_model->initiate_captcha();

       
        
        $data['sidebar'] = "sidebox/side";
       // $data['main_content'] = "global/" . $this->config_theme . "/content";
        //$data['cats'] = $this->products_model->get_cats();
        //$data['products'] = $this->products_model->get_all_products();
        $data['section2'] = 'global/links';
        $data['seo_links'] = $this->content_model->get_seo_links();
        if ($this->session->flashdata('message')) {
            $data['message'] = $this->session->flashdata('message');
        }


        $this->load->vars($data);
        $this->load->view('template/main');
    }

    function gallery($gallery) {
        $data['content'] = $this->content_model->get_gallery($gallery);
        $data['main_content'] = "global/gallery";
        $this->load->vars($data);
        $this->load->view('template/main');
    }

    function main() {
        $segment_active = $this->uri->segment(3);
        if ($segment_active != NULL) {
            $data['menu'] = $this->uri->segment(3);
        } else {
            $data['menu'] = 'home';
        }

        $this->get_content_data($data['menu']);
        $data['captcha'] = $this->captcha_model->initiate_captcha();


       // $data['main_content'] = "global/" . $this->config_theme . "/content";
        $data['cats'] = $this->products_model->get_cats();
        $data['products'] = $this->products_model->get_all_products();
        $data['section2'] = 'global/links';
        if ($this->session->flashdata('message')) {
            $data['message'] = $this->session->flashdata('message');
        }


        $this->load->vars($data);
        $this->load->view('template/main');
    }

    function login() {
        if ($this->session->flashdata('message')) {
            $data['message'] = $this->session->flashdata('message');
        }
        $id = 'login';
        $data['content'] = $this->content_model->get_content($id);
        $data['main_content'] = "user/login_form";
        $data['title'] = "Login";
        $data['menu'] = 'login';

        $data['page'] = "login";
        $this->load->vars($data);
        $this->load->view('template/plain');
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
