# browser-event-hook

browser-event-hook is a lightweight JavaScript library that provides a simple way to handle events.

## Installation

You can install using npm:

```shell
npm install browser-event-hook
```

## Usage

```javascript
import { useBrowserEvent } from "browser-event-hook";

const { listen, dispatch } = useBrowserEvent();

const options = {
  // native event options
  once: false,
  passive: false,
  capture: false,
  ..., // Also can use other supported browser's event options
  
  // custom event options
  lazyDelay: 0, // Delay in milliseconds, default is 0, if the same event occurs within the delay time, the delay time is reset
};

const { on, off } = listen("customEvent", (e) => {
    console.log(e.detail);
  }, 
  options // optional
);

dispatch("customEvent", { detail: "Hello World!" });
// => Hello World! 

off();  // remove the listener

dispatch("customEvent", { detail: "Hello World!" });

// Nothing happens

on(); // add the listener again

dispatch("customEvent", { detail: "Hello World!" });

// => Hello World! 
```

## Contribution Guidelines
1. __Fork the Project__: Start by forking the project to your GitHub account. This allows you to freely try out modifications without affecting the original project.
2. __Create a Branch__: After you have forked the project, create a branch on your fork for your feature or bug fix. This keeps your contributions nicely isolated and makes it easier to integrate your changes later.
3. __Make Commits__: Make your contributions on your branch. Try to keep your changes focused and commit frequently with clear, descriptive commit messages.
4. __Follow the Style Guide__: Please follow any coding style guides and conventions used in the project. Consistent code makes it easier for everyone to understand and maintain.
5. __Write Tests__: If possible, write tests for your modifications. This ensures that your changes work as expected and prevents future changes from accidentally breaking your feature.
6. __Stay Up-to-Date__: Periodically pull changes from the original project to keep your fork up-to-date. This makes it easier to merge your changes later.
7. __Make a Pull Request__: When you're ready, make a pull request from your branch on your fork to the original project. In the pull request description, explain your changes and how they improve the project.

Remember, the key to good open source contribution is not just about code, it's also about collaboration and respect. Always be courteous to other contributors, respect the maintainer's decisions, and remember that everyone is volunteering their time to make the project better. Happy contributing!
