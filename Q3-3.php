
	<?php
    $myfile = fopen("note.txt", "w");
    $txt = "Hi, I am Anmol Sinha, Roll no. A058 from batch B3 & currently pursuing MCA from MPSTME";
    fwrite($myfile, $txt);
    fclose($myfile);
    
    
    ?>
    
    