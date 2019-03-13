# NYTTOP - A good feed of news on the New York Times API

This project is the step 2 of the ThoughWorks job interview, where you can find the requirements and the description below

## Description & Requirements

We at Thoughtworks really want to have a way to keep our team up to date with the most important news in science and technology, health, politics and the world. To do this, we need your help so that you create a web page that contains this information. Our suggestion is that you consult The New York Times, http://developer.nytimes.com/, and get your information from a fetch at api top_stories. Your page must contain the following requirements:

1. We would like your page to have 4 news headlines: Science & Technology, Health, Politics and the World. According to the sectors of The New York Times science, technology, health, politics and world.
1. When we browse by sector, we should not see the news from other sectors.
1. Each sector must have at least 3 news items.
1. The news should have a highlight that contains the title of the news (with emphasis), when it was created and the author. Respectively title, published_date, and byline.
1. When we click on the news, we should be able to check the same previous information added by a kicker, if available, below the title and the abstract in the form of a paragraph.
1. The style of the page should be consistent with The New York Times as referenced. The use of other colors and models is allowed as long as it makes the experience more interesting.
1. The use of images available on the answer json is at your discretion.

## Mandatory Requisites

1.There must be a descriptive README, which can be in Portuguese or English. The README should contain relevant architectural information, explanations, and comments, and contain all the information necessary to run the problem.

1. Your code must have a initializer script, one suggestion is to use Makefiles to run the commands.
1. The url we want you to expose is http://localhost:3000/nyttop.

## About this project

The project was made with Javascript, using the framework Vue.js. Vue.js is a progressive framework as it grows as you need, I used it for a faster development given the time, besides that is a great way to make reusable projects, using web components methodology.

I also used Bulma as framework css, I used it, because i wanted to make the javascript code, components made of it and architecture the main concern taken.

For making http requests,I used it a lib called axios, I know that the fetch api is native, but the fetch apis comes to be a bit annoying to deal, as doesn't has a http interceptors by default and we cannot make an instance of it, so we cannot make a plugin for vue.

Because of the small scope of the project, I didn't use it the flux pattern, what in vue is called vuex, but for do that it's incredible easy, as it has components that are listening and waiting for data. The refactor of the code require a minimum amount of effort.

It has 17 test suites, with 40 unit tests and a mean of 2 tests per component.

The Test pyramid here it's showed below with a bottom-up(bottom more tests, top less tests) view.

e2e 0 (it has hero because of I run enough of time to do that)
snapshots(which guarantees the visual of component) 11
unit 40

## Getting Started

To run the project, you have to follow the steps below:

```
git clone <repo:origin> <repo-dir>
cd <repo-dir>

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
