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

        sortedL.forEach(element => {
            document.getElementById("data").innerHTML += 
            `
         <div style=" border: 0.5px solid black;">
            <p style=" margin: 10px;">${element.id}. <br/> ${element.title} <br/> ${element.score/20}/5</p>
         </div>
      `
            console.log(element.id + ". " + element.title + " " + element.score / 20 + "/5");
        });

    });