fetch("országok.json")
  .then((response) => response.json())
  .then((data) => {
    const orszagokDiv = document.getElementById("orszagok");
    const orszagok = data.orszagok;

    orszagok.forEach((orszag) => {
      const orszagDiv = document.createElement("div");
      orszagDiv.innerHTML = `
        <table><tr><th>Ország</th><th>Terület</th><th>Népesség</th><th>GDP</th></tr>
        <tr><td><h2>${orszag.orszag}</h2></td>
        <td>${orszag.terulet} km²</td>
        <td>${orszag.nepesseg}</td>
        <td>${orszag.gdp}</td></tr></table>
      `;
      orszagokDiv.appendChild(orszagDiv);
    });
  });
