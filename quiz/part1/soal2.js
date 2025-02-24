let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(JSON.stringify(input));

    let tanggal = input[3];
    let tanggalArray = tanggal.split("/");

    let monthName = "";
    switch (tanggalArray[1]) {
        case "01": monthName = "Januari"; break;
        case "02": monthName = "Februari"; break;
        case "03": monthName = "Maret"; break;
        case "04": monthName = "April"; break;
        case "05": monthName = "Mei"; break;
        case "06": monthName = "Juni"; break;
        case "07": monthName = "Juli"; break;
        case "08": monthName = "Agustus"; break;
        case "09": monthName = "September"; break;
        case "10": monthName = "Oktober"; break;
        case "11": monthName = "November"; break;
        case "12": monthName = "Desember"; break;
        default: monthName = "Invalid Month";
    }
    console.log(monthName);

    let newDatearray = [tanggalArray[2], tanggalArray[0], tanggalArray[1]];
    console.log(JSON.stringify(newDatearray));

    console.log(tanggalArray.join("-"));

    console.log(input[1].slice(0, 15).trim());

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */