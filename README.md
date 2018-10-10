![picture alt](https://i.imgur.com/aKxaiTj.png)
____
### Introduction
A on-line platform designed for movie fans to share and celebrate movie quotes. The idea is that well scripted movie quotes are a powerful tool and can have lasting impact.

![picture alt](https://nasircode92.files.wordpress.com/2018/06/screen-shot-2018-08-29-at-13-13-47.png?w=258&h=254")

* [Demo - Home page](https://movie-wisdom.herokuapp.com/movies)
* [Demo - Movies index](https://movie-wisdom.herokuapp.com/movies)
* [Demo - Movie quotes ](https://movie-wisdom.herokuapp.com/movies)

### Technologies used
* HTML5
* CSS3
* Node.js
* Express.js
* EJS (Embedded JavaScript)
* Git
* MongoDB
* Mongoose
* Heroku

___
## Project brief

A blogging platform that meets the following minimum criteria:
#### The app must:

* Have at least 2 models – one representing a user and one that represents the main resource of your app.

* Incude relationships - embedded or referenced. Make sure you take the time to consider the best approach before building out your models.

* The app should include authentication - with encrypted passwords & an authorization flow.

* Have complete RESTful routes for at least one of your resources with all CRUD actions.

* Include wireframes - that you designed before building the app.

* Have semantically clean HTML - write HTML that makes structural sense.

* Be deployed online and accessible to the public.

***
### Challenges
As this was my first ever JavaScript endeavour, I found the project as a whole a challenge. I had to adopt to learn JavaScript coding skills within the code (e.g. declaring global variable and functions) and learn coder's skills outside of the code (e.g. mind mapping coding solutions and pre planning code to be written).


***
### Favourite feature

As much as I enjoyed going through my many code challenges throughout this project (like adding Simpsons nelson sound or Discos Stue's 80's dance off gif), my favourite achievement has to be deployment of Super Mario sounds throughout the gameplay. This was achieved through two blocks of code in the JavaScript file.


So throughout the game development I discovered the need to create a separate play sound function which would serve useful application throughout the code.
```js
function playSound(soundFile) {
  const soundEffect = new Audio();
  soundEffect.src = soundFile;
  soundEffect.play();
  return soundEffect;
}
```

## Future features
There are plenty of features which given the time I would love to add to this game such as
* Complete the mailing list Db model
* Add user authentication
* Add carrousel on landing page of latest quotations
* Better user flow
* Better wireframes
