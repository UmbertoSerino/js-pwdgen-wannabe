    const nome = prompt("Inserisci il tuo nome:");
    const cognome = prompt("Inserisci il tuo cognome:");
    const colorePreferito = prompt("Inserisci il tuo colore preferito:");

    let passwordSicura = nome + cognome + colorePreferito + '21';

    document.getElementById("output").innerHTML = "<strong>Chi sei?</strong>" + passwordSicura;

    console.log(passwordSicura);
    console.log (typeof passwordSicura);

    console rimanda il valore
    BruceWayneBlack21
    string