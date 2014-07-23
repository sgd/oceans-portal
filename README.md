      ___           ___           ___           ___           ___           ___     
     /  /\         /  /\         /  /\         /  /\         /__/\         /  /\    
    /  /::\       /  /:/        /  /:/_       /  /::\        \  \:\       /  /:/_   
   /  /:/\:\     /  /:/        /  /:/ /\     /  /:/\:\        \  \:\     /  /:/ /\  
  /  /:/  \:\   /  /:/  ___   /  /:/ /:/_   /  /:/~/::\   _____\__\:\   /  /:/ /::\ 
 /__/:/ \__\:\ /__/:/  /  /\ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/::::::::\ /__/:/ /:/\:\
 \  \:\ /  /:/ \  \:\ /  /:/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\~~\~~\/ \  \:\/:/~/:/
  \  \:\  /:/   \  \:\  /:/   \  \::/ /:/   \  \::/       \  \:\  ~~~   \  \::/ /:/ 
   \  \:\/:/     \  \:\/:/     \  \:\/:/     \  \:\        \  \:\        \__\/ /:/  
    \  \::/       \  \::/       \  \::/       \  \:\        \  \:\         /__/:/   
     \__\/         \__\/         \__\/         \__\/         \__\/         \__\/    
     

## Oceans Portal is built using:

* Foundation (http://foundation.zurb.com/)
* Jekyll (http://jekyllrb.com/)
* Compass (http://compass-style.org/)

## Getting the site running locally

#### Setup
* Install the XCode (https://developer.apple.com/xcode/) and the Xcode Command Line Utilities (https://developer.apple.com/downloads/ — you'll have to sign in, then search for "command")
* If you’re running a PC you will need to install ruby (http://rubyinstaller.org/)
* [Install the GitHub App ](http://mac.github.com/)
* [Install Git](http://git-scm.com/downloads)
* Open Terminal

#### Step 1
Clone the repo from Github:
https://github.com/sgd/oceans-portal

#### Step 2
Jekyll is the core of the website that transforms all the static HTML pages into a real website, it also acts as a local server. You will need to install and run Jekyll to see the site locally and to see any changes you’ve made.

```
$ gem install jekyll
$ cd to-where-you-cloned-the-github-directory
$ jekyll serve
$ jekyll build --watch (The current folder will be generated & watched for changes)
```

Browse to [http://localhost:4000](http://localhost:4000)

#### Step 3
Compass compiles all the SCSS into a single CSS file that gets delivered. You will need to install compass and then make it watch for changes to see anything you’ve done. 

```
$ gem update --system
$ gem install compass
$ cd to-where-you-cloned-the-github-directory
$ compass watch
```

#### Done
You should now be able to see the latest version of the Portal on your local machine! 