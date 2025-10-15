<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h2>Author List</h2>
        <ul>
            @foreach($authors as $author)
                <li>{{ $author['id'] }} - {{ $author['name'] }}</li>
            @endforeach
        </ul>
</body>
</html>