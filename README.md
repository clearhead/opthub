opthub
======

Sync an Optimizely snippet w/ your local fs - easier version control, linting, code reviews etc...

## Installation ##

```bash
npm install -g opthub
```

## Hello World ##

See the output in [./opthub-output/](./opthub-output/)!

```bash
# Run it!
$ opthub 
prompt: http://cdn.optimizely.com/js/THIS_NUMBER.js:  1127947420
./opthub-output/: 2 experiments / wrote 8 files
```

## Multiple Projects Support ##

See the output in [./opthub-output/](./opthub-output/) and [./optimizely-example/](./optimizely-example/)!

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

## Authors ##

* Tom Fuertes - [tomfuertes](//github.com/tomfuertes) | [thisbetom](//twitter.com/thisbetom)

## Clearhead? ##

We're an AB Testing Consulting Agency specializing in Optimizely engagements. [We're hiring](http://clearhead.me/#contact-nav)!