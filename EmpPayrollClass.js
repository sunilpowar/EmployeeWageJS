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
        if (nameRegex.test(name))
        {
            this._name = name;
        }
        else 
            throw 'Name is Incorrect!'; 
    }

    get id() { return this._id; }
    set id(id) {
     let idRegex = RegExp('^[1-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else
            throw "The Given Id Is Invalid";
    };

    get salary() { return this._salary; }
    set salary(salary) 
    {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else
            throw "The Given Salary Is Invalid";
    };

    get gender() { return this._gender; }
    set gender(gender)
    {
        let genderRegex = RegExp('M|F');
        if(genderRegex.test(gender))
            this._gender=gender;
        else
            throw "The Given Gender Is Not Correct";
    }

    //Validate start date is not future date
    get startDate(){ return this._startDate; }
    set startDate(startDate)
    {
        let todayDate = new Date();
        if(startDate <= todayDate)
            this._startDate = startDate;
        else
            throw "The Given Date Is Greater Than Current Date";
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

let employeePayrollData = new EmployeePayrollData(1, "Karan", 50000, "M", new Date());
console.log(employeePayrollData.toString());
try {
employeePayrollData.id = 2;
employeePayrollData.name = "Sourabh";
employeePayrollData.salary = 75000;
employeePayrollData.gender = "D";
employeePayrollData.startDate = new Date();
console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(3, "Snehal", 75000, "F", new Date());
console.log(newEmployeePayrollData.toString());