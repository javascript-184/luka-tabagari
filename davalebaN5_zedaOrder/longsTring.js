let text = ["Helloworld!", "luka", "eseasegamovidasaqme", "esarisyvelazedidisitYva"];

function lonGstring(strings) {
    let longest = strings[0];  // ყველაზე გრძელი
    let shortest = strings[0]; // ყველაზე მოკლე

    strings.forEach((veliu) => {
        if (veliu.length > longest.length) {
            longest = veliu;
        }
        if (veliu.length < shortest.length) {
            shortest = veliu;
        }
    });

    console.log(` ${longest}  ${longest.length})`);
    console.log(` ${shortest}  ${shortest.length})`);
}

lonGstring(text);
