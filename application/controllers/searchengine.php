<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class searchengine extends CI_Controller {

    public function index() {
        $this->load->view('main_view');
    }

    public function ajax() {

        $target = $this->input->get('target');

        switch ($target) {
            case "go":
                //$data = [];
                $data['keyword'] = $this->input->get('keyword');
                $this->load->view('ajax/go', $data);
                break;
            case "features":
                $this->load->view('ajax/features');
                break;
            case "cart":
                $this->load->view('ajax/cart');
                break;
            case "login":
                $this->load->view('ajax/login');
                break;
            case "register":
                $this->load->view('ajax/register');
                break;
            default:
                $this->load->view('ajax/404');
                break;
        }
    }

}

?>