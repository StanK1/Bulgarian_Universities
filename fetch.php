<?php
$servername = "localhost";
$username = "id20627371_universities";
$password = "Stanislav123@";
$database = "id20627371_uni";

// Create connection
$connect = mysqli_connect($servername, $username, $password,$database);

$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["query"]);
 $query = "
  SELECT * FROM majors 
  WHERE uni LIKE '%".$search."%'
  OR faculty LIKE '%".$search."%' 
  OR major LIKE '%".$search."%' 
  
 ";
}
else
{
 $query = "
  SELECT * FROM majors ORDER BY id LIMIT 10
 ";
}
$searchResult = mysqli_query($connect, $query);
if(mysqli_num_rows($searchResult) > 0)
{
 $output .= '
 <div class="table-container">
  <div class="table-responsive">
   <table class="table table bordered">
    <tr>
    <th scope="col" style="color:white">№</th>
    <th scope="col" style="color:white">Университет</th>
    <th scope="col" style="color:white">Факуктет</th>
    <th scope="col" style="color:white">Специалност</th>
    </tr>
 ';
 while($row = mysqli_fetch_array($searchResult))
 {
  $output .= '
   <tr>
   <td scope="col" style="color:white">'.$row["id"].'</td>
   <td scope="col" style="color:white">'.$row["Uni"].'</td>
   <td scope="col" style="color:white">'.$row["Faculty"].'</td>
   <td scope="col" style="color:white">'.$row["Major"].'</td>
   </tr>
  ';
 }
 echo $output;
}
else
{
 echo 'Data Not Found';
}

?>