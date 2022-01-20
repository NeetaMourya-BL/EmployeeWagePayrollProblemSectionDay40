class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name() {
        console.log("inside getter");
        return this._name;
    }
    set name(name) {
        console.log("inside setter");
        this._name;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Neeta", 600000);
console.log(employeePayrollData);
employeePayrollData.name="Seeta";
console.log(employeePayrollData);