const getTodos = async () => {
    const todos = [
        { text: "Do the dishes", isChecked: false },
        { text: "Do them again", isChecked: false },
        { text: "Do them a third time", isChecked: true },
    ];

  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 2000);
    }
  );
};


export { getTodos };