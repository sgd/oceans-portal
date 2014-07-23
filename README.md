

 ██████╗  ██████╗███████╗ █████╗ ███╗   ██╗███████╗
██╔═══██╗██╔════╝██╔════╝██╔══██╗████╗  ██║██╔════╝
██║   ██║██║     █████╗  ███████║██╔██╗ ██║███████╗
██║   ██║██║     ██╔══╝  ██╔══██║██║╚██╗██║╚════██║
╚██████╔╝╚██████╗███████╗██║  ██║██║ ╚████║███████║
 ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝


# The oceans portal is a statically generated website built using:

Foundation (http://foundation.zurb.com/)
Jekyll (http://jekyllrb.com/)
Compass (http://compass-style.org/)

## GETTING THE SITE RUNNING LOCALLY:

### STEP 0
If you’re running a PC you will need to install ruby (macs comes with it):
http://rubyinstaller.org/

### STEP 1
Clone the repo from Github:
https://github.com/sgd/oceans-portal

### STEP 2
Jekyll is the core of the website that transforms all the static HTML pages into a real website, it also acts as a local server. You will need to install and run Jekyll to see the site locally and to see any changes you’ve made.

Open Terminal
$ gem install jekyll
$ cd to-where-you-cloned-the-github-directory
$ jekyll serve
$ jekyll build --watch (The current folder will be generated & watched for changes)
Browse to http://localhost:4000

### STEP 3
Compass compiles all the SCSS into a single CSS file that gets delivered. You will need to install compass and then make it watch for changes to see anything you’ve done.  
Open Terminal
$ gem update --system
$ gem install compass
$ cd to-where-you-cloned-the-github-directory
$ compass watch
