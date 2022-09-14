fetch("movies.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (movies) {
        var sortedL = movies.data.sort((a, b) => {
            return (b.score == a.score) ?
                a.title.localeCompare(b.title)
                :
                b.score - a.score

        })

        console.log(sortedL);
        sortedL.forEach(element => {
            console.log(element.id + ". " + element.title + " " + element.score / 20 + "/5");
        });

    });