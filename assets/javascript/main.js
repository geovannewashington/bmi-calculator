document.addEventListener('DOMContentLoaded', () => {
const resultDiv = document.querySelector('.result');

    document.querySelector('.form').addEventListener('submit', e => {
        e.preventDefault();
        
        const bmiResult = new BMI();
        resultDiv.innerHTML = `
            <p>${bmiResult.name} your BMI is: ${bmiResult.bodyMassIndex}</p>
            <p>It means that you are at "${bmiResult.bmiSituation}"</p>
        `;
    })

});
