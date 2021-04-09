function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },


    printDescription: function () {
      console.log(`Task Description:" ${this.description}`)
    },

    markCompleted: function () {
      this.complete = true;
    }

  };
  return task;

};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//Logging tasks:
task1.logTaskState(); // Clean Cat Litter has not been completed
task2.logTaskState(); // Do Laundry has not been completed
task1.printDescription();
task2.printDescription();


