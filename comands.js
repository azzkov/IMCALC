const form = document.getElementById('form');
form=addEventListener('submit', executar);

function executar(event){
    event.preventDefault();
    const peso=document.getElementById('peso').value;
    const altura=document.getElementById('altura').value;

    const result= peso/(altura*altura);
    console.log(result);
    const result1=` 

    <li>Olá, seu peso é ${peso} e seu IMC mede ${result.toFixed(2)}</li>

        `;
    const show = document.getElementById('apresentar');
    show.innerHTML=result1;
    }

