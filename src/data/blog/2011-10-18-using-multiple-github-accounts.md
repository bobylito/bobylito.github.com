---
title: How to use mulitple GitHub accounts
pubDatetime: 2011-10-18
tags:
  - git
  - github
  - ssh
---

## Using github with multiple accounts

Nowadays having a github account is quite convenient (if not mandatory for some). It's a great way to show what your skills are to potential employers or future clients. The only problem is that when you finally got hired by this dream company who found you on Github, you realize that they use Github too. In that case you might wonder if it's a good idea to use your personnal account.

I decided to open a new account for this purpose. And here is my personnal recipe (tutorial) on how to use both accounts on one computer.

Disclaimer : I use MacOS X and Linux, and I don't have a clue how it could work for windows.

### SSH Keys

I'll assume here you already have keys and their public parts and they are both registered on your github accounts. Let's say, we have the following in our \~/.ssh folder :

    id_rsa_alice
    id_rsa_alice.pub
    id_rsa_bob
    id_rsa_bob.pub

Now let's edit the _config_ file. We are adding some url specific configuration :

    Host alice.github.com
      Hostname github.com
      User git
      IdentityFile ~/.ssh/id_rsa_alice
    Host bob.github.com
      Hostname github.com
      User git
      IdentityFile ~/.ssh/id_rsa_bob

The lines above actually create an automatic redirection to the respective account on github when using either bob.github.com or alice.github.com.

For example, when you want to clone a repository with the "Bob" account, instead of using:

    git clone git@github.com:bob/bobsproject.git

You should use :

    git clone git@bob.github.com:bob/bobsproject.git

The same way, when configuring an origin for an "Alice" project, it be should set up this way:

    git remote add origin git@alice.github.com:alice/p1.git

But there is a trick (or a bug if you are a glass half empty person), and the person who will commit will be the one configure in the git configuration.

### Configure git

There are two ways for configuring git : either globally or project specific. And because we use two certificates, it has to be project specific. To configure Alice in a git project you have to type the following commands, go to the project folder and type :

    $ git config user.name "Alice In Wonderland"
    $ git config user.email "alice@wonderland.com"

For more information, check [the git book](http://book.git-scm.com/2_setup_and_initialization.html)

### That's it

Well here you are, you have everything you need to know to use multiple github accounts. Please leave a comment, if you find any mistakes or you come up with a better solution.

### Update from [Legion comment on HackerNews](http://news.ycombinator.com/item?id=3332459)

In the .ssh/config file : it is not mandatory to use FQDN pattern for ssh names, this means we could have used aliceGH instead of alice.github.com

The same way, we specify the user in the configuration so when configuring the origin of a git repository, we could simply use :

    git clone bob.github.com:bob/bobsproject.git

or if we add the origin after :

    git remote add origin alice.github.com:alice/p1.git

and last but not least the .git part is useless, and we can use :

    git remote add origin alice.github.com:alice/p1
