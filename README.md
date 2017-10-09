[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC--4--NC-blue.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
# OpenJam1.DuckDuck
Small arcade/strategy game made for Open Jam starting October 6th 2017

![Phaser+ES6+Webpack](https://raw.githubusercontent.com/lean/phaser-es6-webpack/master/assets/images/phaser-es6-webpack.jpg)
Phaser-Webpack boilerplate can be found at: https://github.com/lean/phaser-es6-webpack

Duck and pipe assets found at http://kenney.nl

## TODO
1. Create leaderboard
2. SFX and music
3. Countdown before game starts
4. Skins to earn, instead of just a duck
5. Other game modes?

## Post jam reflections
I kinda stubled upon Open Jam, while checking when the next Ludum Dare is. Just wanting to do a game jam, seeing that the Open Jam started 2 days later, this was perfect! I started out with good intentions, a completely freed up weekend, and started looking into the tools I wanted to use.

### Engine
Here I was looking at Unity, Phaser and LibGDX. Mostly because I've worked with all of them before, and could get something finished fairly fast. In the end I ended up with using Phaser just because it's what I've been using the most lately

### Other tools and assets
Github, just becuase it's my go to platform for source control.
fonts.google.com, great way to find some decent fonts and it's bundled into Phaser, so the font loader automaticly uses it.
Kenney.nl, awesome site for free graphical assets. I've even bought the first and second Kenney pack before, just to support them.
Adobe Illustrator, not really a reason behind this. I own it, therefore I use it. Just my go to for creating easy or placeholder assets.
Weback/Phaser boilerplate. I've used it in my earlier Phaser projects, and I'm super happy with how it works. Easy and straight forward to setup. The possibility to use ES6 over ES5 is great!
Visual Studio Code, since I recently moved from Sublime Text 3 to VSCode, I haven't looked back. The built in terminal and the plethora of plugins makes it awesome for javascript projects.

### The idea - Leave a mark
The theme for this game jam was interesting. I started looking into games like Plague Inc., and other infection and bacteria games, but soon saw that the time I had wouldn't be enough when it was a one man team. After that I looked into some smaller turnbased strategy games, but couldn't find a cool take on it. Then I got inspired by games like Splatoon. I really like Splatoon, and The Unfinished Swan, and I started looking for a smaller take on the "paint the world" premise. What I came up with was a kind of paint gun placed in the middle of the screen. This was to be the players base. Then from each of the four corners, there would ooze paint of different colors into the screen, trying to take over the center base. You would then have to spray your color gun at the oozing blobs to keep them at bay for as long as possible.

### Out of time
I started programming after work on Friday, about 12 hours after the Open Jam opened. I got to where I had a paint gun working after a few hours of brainstorming, setup and programming. On Saturday I barely had time to work on the game at all. More or less the whole day Saturday and Sunday went into my acctual job and some real life stuff. Then when I was going to bed on Sunday, at about 3am. 3 hours before the deadline, I had more or less given up on delivering anything at all. I didn't stand a chance finishing the game I started out to make, not with 3 hours left. I then figured it better to just finish something, than not finish at all, so I got to work.

### The end product
With only 3 hours left on the clock, I looked into ways of creating a small and easy game out of what I had. I then figured I could create a water jet, where the player was to balance an object on top of the jet for as long as possible. This ended up being too easy, and I had to figure out something else. With only a couple of hours left, I really wanted to create a path of hoops the player had to pass the object though. I saw this was going to take too long, and then, in quick and dirty game jam fashion, I went with moving the object from one side to the other on a loop. I then mushed together a menu in a few minutes, just becuase Phaser is stupidly easy to use, this went really quick. Then about on hour before the deadline, 5am in the morning, I managed to squeeze out a small game utilizing the water jet I had made for my original idea. Not the game I wanted to make, but with life coming in the way, and a limited time to finish, this is all I had time for. I still have a small todo list I'd like to put into the game at some point, but that would have to wait for now.