# angular7

## NG CLI Commands

- ng new [name] :  Creates new app
- ng serve : Run a server on ort 4200 which runs the code, if errors about:
    > ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected.
    
    > then run:

    > **npm audit fix --force**
    
- ng generate component [component-name] : Creates a new component, creates the directpry inside src/app, creates the 
css, html, spec.ts and ts files with a template ready to use and update the `app.module.ts` to include the new component
    > ng g c [component-name] : shortcut
    
## Adding bootstrap (or other libraries)
 
- npm install --save bootstrap : Adding bootstrap to the project
- Update `angular.json` to add the dependency
 
## Components
 
- Need the decorator `@Component` passing a JS object for configuring
- Need a HTML template (inline or external)
- Need a unique selector
- Ways to reference a component:
  * By Element: Default mode i.e. `<component-name>`
  * By Attribute: When the `selector` is enclosed within `[]` then the component is referenced by attribute i.e. <div `component-name`>
  * By class: When the `selector` is prefixed with a `.` then the component is referenced by class i.e. <div class = '`component-name`>

## DataBinding

![image](imgs/DataBinding.png)

- String Interpolation: We can use anything that resolves as a string
  * {{ variable }}
  * {{ 'STRING' }}
  * {{ method() }} //Must return a string
- Property Binding: Used to change DOM Elements properties, usage: <element `[`propertyToChange`]` = "varToBindiningInTSFile" >, 
note the `propertyToChange` must be enclosed within `[]`
- Event Binding: Used to react to events, usage: <element `(`eventName`)` = "codeToExecute or Function" >, 
note the `eventName` must be enclosed within `()`
- 2-way-Binding: Use `[(ngModel)]` to configure the 2-way-binding, usage: <input `[(ngModel)]="varToPoint"`>

## Directives

- They are instructions on the DOM
- Don't need template
- Tipically use the `attribute` style `[]`
- Use the `@Directive` decorator

### Existing Directives

- *ngIf : Receives any code that resolves as a boolean, usage: <p `*ngIf="true"`>Show</p>
- Else : For using else we need to add a marker in the DOM enclosing what we want in the else, and add `else markerInDomName` '
after the `*ngIf` condition, usage: `<p *ngIf="serverCreated; else noServer">IF CODE</p>
    <ng-template #noServer>ELSE CODE</ng-template>`
- ngStyle : used binding to a property so use it within `[]`, ie: `<p [ngStyle]="{backgroundColor: getColor()}"></p>`

_Notes: The `*` means is structural directive changing the DOM_