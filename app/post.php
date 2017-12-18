<?php

  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo ('Thank you, '. $_POST['name'] . '. Form has been submitted.');
  }

?>