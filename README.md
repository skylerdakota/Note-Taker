# Note-Taker
An application that can write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file

[Note Taker App](https://skylerdakota.github.io/Team-Roster-Generator/)

![Demo](Assets/roster.png)

#### Project Demonstration

* [Application Demonstration](https://drive.google.com/file/d/1apEu5VemyZsXn0xMmWjGmszI2r7c1d-H/preview)

#### Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contributor Guidelines](#contributor-guidelines)
5. [Code of Conduct](#code-of-conduct)
6. [Test Instructions](#test-instructions)
7. [License](#license)
8. [Questions](#questions)

#### Project Description

* This project uses Node CLI to prompt the user and gather information about new employees to generate an HTML webpage that displays summaries for each person.

#### Installation Instructions

* This app requires installing the inquirer and jest npm node.js packages to run.

#### Usage Information

* The application will be invoked by using the following command when in the appropriate directory:

```
node index.js
```

#### Contributor Guidelines

* Contributions are welcome please follow the code of conduct (see below)

#### Code of Conduct

* [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

#### Test Instructions

* Run npm run test to make sure code functionality remains in tact if edited

#### License

* licensed under the [MIT License](Develop/LICENSE.txt)

#### Questions

* [Skyler Dakota's GitHub Page](http://github.com/skylerdakota)
* skylerdakota@gmail.com





# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Important/HerokuGuide.md) for getting your app deployed on Heroku.

- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
