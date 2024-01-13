## Prosa [![Build Status](https://github.com/babbitt/prosa/actions/workflows/deploy.yml/badge.svg)](https://github.com/babbitt/prosa/actions/workflows/deploy.yml/)

Prosa is a fork of [Prose](https://github.com/prose/prose) which describes itself as:

Prose provides a beautifully simple content authoring environment for [CMS-free websites](https://web.archive.org/web/20150307201729/http://www.developmentseed.org/blog/2012/07/27/build-cms-free-websites). It's a web-based interface for managing content on [GitHub](http://github.com). Use it to create, edit, and delete files, and save your changes directly to GitHub. Host your website on [GitHub Pages](http://pages.github.com) for free, or set up your own [GitHub webhook server](https://web.archive.org/web/20160316104312/https://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).

**Why use Prosa vs Prose?**

Prose has been abandoned as a project for over 6 years. Prosa has the required fixes to get Prose up and running with a modern version of node (V20 tested) and also features Github CI/CD for automatic deployments. I've also been churning through the backlog of issues reported on the original Prose project as well as adding some features I've been looking for.

Currently the notable differences between this fork and the upstream are:
* Full client side login (no Gatekeeper required)
* Functional image uploading
* Updated metadata input fields
* Various bug-fixes

[Read more about Prosa](http://joebabbitt.com/prosa/#about)


### Setting up Prosa with your site

Right now Prosa is largely similar to Prose. I'll point you to their configuration wiki until I write my own.

> Prose supports configuration settings with a variety of options, which makes it easy to adjust the application to support your project needs. Read the [Getting Started Guide](https://github.com/prose/prose/wiki/Getting-Started) to learn more.

### Installation and developing

Prosa is hosted via github pages at [joebabbitt.com/prosa](http://joebabbitt.com/prosa), or you can use on your own server. If you're looking to help drop me a line. My hope is still to eventually have all my changes upstreamed if the Prose project ever becomes active again.
