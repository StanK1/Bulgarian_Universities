<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Bulgarian Uni</title>
  <meta content="" name="description">
  <meta content="" name="keywords">


  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">


  <link href="assets/css/style.css" rel="stylesheet">
  

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <style>
            .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.table-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}


#searchResult {
  margin-top: 30px;
}

#tableWrapper {
  margin-top: 20px;
}

.table {
  width: 100%;
}

.table th,
.table td {
  vertical-align: middle;
}

.table thead th {
  background-color: #343a40;
  color: #fff;
  font-weight: 500;
  text-align: center;
}

.table tbody td {
  text-align: center;
}

          a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
        </style>
</head>

<body id="body1">
<header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/favicon.png" alt="" class="img-fluid"></a></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.html" style="font-family:Verdana, Geneva, Tahoma, sans-serif">Начало</a></li>
          <li><a class="nav-link scrollto" style="font-family:Verdana, Geneva, Tahoma, sans-serif" href="index.html#about">Относно</a></li>
          <li><a class="nav-link{% if page.name == 'index.php' %} active {% endif %}" style="font-family:Verdana, Geneva, Tahoma, sans-serif" href="index.php">Специалности</a></li>
          <li><a class="nav-link scrollto" style="font-family:Verdana, Geneva, Tahoma, sans-serif" href="index.html#gallery">Галерия</a></li>
          <li class="dropdown" style="font-family:Verdana, Geneva, Tahoma, sans-serif"><a href="index.html#"><span>Градове</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="Cities/sofia.html" >София</a></li>
              <li><a href="Cities/plovdiv.html">Пловдив</a></li>
              <li><a href="Cities/varna.html">Варна</a></li>
              <li class="dropdown"><a href="#"><span>Други...</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a  href="Cities/blagoevgrad.html">Благоевград</a></li>
                  <li><a href="Cities/burgas.html">Бургас</a></li>
                  <li><a href="Cities/veliko_tarnovo.html">Велико Търново</a></li>
                  <li><a href="Cities/gabrovo.html">Габрово</a></li>
                  <li><a href="Cities/pernik.html">Перник</a></li>
                  <li><a href="Cities/pleven.html">Плевен</a></li>
                  <li><a href="Cities/ruse.html">Русе</a></li>
                  <li><a href="Cities/svishtov.html">Свищов</a></li>
                  <li><a href="Cities/starazagora.html">Стара Загора</a></li>
                  <li><a href="Cities/shumen.html">Шумен</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="index.html#footer" style="font-family:Verdana, Geneva, Tahoma, sans-serif">Контакти</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>


      <a href="calculator.html" class="get-started-btn scrollto" style="font-family:Verdana, Geneva, Tahoma, sans-serif">Калкулатор на бал</a>

    </div>
  </header>

  <main id="main">

  
 <div class="wrapper">
	<div class="box">
   <h2 id=textP>Потърси Желанието си</h2><br />
   <div class="form-group">
    <div class="input-group">
     
     <input style="width: 800px; max-width: 800px;" type="text" name="form-control" id="form-control" placeholder="Search..." class="form-control" />
    </div>
   </div>
   <br />
</div>
</div>
<div id="searchResult"></div>




   
      
      
      
<div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        <script src="assets/js/main.js"></script>
      
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script>
$(document).ready(function(){

 load_data();

 function load_data(query)
 {
  $.ajax({
   url:"fetch.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#searchResult').html(data);
    $("#searchsearchResult").css("display", "block");
   }
  });
 }
 
 $('#form-control').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   $("#searchsearchResult").css("display", "none");
  }
 });
});





</script>
</body>
</html>