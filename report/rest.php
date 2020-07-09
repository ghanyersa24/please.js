<?php
date_default_timezone_set('Asia/Jakarta');
$project = "Point of Sales";
$result = array();

$cdir = scandir(__DIR__);
foreach ($cdir as $key => $value) {
    if (!in_array($value, array(".", ".."))) {
        // if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) {
        //     $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
        // } else {
        // $result[] = $value;
        // }
        if (substr($value, 0, 1) == 'v') {
            $result[] = [
                'name' => 'Dokumen Report ' . $value,
                'link' => $value.'/index.html',
                'date' => $update = date("d F Y", filectime($value . '/index.html')),
                'detail' => "Dokumen merupakan hasil dari Automated Testing project <strong>$project</strong> yang dibuat pada tanggal <strong> $update </strong>.",
            ];
        }
    }
}
if (!empty($result))
    echo json_encode([
        'error' => false,
        'message' => 'data direktori berhasil didapatkan',
        'data' => $result
    ]);
else
    echo json_encode([
        'error' => true,
        'message' => 'belum ada report dokumen yang tersedia',
        'data' => []
    ]);
