class User {
    constructor(name, age) {
        name = document.querySelector('.name').value;
        age = document.querySelector('.age').value;
        if (!name || !age) return;

        this.name = name;
        this.age = age;
    }
}

class BMI extends User {
    constructor(height, weight) {
        super();
        height = document.querySelector('.height').value;
        weight = document.querySelector('.weight').value;
        if (!height || !weight) return;

        this.height = height.replace(',', '.');
        this.weight = weight;

        Object.defineProperty(this, '_bodyMassIndex', {
            value: BMI.getBMI(this.height, this.weight),
            enumerable: false,
            writable: false
        })

        this.bmiSituation = BMI.verifyBMI(this.bodyMassIndex);
    }

    get bodyMassIndex() {
        if (typeof this._bodyMassIndex === 'undefined') {
            window.alert('weight or height not inserted');
            return;
        }
        return this._bodyMassIndex;
    }

    //static method to get the body mass index
    static getBMI(height, weight) {
        if (weight <= 0 || height <= 0 || !weight || !height) return;

        if (height % 1 === 0) height = (height / 100);
        
        const bmi = (weight / (height * height));

        if (isNaN(bmi) || !bmi || typeof bmi !== 'number') return;
        return bmi.toFixed(2);
    }

    static verifyBMI(bmi) {
        if (bmi < 18.5) return 'underweight';
        if (bmi <= 25)  return 'normal weight';
        if (bmi <= 30)  return 'overweight'
        if (bmi <= 35) return 'obesity'
    }
} 

