<img src="./logo.png" alt="Logo" width="240" />

# 🆓 🌎 🚨 Free Dirt Alert

Are you tired of having a super difficult time finding fill dirt? Look no further! [FreeDirtAlert.com](https://freedirtalert.com) is your one-stop-shop for finding free clean dirt and top soil. Looking for a place to dump fill dirt? You can probably find that on this site too. The possibilities!

## About

This project was created as a joke– all thanks to incessant posting of Craigslist dirt listings in @synapsestudios' Slack.

Many of the tools used for this project are *not* the right tools for the job– I was more interested in experimenting with new technologies. (react-scripts, react-fela, gh-pages, prettier, husky/lint-staged, docker, node, etc.)

The app consists of two parts–
1. the site itself ([./src](./src)) + ([./public](./public))
1. a nodejs script to automatically update the site with new listings ([./excavator.js](./excavator.js)). The "Dirt Excavator 3000" runs hourly in a [Docker](https://hub.docker.com/r/chrisheninger/freedirtalert.com/) container on my home [network attached storage](https://en.wikipedia.org/wiki/Network-attached_storage) device, a [Synology DiskStation](https://amzn.to/2zVaqe0).

🚜 🚜 🚜
