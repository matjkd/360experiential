
<!DOCTYPE html>
<html>
    <head>
        <?= $this->load->view('template/' . $this->config_theme . '/header') ?>

    </head>
    <body style="margin:0;padding:0;">

        <!--   hidden input to pass base url to js files-->
        <input type="hidden" id="baseurl" value="<?= base_url() ?>"/>
   <div id="cloudpopup">
            
            Hello World
            
        </div>
        <div id="fixedsmoke" >

            <div class="container">
                <div id="ideas" class="sixteen columns">
                    <div id="Stage" class="smokelinks">
                    </div>

                </div>

            </div>



        </div>


        <?= $this->load->view('template/' . $this->config_theme . '/fixedbase') ?> 
        
        
     

        <div id="footer"></div>


        <?= $this->load->view('template/' . $this->config_theme . '/footer') ?>
    </body>
</html>
