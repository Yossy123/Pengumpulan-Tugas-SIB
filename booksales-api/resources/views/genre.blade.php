<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h2>Genre List</h2>
            <ul>
            @foreach($genres as $genre)
                <li>{{ $genre['id'] }} - {{ $genre['name'] }}</li>
            @endforeach
            </ul>

</body>
</html>
