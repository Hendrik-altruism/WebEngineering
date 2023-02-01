<?php
session_start();

if(isset($_POST["login"])){
     $email = $_POST["emailAdress"];
     $pw = $_POST["password"];
     $file = "./ressources/user/data.json";  
     $data = file_get_contents($file);
     $arr = json_decode($data);
     $arrlen = count($arr); 
     for($x = 0; $x < $arrlen; $x++){
        if($arr[$x][0]==$email){
            if($arr[$x][1]==$pw){
                $_SESSION["name"] = $email;
                header("Location: index.php");
                exit();
            }else{
                $_SESSION["password"] = '<div class="mistake">Das Passwort ist falsch</div>';
                header("Location: login.php");
                exit();
            }
        }
     }
    $_SESSION["user"] = '<div class="mistake">Der Nutzer existiert nicht</div>';
    header("Location: login.php");
    exit();
}

if(isset($_POST["register"])){
     $_SESSION["register"] = 'true';
     $email = $_POST["emailAdress"];
     $pw = $_POST["password"];
     $pw2 = $_POST["password2"];
     if($pw != $pw2){
        $_SESSION["equalpw"] = '<div class="mistake">Passwörter stimmen nicht überein</div>';
        header("Location: login.php");
        exit();
     }
    $file = "./ressources/user/data.json";  
    $data = file_get_contents($file);
    $arr = json_decode($data);
    $arrlen = count($arr); 
    for($x = 0; $x < $arrlen; $x++){
        if($arr[$x][0]==$email){
            $_SESSION["emailused"] = '<div class="mistake">Email Adresse schon vergeben</div>';
            header("Location: login.php");
            exit();
        }
    }
    array_push($arr, [$email, $pw]);
    $newData = json_encode($arr);
    file_put_contents($file, $newData);
    $_SESSION["name"] = $email;
    header("Location: index.php");
    exit();
}
?>