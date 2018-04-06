<template>
    <b-navbar class="navbar navbar-expand-sm navbar-default navbar-fixed-top navbar-dark" id="mainNav">
        <div class="container-fluid">
        <div class="navbar-header">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            
            <b-navbar-brand href="#">
              <img style="max-width:150px;" class="d-inline-block" src="//bitboatassets.s3.amazonaws.com/bitboat/assets/entropy_logo_text_white-e0176ffd0aa399ff0ec1fe28073aafd7e809a5fe6c4135450014d6e19a244d1f.png" alt="Entropy logo text white">
            </b-navbar-brand>
          </div>
            
          <b-collapse class="collapse navbar-collapse main-navbar" id="nav_collapse">
              <!-- Collect the nav links, forms, and other content for toggling -->
              <b-navbar-nav>
                  <b-nav-item>
                    Status
                  </b-nav-item>
                  <b-nav-item>
                    Join
                  </b-nav-item>
                  <b-nav-item>
                    Missions
                  </b-nav-item>
              </b-navbar-nav>
              
          </b-collapse>
        </div>

    </b-navbar>
</template>

<script>

export default {

  name: 'navs',

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
