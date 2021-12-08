"use strict";

// ------------------- WIP ------------------- 

window.onload = function () {
    getData()
    postData()
}

// --------- Get data from the database ---------
async function getData() { // Must be [async]
  let data = await fetch('https://web2-groupbackend-teammark.herokuapp.com/challenges') // API ophalen
  let json = await data.json();
  let HTMLstring = "";

  json.forEach(input => {
    HTMLstring += `
        <section>
            <article>
                <article>
                        <article>
                            <h3>${input.name}</h3>
                            <h3>Exp: ${input.points}</h3>
                        </article>
                        <article>
                            <h3>course: ${input.course}</h3>
                            <h3>Session: ${input.session}</h3>
                    </article>
                </article>
                <section>
                    <button id=btn>Delete<i class="fas fa-1x fa-trash"></i></button>
                    <button id=btn>Edit<i class="fas fa-1x fa-pencil-alt"></i></button>
                </section>
            </article>
        </section>
    `
  })

  document.getElementById("container").innerHTML = HTMLstring; // Show in page
  
}

function postData() {
    document.getElementById("from").addEventListener("submit", e => {
        e.preventDefault();

            let inputName = document.getElementById("name").value;
            let inputPoints = document.getElementById("points").value;
            let inputCourse = document.getElementById("course").value;
            let inputSession = document.getElementById("sessions").value;

            fetch("https://web2-groupbackend-teammark.herokuapp.com/challenges", { // Does work
                method: "POST",
                headers: { // headers is important [ Content-type ]
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ // Links with Ids (inputs)
                    name: inputName,
                    points: inputPoints,
                    course: inputCourse,
                    session: inputSession
                })
            })

            // Moet nog Refresh

    }), getData()
}

