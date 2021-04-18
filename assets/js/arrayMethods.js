const container = document.getElementsByClassName("changeMe");

const report = (item) => console.info(item);

report(container[0]);

report(container.item(2));
document.write(container.item(2).classList);
