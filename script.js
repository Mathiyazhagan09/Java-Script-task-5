
const tasks = [
    {
        name: "Learn JavaScript",
        completed: true,
        dueDate: "2026-10-27"
    },
    {
        name: "Practice Arrays",
        completed: false,
        dueDate: "2026-10-29"
    },
    {
        name: "Build a Project",
        completed: false,
        dueDate: "2026-10-30"
    },
    {
        name: "Learn Date Methods",
        completed: true,
        dueDate: "2026-10-26"
    }
];

console.log("All Tasks:");

tasks.forEach(task => {
    console.log(task.name);
});

const completedTasks = tasks.filter(task => {
    return task.completed === true;
});

console.log("Completed Tasks:");
console.log(completedTasks);


const pendingTasks = tasks.filter(task => {
    return task.completed === false;
});

console.log("Pending Tasks:");
console.log(pendingTasks);


const taskNames = tasks.map(task => {
    return task.name;
});

console.log("Task Names:");
console.log(taskNames);


const result = tasks.find(task => {
    return task.name === "Practice Arrays";
});

console.log("Find Task:");
console.log(result);

const totalTasks = tasks.reduce((count, task) => {
    return count + 1;
}, 0);

console.log("Total Tasks:", totalTasks);


const today = new Date();

console.log("Today's Date:", today.toLocaleDateString());


const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);

const overdueTasks = tasks.filter(task => {
    const dueDate = new Date(task.dueDate);

    return task.completed === false &&
           dueDate < todayDate;
});

console.log("Overdue Tasks:");
console.log(overdueTasks);


const hasPendingTask = tasks.some(task => {
    return task.completed === false;
});

console.log("Any Pending Task:", hasPendingTask);


const allCompleted = tasks.every(task => {
    return task.completed === true;
});

console.log("All Tasks Completed:", allCompleted);
