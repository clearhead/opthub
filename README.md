opthub
======

Sync an Optimizely snippet w/ your local fs - easier version control, linting, code reviews etc...

## Installation ##

```bash
npm install -g opthub
```

## Hello World ##

```bash
# Run it!
$ opthub 
prompt: http://cdn.optimizely.com/js/THIS_NUMBER.js:  1127947420
./opthub-output/: 2 experiments / wrote 8 files

# See what downloaded: 
$ ll ./opthub-output/*
./opthub-output/exp-1-ab
├── [-rw-r--r-- tomfuertes  643 Jun  1 17:32]  README.md
├── [-rw-r--r-- tomfuertes   36 Jun  1 17:32]  global.css
├── [-rw-r--r-- tomfuertes   40 Jun  1 17:32]  global.js
└── [-rw-r--r-- tomfuertes  253 Jun  1 17:32]  variation-1.js
./opthub-output/exp-2-ab
├── [-rw-r--r-- tomfuertes  643 Jun  1 17:32]  README.md
├── [-rw-r--r-- tomfuertes   36 Jun  1 17:32]  global.css
├── [-rw-r--r-- tomfuertes   40 Jun  1 17:32]  global.js
└── [-rw-r--r-- tomfuertes  253 Jun  1 17:32]  variation-1.js
```

## Multiple Projects Support ##

```bash
# Compile your snippet ids (1 or more)
$ curl -s http://www.optimizely.com | grep -n cdn.optimizely.com
6:<script type="text/javascript" src="//cdn.optimizely.com/js/5935064.js"></script>

# Make a ./.opthubrc file w/ snippet/name pairs
$ echo '{"1127947420":"opthub-output","5935064":"optimizely-example"}' > .opthubrc

# Run it!
$ opthub
./optimizely-example/: 75 experiments / wrote 169 files
./opthub-output/: 2 experiments / wrote 8 files
```