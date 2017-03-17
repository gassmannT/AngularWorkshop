# The ultimate Angular workshop - Starter files

## Useful links
* https://angular.io/docs/ts/latest/
* [Our slides on GitHub](https://github.com/gassmannT/AngularWorkshop/blob/master/bat_tga_The_ultimate_Angular_Workshop.pdf)
* Ask Thomas :-)

## Steps to start
* Clone this repository
* Open a terminal in the `start` folder
* Type `npm install` (packages will be downloaded)
* To run the application type `npm start`

## Todos
* `session-list.component.html`
    * Add a ngFor directive to iterate through our list of session and show the properties
    * Add a link to the details page with parameter id

* `app-routing.module.ts`
    * Add a route to the edit page (SessionDetailComponent) and pass parameter (hint: :id)

* `app.module.ts`
    *  Check if all components are declared

* `session-detail.component.html`
    * Show the session title
    * Add a TwoWay-Data Binding to the input
    * Show div only if rating is lower than 4


## Advanced Todos
* `session-list.component.html`
    * Only show 10 characters of the reason and if no reason is presented show default message 

* `session-detail.component.html`
    * Set textarea required if rating is lower than 4
    

## Expert Todos
* Add unit tests
* Add e2e tests


Solution can be found in `final` folder.