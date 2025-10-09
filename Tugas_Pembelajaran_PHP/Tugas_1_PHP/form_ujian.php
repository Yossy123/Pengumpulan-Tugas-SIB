<!DOCTYPE html>
<html>
<head>
    <title>Form Hasil Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f7fafc;
            margin: 40px;
        }
        h2, h3 {
            color: #1565c0;
        }
        form {
            background: #fff;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            max-width: 350px;
        }
        input {
            margin-bottom: 10px;
            padding: 7px;
            width: 96%;
            border: 1px solid #b0bec5;
            border-radius: 4px;
            font-size: 1em;
        }
        button {
            background: #1565c0;
            color: #fff;
            padding: 8px 18px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1em;
        }
        button:hover {
            background: #0d47a1;
        }
        .output {
            background: #e3f2fd;
            padding: 15px 25px;
            margin-top: 18px;
            border-left: 4px solid #1565c0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h2>Form Ujian</h2>
    <form method="post" action="">
       Nama: <input type="text" name="nama" required><br>
       Email: <input type="email" name="email" required><br>
       Nilai Ujian: <input type="number" name="nilai" min="0" max="100" required><br>
        <button type="submit">Kirim</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = htmlspecialchars($_POST["nama"]);
        $email = htmlspecialchars($_POST["email"]);
        $nilai = (int)$_POST["nilai"];

        if ($nilai > 70) {
            $status = "Lulus";
        } else {
            $status = "Remedial";
        }

        echo "<div class='output'>";
        echo "<h3>Hasil Ujian</h3>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $nilai <br>";
        echo "<strong>Status: $status</strong>";
        echo "</div>";
    }
    ?>
</body>
</html>
