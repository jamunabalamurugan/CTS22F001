console.log(document)
document.getElementById('marks-form').addEventListener('submit',function(e){

    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResults,2000);
    e.preventDefault();
});

function calculateResults(){
    console.log('Calculating Matrks...');
    var total=(92+94+95+95+96);
    const average=total/5;
    const admission=document.getElementById('admission-status');
    if(average>80){
    admission.value=average.toFixed(2);
    document.getElementById('results').style='block';
    document.getElementById('loading').style='none';
    }
}
function showError(error){
    document.getElementById('results').style='none';
    document.getElementById('loading').style='none';
    const errorDiv=document.createElement('div');
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,5000);

}
function clearError()
{
    document.querySelector('.alert').remove();
}