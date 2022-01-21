class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }
    getName() {
        return this._name;
    }
    setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    };
    getId() {
        return this._id;
    };
    setId(id) {
        if (id > 0)
            this._id = id;
        else throw "ID is not valid";
    }

    getSalary() {
        return this._salary;
    };
    setSalary(salary) {
        if (salary > 0)
            this._salary = salary;
        else throw "Salary is not valid"
    }

    getGender() {
        return this._gender
    };
    setGender(gender) {
        if (gender == "M" || gender == "F")
            this._gender = gender;
        else throw "Invalid gender";
    }

    getStartDate() {
        return this.startDate
    };
    setStartDate(startDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = startDate == undefined ? 'undefined' :
            startDate.toLocaleDateString('en-US', options);
        if ((new Date(empDate) <= new Date()))
            this.startDate = empDate;
        else throw "Invalid Date"
    }
    //method
    toString() {
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 300000);
console.log(employeePayrollData);

try {
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 400000, "F", new Date());
console.log(newEmployeePayrollData.toString());

let employee1 = new EmployeePayrollData();

employee1.setId(12);
employee1.setName("Alexa");
employee1.setSalary(600000);
employee1.setGender("F");
employee1.setStartDate(new Date('1/1/2022'));
console.log(employee1.toString());

try {
    employee1.setName("demo1");
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}

try {
    employee1.setStartDate(new Date('01/7/2021'));
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}

try {
    employee1.setStartDate(new Date('11/7/2022'));
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}

try {
    employee1.setId(23)
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}

try {
    employee1.setSalary(-10000);
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}

try {
    employee1.setGender("Female");
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}