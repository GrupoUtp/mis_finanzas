<template>
    <div>
      <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">       
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>Nombre usuario</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <b-button @click="cerrarSesion()" variant="danger">Cerrar Sesión</b-button>
    </div>
  </section>

  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="./home">MI<span>$</span> FINANZA<span>$</span></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="@/assets/img/logo.png" alt=""></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="./home">Home</a></li>
          <li><a class="nav-link scrollto" href="./ingresos">Ingresos</a></li>
          <li><a class="nav-link scrollto" href="./egresos">Egresos</a></li>
          <li><a class="nav-link scrollto " href="./consolidado">Consolidado</a></li>
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> -->
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
    </div>
</template>

<script>
export default{

  data(){
    return{
      
  }
  },
  beforeCreate(){
    var auth = window.localStorage.getItem('AUTH');
    console.log("AUTH start the BC -> " +auth);
    if(auth !== 'ok'){
      this.$router.push({path: '/Login'});
    }
  },
  methods:{
    cerrarSesion(){
      window.localStorage.removeItem('AUTH');
      this.$router.push({path: '/Login'})
    }
  }
}
</script>
