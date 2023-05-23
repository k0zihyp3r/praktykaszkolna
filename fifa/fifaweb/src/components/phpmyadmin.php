<?php

$conn = new mysqli('mysql8','37343918_liga','Pogon1@3','37343918_liga','3380');

if(mysqli_connect_error()){
    echo mysqli_connect_error;
    exit();
}
else{

    $player = $_POST['name'];
    $teamName = $_POST['teamName'];
    $id = $_POST['id'];

    $sql = "INSERT INTO `amateur_fifa_league`(`player`, `teamName`, `id`, `score`) VALUES('$player','$teamName','$id');";
    $res = mysqli_query($conn,$sql);

    if($res){
        echo "Rejestracja udana!";
    }
    else{
        echo "error";
    }
    $conn->close();
}



?>