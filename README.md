# Django Template

A basic template for a django project.  This template does not currently assist with packaging or deployment.

Note: This is not a tutorial.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

If you have docker installed you can launch the dev environment with little/no changes by running `docker-compose up`

### Prerequisites

There are not many prerequisites for this template.  I recommend python3 with virtualenv.  Also NodeJS 6.4.11 if you
intend to use a ReactJS frontend.

A great way to install NodeJS is using the nodesource distributions here: https://github.com/nodesource/distributions


### Installation

1. Download the latest release or master branch
1. Copy and edit the settings files as needed.
    
    `cp ./config/settings/example.local.py ./config/settings/local.py`
1. Alter the License file as needed.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Largely based off of [Dylan Stein's guide](https://medium.com/@djstein/modern-django-part-0-introduction-and-initial-setup-657df48f08f8) with my own little changes as I use and alter the template.
* Frontend built by following the [Serverless Stack Guide](https://serverless-stack.com/) with my own twist.
