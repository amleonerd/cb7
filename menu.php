<?php print_r($_POST); ?>
   
   <?php 
   
   function sum($num) { 
       $sum = 0; 
       for ($i = 0; $i < strlen($num); $i++){ 
           $sum += $num[$i]; 
       } 
       return $sum; 
   } 
    
   $num = "711"; 
   echo sum($num); 
   ?> 
     
     <?php
   
   // Example array
   
   $array = array(
       'egg' => true,
       'cheese' => false,
       'hair' => 765,
       'goblins' => null,
       'ogres' => 'no ogres allowed in this array'
   );