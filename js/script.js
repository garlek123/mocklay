const tombolKonversi = document.querySelector('.tombolKonversi');


tombolKonversi.addEventListener('click', function() {
    const kalimat = document.querySelector('#kalimat').value;
    let ubahAlay = kalimat.split('');
    
    for(let i = 0; i < ubahAlay.length; i++) {
        if(ubahAlay[i] == 'a') ubahAlay[i] = '4';
        if(ubahAlay[i] == 's') ubahAlay[i] = '5';
        if(ubahAlay[i] == 'i') ubahAlay[i] = '1';
        if(ubahAlay[i] == 'o') ubahAlay[i] = '0';
        if(ubahAlay[i] == 'e') ubahAlay[i] = '3';
        if(ubahAlay[i] == 'g') ubahAlay[i] = '9';
    }
    
    document.querySelector('#hasil').value = ubahAlay.join('');
});

const tombolCopy= document.querySelector('.tombolCopy');
    
tombolCopy.addEventListener('click', function() {
    const hasil = document.querySelector('#hasil');
    hasil.select();
    hasil.setSelectionRange(0, 9999999999);
    document.execCommand("Copy");

    swal({
        title: "Teks ter-copy!",
        text: hasil.value,
        icon: "success",
        button: "Exit",
      });
});