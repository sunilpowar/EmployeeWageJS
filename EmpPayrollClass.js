class EmployeePayrollData {
    //Property
    id;
    salary;


  //Constructor
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  //Getter and Setter Method
  get name() { return this._name; }
  set name(name) {this._name = name; }

  //Method
  toString() {
    return "id=" + this.id + ", name='" + this.name + ", salary="+ this.salary;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Karan", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
employeePayrollData.name = "Sourabh";
console.log(employeePayrollData.toString());