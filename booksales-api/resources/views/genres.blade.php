<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>INI ADALAH GENRE BUKU</h1>
            <ul>
            @foreach($genres as $genre)
                <ul>
                    <li>{{ $genre['name'] }}</li>
                    <li>{{ $genre['description'] }}</li>
                </ul>
            @endforeach
            </ul>

</body>
</html>
