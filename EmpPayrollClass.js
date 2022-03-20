class EmployeePayrollData {
    //Property
    id;
    salary;
    gender;
    startDate;

    //Constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  //Getter and Setter Method
  get name() { return this._name; }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name))
       this._name = name;
    else throw 'Name is Incorrect!';
 }

  //Method
  toString() {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      const empDate = !this.startDate ? "undefined" :
                      this.startDate.toLocaleDateString("en-US", options);
    return "id=" + this.id + ", name='" + this.name + ", salary="+ this.salary + ", "+
            "gender=" + this.gender +  ", startDate=" + empDate;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Karan", 50000);
console.log(employeePayrollData.toString());
try {
employeePayrollData.id = 2;
employeePayrollData.name = "sourabh";
console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(3, "Snehal", 75000, "F", new Date());
console.log(newEmployeePayrollData.toString());