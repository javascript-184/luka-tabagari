let veGetebles = prompt("")
switch (veGetebles.toLowerCase()) {
    case "carrot":
        alert(`${veGetebles} Hello!`.trim())
        break
    case "Broccoli":
        alert(`${veGetebles} Welcome!`.trim())
        break
    default:
        alert(`${veGetebles.toUpperCase().trim()} Neither`)
}
//ახსნა აქ გვაქვს ჩვეულებრივ switch operatori  რომელშიც გამოვიყენე trim() რადგან მომხმარებელმა რომ გამოტოვოს
// სფეისები აქ არ აისახოს შესაბამისად გვაქვს სიტყვები რომლებზეც რეაგირებს თუ სხვა რაიმეს ჩავწერთ default ერთვება საქმეში
