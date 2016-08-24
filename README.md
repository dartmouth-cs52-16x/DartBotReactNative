#  DartBot iOS companion app 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

***
![](https://raw.githubusercontent.com/dartmouth-cs52/DartBotReactNative/master/imgs/demo.gif)


## Architecture

Our code is organized into four main repos: the API backend, the DartBot Tour Guide frontend, the Facebook Messenger bot using botkit, and finally, the iOS companion App. This repo stores the full React Native code for the companion app. 

Now specifically on to the companion app: 

Although having a front-end website alongwith a facebook messenger bot might have been considered enough platform coverage, our team felt that certain user needs could only be fulfilled via a mobile app. Indeed, the goal here was not to simply port our website on to the mobile platform -- it was to instead fulfill certain user needs that could not be reached otherwise. 

Specifically, the emphasis on real-time geolocation / location tracking (via Apple Maps integrations) meant that the mobile app achieved peak synchronization with user movements. Along with the messenger bot and website, the iOS companion app hopefully delivers a fully immersive experience for anyone touring Dartmouth.


## Setup

### :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`


### :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`


## Deployment


## Authors

Ahsan Azim

## Acknowledgments

Although this will be expanded upon later, for now it suffices to say that I developed this app with the aid of the excellent Ignite starter-kit. I'm a big fan of some of their underlying tech choices; at the very least, using Ignite prevents several annoying npm-installs. 

The main restriction to coding this app from scratch was time -- as our team was already maintaining multiple disparate platforms, we needed to ration time. One may think that using the Ignite starter-kit may not be *that* time efficient considering the current state of the Ignite project (the starter code they give you could be made more user-friendly -- as I discussed with the founder in [this](https://github.com/infinitered/ignite/issues/150#issuecomment-241232328) github issue). Still, I found Ignite to be a net positive, and would recommend it to anyone. 




   