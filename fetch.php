<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "universities";

// Create connection
$connect = mysqli_connect($servername, $username, $password, $database);

$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["query"]);
 $query = "
 SELECT majors.id, uni.uni_name AS uni_name, 
 CONCAT(UCASE(LEFT(faculty.faculty_name, 1)), LCASE(SUBSTRING(faculty.faculty_name, 2))) AS faculty_name, 
 CONCAT(UCASE(LEFT(majors.major, 1)), LCASE(SUBSTRING(majors.major, 2))) AS major, 
 city.city_name
 FROM majors
 JOIN uni ON majors.id_uni = uni.id_uni
 JOIN faculty ON majors.id_faculty = faculty.id_faculty
 JOIN city ON uni.id_city = city.id_city
 WHERE uni.uni_name LIKE '%".$search."%'
 OR faculty.faculty_name LIKE '%".$search."%'
 OR majors.major LIKE '%".$search."%'
 OR city.city_name LIKE '%".$search."%'
 ORDER BY city.city_name ASC";
 $searchResult = mysqli_query($connect, $query);
 if(!$searchResult) { // Проверява заявката за грешки
     die(mysqli_error($connect));
 }
 else if(mysqli_num_rows($searchResult) > 0)
 {
  $output .= '
  <div class="table-container">
   <div class="table-responsive">
    <table class="table table bordered">
     <tr>
     <!-- <th scope="col" style="color:white">№</th>    -->
     <th scope="col" style="color:white">Университет</th>
     <th scope="col" style="color:white">Факултет</th>
     <th scope="col" style="color:white">Специалност</th>
     </tr>
  ';
  while($row = mysqli_fetch_array($searchResult))
  {
   $output .= '
    <tr>
    <!--  <td scope="col" style="color:white">'.$row["id"].'</td>   -->
    <td scope="col" style="color:white">' . $row["uni_name"] . " - " . $row["city_name"] . '</td>
    <td scope="col" style="color:white">'.$row["faculty_name"].'</td>
    <td scope="col" style="color:white">'.$row["major"].'</td>
    </tr>
   ';
  }
  echo $output;
 }
 else
 {
  echo 'Data Not Found';
 }
}
?>