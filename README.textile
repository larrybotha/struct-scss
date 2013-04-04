h1. Styleguide

"Demo":http://larrybotha.github.com/styleguide

This is a base for creating a styleguide of elements that may appear in a website. Some elements and styles are inspired by Twitter Bootstrap. Many of them have been cleaned, namespaced, and made more modular.

Much of the structure is inspired by BEM, OOCSS, and SMACSS methodologies.

h2. Purpose

The purpose of this styleguide is to create a visual library of elements for new projects. Doing this allows you to see and interact with site elements before working on the actual project. Elements can be tested in different environments which will make your project faster to develop, and more robust. This assists a device-agnostic approach to responsive development.

h2. Features

This styleguide contains many elements you may not require in a project - be sure to remove any styles / scripts that are not required for your projects.

Some of the main features:

# built with Sass - with some useful "utilities":https://github.com/larrybotha/styleguide/tree/master/css/sass/utilities 
## styles, utilities, and variable have all been separated
# indexed styles for fast reference and better organisation
# based on "H5BP":http://html5boilerplate.com/ and "normalize.css":http://necolas.github.com/normalize.css/
# contains WordPress default styles for editor generated classes, and the WordPress gallery
# responsive navigation pattern
# button styles consistent for anchors, labels, button tags, and submit tags
# "dynamically nestable responsive grid":http://tympanus.net/codrops/2013/02/04/creating-nestable-dynamic-grids/ - inspired by "GridPak":http://gridpak.com
# icon font
# a whole lot more!

Delete what you don't need, and enjoy!

h2. Usage

Do not include the index.html for this styleguide in your production code - this file is a reference for the project, and does not belong with a live site. Additionally, you should move all project assets to the location from which you will be developing the project to prevent duplication of your assets. The following would make for a good workflow:

# move all project assets to your project folders:
## img/
## css/
## fnt/
## style.css
# create symlinks in your styleguide folder for all the moved folders and files
# do it

h4. License

MIT: http://larrybotha.mit-license.org/
