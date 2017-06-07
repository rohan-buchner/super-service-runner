# A simple NodeJS based service loader & scheduler.

Ever wanted to have multiple microservices run off of a single instance... then look no further.
With SSR you easily do just that

## How to

Create either a single js file within the services folder... or create a sub folder named the SAME as your intended app entry. eg:

~~~
services/bar.js
services/bar/bar.js
~~~

Your app entry should only export a single function which will be invoked by the runner.

`services.config.yml` should contain an entry for your service with the following at minimum. The properties you want to add to the config is dependent on your service requirements, but the sceduler itself only needs these:

~~~
foo: 
  enabled: true
  cron: "*/1 * * * * *"
~~~

...where in the above example foo is matches either the following by convention:
~~~
services/foo.js
~~~

or 

~~~
services/foo/foo.js
~~~


then run
`node start.js`
