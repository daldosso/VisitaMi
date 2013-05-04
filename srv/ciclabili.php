<?php

  $_CONFIG['user'] = "judoinvorio";
  $_CONFIG['pass'] = "prmnd05";
  $_CONFIG['dbname'] = "judoinvorio";
  $conn = mysql_connect($_CONFIG['host'], $_CONFIG['user'], $_CONFIG['pass']) or die('Impossibile stabilire una connessione: ' . mysql_error());
  mysql_select_db($_CONFIG['dbname']);

  $sql = 'select * from bikeCiclabili';
  $result = mysql_query($sql) or die(mysql_error());

  $numRows = mysql_num_rows($result);
  $data = array();
  $fields = array();
  $fields[] = array(
      'type' => 'string',
      'name' => 'idCiclabile'
  );
  $fields[] = array(
      'type' => 'string',
      'name' => 'nomeVia'
  );
  $data['success'] = 'true';
  $data['metaData'] = array(
      'fields' => $fields,
      'totalProperty' => 'numRecord',
      'root' => 'rows'
  );
  $data['successProperty'] = 'success';
  $data['numRecord'] = $numRows;
  $data['rows'] = array();
  while ($row = mysql_fetch_assoc($result)) {
      $data['rows'][] = array(
          'idCiclabile' => $row['idCiclabile'],
          'nomeVia' => $row['nomeVia'],
      );
  }
  
  echo json_encode($data);
  
  mysql_close($conn);

?>


